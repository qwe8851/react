import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = "강남 우동 맛집";  
  let [글제목, b] = useState(['여자 코드 추천', '남자 코드 추천', '우동 맛집']); 
  

  return (
    // jsx문법1) class(x) className(o) 
    // jsx문법2) 중괄호 문법 : {변수명}을 이용하여 데이터 바인딩 가능
    // jsx문법3) style을 넣을때는 object형식으로 (font-size 같은 경우는 fontSize로)

    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list" style={{textAlign:"left", marginLeft:"25px"}}>
        <h4>{ 글제목[0] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list" style={{textAlign:"left", marginLeft:"25px"}}>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list" style={{textAlign:"left", marginLeft:"25px"}}>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <hr />
      
    </div>
  );
}



export default App;
