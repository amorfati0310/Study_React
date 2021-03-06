# Markdown Live Previewer

<br>

## 설계

* 사용한 도구: `create-react-app`, `react-markdown`
* 컴포넌트 구조
  * (그림 추가)

<br>

## 내 코드리뷰

* 컴포넌트 구조에 따른 데이터 흐름 (어디에서 어디로 흐르게 할 것인가?) props, states
* setState
* bind(this)
* `<textarea>{value}</textarea>`(X) => `<textarea defaultValue={value}></textarea>`(O)

<br>

## 다른 분들 코드리뷰로 알게 된 것

* 스타일객체로 선언
  * 나는 css파일을 import 시키는 방식을 사용했는데, js내에서 css를 객체로 정의해서 적용하는 방법도 있었음. <br>
    사용법이 간단하니 다음 코드에 써먹을 것. 그리고 두가지 방법을 적절한 경우에 섞어서 사용하는 방법 고민해보기.
* dangerouslySetInnerHTML
  * 나는 `react-markdown`을 이용해서 컴포넌트에 value만 넘겨주면 html로 변환하는 걸 알아서 저 컴포넌트가 해주니 이런 이슈를 몰랐는데
    일반 markdown.js를 import 해와서 개발하신 분은 이걸 쓰셨더니 변환된 html 객체가 들어가는게 아니라 string 형식으로 들어가서 저걸 사용하셨다고 한다.
    리액트에서 일부러 보안때문에 저런 식으로 처리한다는데 더 알아봐야겠음!

<br>

## 궁금해서 논의한 것

* 이런 단순한 UI개발이 아닌, 실제 UI가 복잡한 프로젝트에서는 CSS를 어떻게 작성하나 궁금? <br>
=> 공통스타일은 css파일로 제작하고, 컴포넌트별 커스텀 스타일만 해당js안에 스타일객체로 기술한다 함.

<br>

## (참고) 실행화면

<img src="https://user-images.githubusercontent.com/23192677/36019823-d03951d0-0dc3-11e8-93a6-cfc3448c9c6c.png" style="width: 400px;">
