import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = "강남 우동 맛집";

  //destructuring 문법
  let [a, c] = [1, 2];

  
  let [글제목, b] = useState('남자 코드 추천'); //글제목 : state에 보관했던 자료 / b : state 변경을 도와주는 함수
  
  //state를 쓰는 이유?
  //변동 시 html이 재랜더링이 되기 때문에 자동으로 html에반영됨


  return (
    // jsx문법1) class(x) className(o) 
    // jsx문법2) 중괄호 문법 : {변수명}을 이용하여 데이터 바인딩 가능
    // jsx문법3) style을 넣을때는 object형식으로 (font-size 같은 경우는 fontSize로)

    <div className="App">
      <div className="black-nav">
        <h4 style={{color : "white"}}>블로그임다</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}



export default App;
