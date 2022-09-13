/* eslint-disable*/

import './App.css';
import { useState, useSyncExternalStore } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코드 추천', '강남 우동 맛집', '파이썬 독학']); 
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);


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
        let copy = [...글제목];   //카피본을 만들어 얘를 수정하는것이 좋음.
        console.log(copy == 글제목);
         copy[0] = '여자 코트 추천';
        
        글제목변경(copy);
      }}>글수정</button>

{/* 
      <div className="list">
        <h4 onClick={ ()=>{ setModal(!modal) } }>{ 글제목[0] } <span onClick={ () => {console.log( 따봉변경(따봉+1) )}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={ ()=>{ setModal(!modal) } }>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={ ()=>{ setModal(!modal) } }>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>      */}




      {
        글제목.map(function(a, i){
          return(
            <div className="list" key={i}>
            <h4 onClick={ ()=>{ setModal(!modal) } }>{ a } 
              <span onClick={ () => {
                let copy = [...따봉];
                copy[i] += 1;
                따봉변경(copy)  
             }}>👍</span> {따봉[i]} 
            </h4>
            <p>2월 17일 발행</p>
          </div>   
          )     
        })
      }



      {
        modal == true ? <Modal 글제목={글제목} /> : null
      }
      
    </div>
  );


  // Modal 컴포넌트 생성
  function Modal(props) {
    return(
        <div className='model'>
          <h4>{props.글제목[0]}</h4>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
    )        
  }
}



export default App;
