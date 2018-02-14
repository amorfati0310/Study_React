import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import './index.css';

class MarkdownApp extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <article className="markdown-app">
        <MDHeader />
        <MDBox />
      </article>
    );
  }
}

class MDHeader extends React.Component {
  render() {
    return (
      <header>React Markdown</header>
    );
  }
}

class MDBox extends React.Component {
  constructor() {
    super();
    this.state = {
      mdValue: '# 제목1\n## 제목2\n### 제목3\n\n[링크](http://www.naver.com)\n\n**굵은글씨**\n\n~~취소~~\n\n설명설명설명설명'
    };
  }
  handleChangeInput(evt) {
    this.setState({ mdValue: evt.target.value });
  }
  render() {
    return (
      <div className="markdown-box">
        <MDInput onChange={this.handleChangeInput.bind(this)} mdValue={this.state.mdValue} />
        <MDOutput mdValue={this.state.mdValue} />
      </div>
    );
  }
}

class MDInput extends React.Component {
  render() {
    return (
      <div className="input">
        <textarea onChange={this.props.onChange} defaultValue={this.props.mdValue}></textarea>
      </div>
    );
  }
}

class MDOutput extends React.Component {
  render() {
    return (
      <ReactMarkdown className="output" source={this.props.mdValue} />
    );
  }
}

ReactDOM.render(<MarkdownApp />, document.querySelector('#container'));

/*
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        { TODO }
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{ TODO }</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

*/
