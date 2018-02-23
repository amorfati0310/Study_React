import React, { Component } from 'react';
import './App.css';

/**
 * SearchApp (멍청)
 *  - Header (멍청)
 *  - MainSection (똑똑)
 *    - SearchInput (멍청? 똑똑?)
 *    - SearchList (똑똑?)
 *      - SearchListItem (멍청)
 *      - SearchListItem (멍청)
 *      - ...
 */


const SearchListItem = ({ artistName }) => (
  <li>{artistName}</li>
);


class SearchList extends Component {
  constructor() {
    super();
    this.totalList = [];
    this.state = {
      filteredList: [], // 최초 로딩시 한번밖에 안쓰는데 꼭 필요한가.?
      isLoading: true,
      isFailed: false
    };
  }
  componentDidMount() {
    const URL_ARTIST_NAMES = 'https://gist.githubusercontent.com/LumiLoves/6c87a4cf79d5ce2410e849abc8e3f81f/raw/d162071c9db32c35c69e7a2656f1e78833329b85/list.json';

    setTimeout(() => {
      this.getJSON(URL_ARTIST_NAMES, null, (json) => {
        this.totalList = json.Reggae;
        this.setState({
          isLoading: false,
          filteredList: this.totalList
        });
      });
    }, 1500);
  }

  getJSON(url, data, success) {
    const xhr = new XMLHttpRequest();
    let resData = null;

    xhr.open('GET', url);
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) { return false; }
      if (xhr.status !== 200) { this.setState({ isFailed: true }); }

      resData = JSON.parse(xhr.responseText);
      (typeof success === 'function') && success(resData);
    };
    xhr.send(data);
  }
  filter(key) {
    const totalList = this.totalList;
    const regexKey = new RegExp(key, 'i');
    let resultArr = [];

    if (key === '') { return totalList; }
    totalList.forEach((elem) => { elem.match(regexKey) && resultArr.push(elem); });
    return resultArr;
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="search-list">
          <p className="progress-notice">Loading ... (일부러 딜레이 줌)</p>
        </div>
      );
    }

    if (this.state.isFailed) {
      return (
        <div className="search-list">
          <p className="progress-notice">Fail</p>
        </div>
      );
    }

    const filteredList = this.filter(this.props.searchKey);
    const filteredListComponents = filteredList.map((artistName, index) => (
      <SearchListItem artistName={artistName} key={index} />
    ));

    if (filteredList.length === 0) {
      return (
        <div className="search-list">
          <p className="progress-notice">No Results :0</p>
        </div>
      );
    }

    return (
      <div className="search-list">
        <ul>{filteredListComponents}</ul>
      </div>
    );
  }
}


class SearchInput extends Component {
  render() {
    return (
      <div className="search-input">
        <h2>Search: </h2>
        <input type="text" placeholder="Search Keyword ..."
          ref={ref => this.$input = ref}
          onChange={this.props.handleChangeInput}
        />
      </div>
    );
  }
  componentDidMount() {
    this.$input.focus();
  }
}


class MainSection extends Component {
  constructor() {
    super();
    this.state = { searchKey: '' };
  }
  handleChangeInput({ target }) {
    const inputVal = target.value;
    this.setState({ searchKey: inputVal });
  }
  render() {
    return (
      <main id="main">
        <SearchInput handleChangeInput={this.handleChangeInput.bind(this)} />
        <SearchList searchKey={this.state.searchKey} />
      </main>
    );
  }
}


const Header = () => (
  <header id="header">
    <h1>React Search!</h1>
    <p className="desc">
      Here is a list of Reggae artists rendered from a JSON object
    </p>
  </header>
);


const SearchApp = () => (
  <div className="search-app">
    <Header />
    <MainSection />
  </div>
);


export default SearchApp;
