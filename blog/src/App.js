import logo from './logo.svg';
import './App.css';

function App() {

  let post = "강남 우동 맛집";

  return (
    // jsx문법1) class(x) className(o) 
    // jsx문법2) 중괄호 문법 : {변수명}을 이용하여 데이터 바인딩 가능
    // jsx문법3) style을 넣을때는 object형식으로 (font-size 같은 경우는 fontSize로)

    <div className="App">
      <div className="black-nav">
        <h4 style={{color : "red"}}>블로그임다</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}



export default App;
