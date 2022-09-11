/* eslint-disable*/

import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코드 추천', '강남 우동 맛집', '파이썬 독학']); 
  let [따봉, 따봉변경] = useState(0);


  return (
    // jsx문법1) class(x) className(o) 
    // jsx문법2) 중괄호 문법 : {변수명}을 이용하여 데이터 바인딩 가능
    // jsx문법3) style을 넣을때는 object형식으로 (font-size 같은 경우는 fontSize로)

    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={ ()=>{ 
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
    } }> 정렬버튼 </button>

      <button onClick={()=>{
        // 글제목[0] = '여자 코트 추천';  ← 이렇게 쓸 경우 원본 데이터를 수정해버리므로 
        let copy = [...글제목];   //카피본을 만들어 얘를 수정하는것이 좋음.
        console.log(copy == 글제목);
         copy[0] = '여자 코트 추천';
        
        글제목변경(copy);
      }}>글수정</button>


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

      <Modal></Modal>
      
    </div>
  );


  // Modal 컴포넌트 생성
  function Modal() {
    return(
      <>
        <div className='model'>
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
        <div></div>
      </>
    )        
  }
}



export default App;
