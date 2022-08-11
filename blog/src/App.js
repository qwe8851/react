/* eslint-disable*/



import './App.css';
import { useState } from 'react';

function App() {

  let post = "강남 우동 맛집";  
  let [글제목, b] = useState(['남자 코드 추천', '강남 우동 맛집', '파이썬 독학']); 
  let [따봉, 따봉변경] = useState(0);

  return (
    // jsx문법1) class(x) className(o) 
    // jsx문법2) 중괄호 문법 : {변수명}을 이용하여 데이터 바인딩 가능
    // jsx문법3) style을 넣을때는 object형식으로 (font-size 같은 경우는 fontSize로)

    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={ () => {console.log( 따봉변경(따봉+1) )}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      
    </div>
  );
}



export default App;
