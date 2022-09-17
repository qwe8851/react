/* eslint-disable*/

import './App.css';
import { useState, useSyncExternalStore } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코드 추천', '강남 우동 맛집', '파이썬 독학']); 
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');


  return (

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


      {
        글제목.map(function(a, i){
          return(
            <div className="list" key={i}>
            <h4 onClick={ ()=>{ setModal(!modal); setTitle(i)} }>{ a } 
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

      <input onChange={ (e) => {
        입력값변경(e.target.value);
      }} />


      {/* 입력버튼클릭 시 글 추가하기 */}
      <button onClick={()=>{
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy);
      }}>글발행</button>




      {
        modal == true ? <Modal title={title} 글제목={글제목} /> : null
      }
      
    </div>
  );


  // Modal 컴포넌트 생성
  function Modal(props) {
    return(
        <div className='model'>
          <h4>{props.글제목[props.title]}</h4>
          <p>날짜</p>
          <p>상세내용</p>
          <button onClick={()=> 글제목변경()}>글 수정</button>
        </div>
    )        
  }
}



export default App;
