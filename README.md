<!-- 220811 -->

# state
## state 안에 여러 값 넣기
```let [글제목, b] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );```
userState()를 3번써서 3개를 만들 수도 있지만 array자료를 이용해서 쓸 수도 있다.

한 곳에 여러개의 문자를 집어넣고 싶으면 []대괄호 안에 문자들을 끼워넣고 콤마로 구분해주면 된다. 

하니씩 꺼내서 쓸 때는 인덱싱을 해줘서 
`{ 글제목[0] }` 이런식으로 사용이 가능하다.
<br><br>

## 버튼 기능개발 
```js
function App(){
  
  let [따봉] = useState(0);
  return (
     <h4> { 글제목[0] } <span>👍</span> { 따봉 }</h4>
  )
}
```
글제목 옆에 따봉(👍)을 누르면 따봉 옆 숫자({따봉})의 숫자를 하나씩 늘리려고 한다. 

그 전에 일단 기본 html파일에선 onclick 이벤트 핸들러를 달 때
```js
// 일반 html
<div onclick=" ~실행할 js~ ">
```
이런식으로 하지만

```html
// jsx
<div onClick=" ~실행할 함수!~ ">
```
jsx에서는

1. Click이 대괄호
2. {} 중괄호 사용
3. 그냥 코드가 아닌 함수
이 세가지를 잘 기억해야 함 
<br>

### state에 함수넣기?
onClick={}안에 함수를 넣어주여야 한다.

1. 다른곳에서 만들 함수 명을 넣어주어도 되고
2. 바로 그자리에서 함수를 만들어 넣어주어도 된다

✔️ 2번의 경우 나중에 재사용이 불가함

```html
<!-- 참고 -->
<div onClick={ function(){ 실행할 코드 }}>
<!-- 축약 버전 : allow함수인 듯 -->
<div onClick={ () => { 실행할 코드 }}>
```
<br><br>



## 💫 state 변경하는 법
주의할 점이 몇 가지 있음. 헷갈림...
```js
functon App(){
    
    let [따봉] =  useState(0);
    return(
        <h4> { 글제목[0] } <span onClick = { ()=> {따봉 = 따봉 + 1}}>👍</span> {따봉} </h4>
    )
}
```
기존엔 걍 `변수+=1`하면 됐는데 
지금 사용하고 있는건 변수가 아닌 state임.

state는 **state변경 함수를 써서 state를 변경**해야 함 
안그럼 html 재렌더링이 안 됨.
<br>

```js
let [따봉, 따봉변경] = useState(0);
```
state 만들 때 2번째로 작명하는 것이 바로 state변경을 도와주는 함수이다.
이걸 써야 state가 변경이 가능하다 

사용법 : `따봉변경(새로운 state)`
이렇게 쓰면 됨.
왜냐면 state변경함수는 ()괄호 안에 넣은걸로 state를 변경해주는 함수라 그럼

ex) 따봉변경(1) → state가 1로 변경 
    따봉변경(100) → state가 100으로 변경
<br>
❗중요한 점은
따봉변경( 따봉 = 따봉+1)같이 변수처럼 쓰는건 안된다는것! 깔끔하게 state만 넣을 수 있음

<br><br>



### Sample Code ) 좋아요를 눌렀을 때 따봉이라는 state를 1증가 시키기
```js
function App(){

    let [따봉, 따봉변경] = useState(0);

    retunr(
        <h4> {글제목[0]} <span onClick = { ()=> {따봉변경(따봉+1)}}>👍</span> {따봉}</h4>
    )
}
```
**따봉이라는 기존 state에 1을 더한 값으로 따봉 변경 함수를 넣었음.
그럼 버튼을 누를 때마다 +1씩 되면서 그 값을 대체가 됨.
<br><br>


<!-- 220911 -->
### 💫 array, object state 변경 시 주의사항
``` js
let [글제목, 글제목변경] = useState(['남자 코드 추천', '강남 우동 맛집', '파이썬  독학']); 

<button onClick={()=>{
    let copy = [...글제목];
    copy[0] = '여자 코트 추천';
    글제목변경(copy);
}}>글수정</button>
```
버튼을 누르면 값을 변경하고 싶을 때, 

글제목state를 가져와 `글제목[0] = '여자코트추천';` 이렇게 넣어줄 수 있지만 
원본데이터(글제목)를 최대한 회손하지 않는게 좋음.
 → 그래서 copy본을 만들어 copy[0]의 데이터를 수정한 것.

여기서 중요한 점은 
`let arr = [1, 2, 3];`일 때 [1, 2, 3]이라는 array를 'arr'에 저장하는 것이 아니라 ram이라는 미지의 공간에 [1, 2, 3]을 넣고, 
arr에는 이게 어디있는지 표시해주는 화살표만 넣게 됨.

✔️ 또, state는 `기존state == 신규state`일 경우 **state변경을 하지 않는다.** 
    copy본을 만들때 `let copy = 글제목;`으로 할 경우 화살표의 위치만 저장되므로 copy는 기존 state와 달라지지 않았다고 생각하여 **state를 변경해주지 않음**

✔️ 그래서 state가 array/object자료형일 경우 독립적카피본(shallow copy)을 만들어 수정해야 함.



<br><br><br>

## Component
### component로 만들면 좋은 것들 
1. 반복적인 html을 축약할 때 
2. 큰 페이지들
3. 자주 변경되는 ui같은 것들

❗컴포넌트의 단점 : state를 가져다 쓸 떄 문제가 생김 <br>
→ A함수에 있던 변수를 B함수에서 쓸 수 없음~
<br>


### component 만드는 법 
1. function 만들고
2. return() 안에 html 담기
3. <함수명></함수명> 
<br>


### component Sample Code
```js
//컴포넌트 사용
function sample() {
    <Modal/>
}

//컴포넌트 생성
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
```


<br><br><br>

<!-- 220912 -->
## 동적인 UI (Modal창) 만들기
### 동적인 UI만드는 3step!
1. html, css로 미리 디자인 구현
2. UI의 현재상태를 state로 저장
3. state에 따라 UI가 어떻게 보일지를 작성(조건문 등) 
<br>

#### 1. html, css로 미리 디자인 구현
```js
function Modal() {
    return(
        <div className='model'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
        </div>
    )        
}
```
<br>

#### 2. UI의 현재상태를 state로 저장
```js
let [modal, SetModal] = userState(false);
```
✔️ 관습1) state를 만들때 변수명을 맘대로, 함수명은 `set변수명`으로 작성
페이지를 들어갔을때 상세 페이지(모달창)이 안보이는게 좋을 것 같아 false로 지정
- ['닫힘', '열림'], [0, 1], [false, true] 다 상관 x
- 형식은 자유 : 모달창의 상태를 표현할 수만 있으면 가능
<br>

#### 3. state에 따라 UI가 어떻게 보일지를 작성(조건문 등) 
💡 **삼항연산자** 형식 : `조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드`
```js
{
    modal = true ? <Modal/> : null
}
```
✔️ html안에서 조건문을 쓸때 **중괄호를 열고 시작!**
- null 대신 ''도 가능 (비어있는 html용으로 null을 자주 사용한다)
<bt>

### 📎응용) 모달창 닫기
#### 혼자 풀어본 방법
```js
<h4 onClick = { ()=> {
    if(modal == ture) { setModal(false)} else { setModal(true)}
}}>글제목</h4>
```
if문을 추가하는 방식으로 했는데 선생님 답안을 보니 더 간단한 방법이 있었음. 

#### 이게 더 좋은 방법!
```js
<h4 onClick = { ()=> {
    setModal(!modal)
}}>글제목</h4>
```
`!modal`의 !은 반대의 의미를 지님
그래서 modal의 값을 반대로 바꿔줌! (false면 true를, true면 false를 반환)

<br><br><br>

## map
### 1) array 자료 객수만큼 함수 안의 코드를 실행해 줌
```js
[1, 2, 3].map(function() {
    console.log(1);
})
```
 - result : 1, 1, 1

### 2) 함수의 파라미터는 array 안에 있던 자료임
```js
[1, 2, 3].map(function(a) {
    console.log(a);
})
```
 - result : 1, 2, 3

### 3) return에 뭐 적으면 array로 담아줌
```js
[1, 2, 3].map(function() {
    return('123');
})
```
 - result : ['123', '123', '123]

### 4) 유용한 파라미터 2개 사용 가능
```js
글제목.map(function(a, i){
    return(
        <h4>{a}</h4>
        <p>{i}</p>
    )
})
```
- a : array 안의 데이터들
- i : 반복문을 돌때마다 0부터 1씩 증가하는 변수 <br>
✔️ 중괄호 필수! 자꾸 까먹음..

### 📎응용) 따봉 변경
```js
글제목.map(function(a, i){
    return(
        ...
        <span onClick = { ()=> {
            let copy = [...따봉];
            copy[i] += 1;
            따봉변경(copy);
        }}>👍</span>{따봉[i]}
    )
})
```
- span태그의 👍를 누를때 마다 각각의 따봉수를 변경하려고 함.
- 따봉 state의 값을 필요한 개수만큼 array형식으로 변경해줌 <br>
   → `let [따봉, 따봉변경] = useState([0, 0, 0]);`
- 그리고 따봉의 copy본을 만들어 원본데이터를 수정하지 않으면서 state변경을 함<br>
✔️ **copy본 만드는거 까먹지 말기!** copy본을 안만들고 원본데이터를 수정하려고 함 ㅜㅜ 






<br><br><br>

## props
### 부모에서 자식으로 state 전송하는 법
1. 자식컴포넌트 사용하는 곳에 가서 `<자식컴포넌트 작명={state이름} />`
2. 자식컴포넌트 만드는 function으로 가서 props라는 파라미터 등록 후 `props.작명` 사용

```js
function App (){
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  return (
    <div>
      <Modal 글제목={글제목}></Modal>
    </div>
  )
}

function Modal(props){
  return (
    <div className="modal">
      <h4>{ props.글제목[0] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
```

### 📎참고) 
- props는 `<Modal 이런거={저런거} 저런거={저런거}>` 이런식으로 무한히 전송 가능하다.
- **<Modal 글제목 = {변수명}>** 일반 변수, 함수 전송도 가능하고, <br>
**<Modal 글제목 = "강남우동맛집">** 일반 문자전송은 중괄호 없이 해도 가능


<!-- 220917 -->
<br><br><br>

## props2
### 모달창에 현재 클릭한 글의 글제목 띄우기
동적인 ui만드는 3step에 따라 만들었음

#### 1. html,css로 미리 디자인
- 이미 되어 있음

#### 2. 현재 ui 상태를 state에 저장
상위 컴포넌트에 현재 상태를 저장할 state 정의
` let [title, setTitle] = useState(0);`
 - 현재 제목의 상태로 3가지가 있음.
 - 0번째 글이 보이거나, 1번째 글이 보이거나, 2번째 글이 보이거나 

#### 3. state에 따라 ui가 어떻게 보일지 작성
```js
function App() {
    //1. 현재상태 저장
    let [title, setTitle] = useState(0);

    {
        글제목.map(function(a, i){
            return(
                <h4 onClick = { ()=> {setModal(true); setTitle(i)}}>{글제목[i]}</h4>
                //2. h4(글제목)이 클릭될 때 title의 값을 i(map 안에서의 i는 array(글제목)이 끝날때 까지 반복문이 돌 때 마다 0, 1, 2 ... 이렇게 증가하는 정수)로 변경함
            )
        })
    }

    {
        //3. 하위컴포넌트(Modal)로 title을 사용하려면 props로 전송해야 함 
        modal == true? <Modal title={title} 글제목={글제목} /> : null
    }
}

function Modal(props){
    return(
        // 4. 하위 컴포넌트(Modal)에서 상위컴포넌트(App)에서 보낸 title값을 가져와 글제목에 인덱싱함
        <h4>{props.글제목[props.title]}</h4>
    )
}

```
✔️ 다양한 컴포넌트에서 쓰이는 state는 **컴포넌트들 중 최고로 높은 부모에게 만들어놔야 함**
- state는 `부모→자식`으로만 전송이 가능하기 때문
- 거진 App컴포넌트 안에 만들면 됨 




<br><br><br>

## index1
### 사용자 인풋 다루기
- e.target.value로 이벤트가 발생한 html태그의 입력값을 가져올 수 있음

#### +) 이벤트버블링
- 상위 html로 퍼지는 이벤트 버블링을 막기위해서는 `e.stopPropagation()`을 해주면 됨.

<!-- 220928 -->
<br><br><br>

## 리엑트 라우터 1 : 셋팅 및 기본 라우팅
### react-router-dom 설치
1. 터미널에 `npm install react-router-dom@6`설치 
2. index.js파일에서 </App>을 <BrouserRouter>로 감싸줌 (import 필수)
```js
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
); 
```
<br><br><br>

### 라우터 페이지 나누기 
```js
import { Routes, Route, Link } from 'react-router-dom'

function App(){
  return (
    (생략)
    <Routes>
      <Route path="/detail" element={ <div>상세페이지임</div> } />
      <Route path="/about" element={ <div>어바웃페이지임</div> } />
    </Routes>
  )
}
```
1. 여러가지 컴포넌트 import
2. <Routes>를 만들고 그 안에 `<Route>`를 작성
3. `<Route path="/url경로" element={<보여줄html>} />`




<br><br><br>

## 리엑트 라우터 2 : navigate, nested routes, outlet
`import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'` import
<br><br>

### useNavigate()
페이지 이동은 Link를 써도 되지만 useNavigate()로도 이동가능.
```js
function App(){
  let navigate = useNavigate()
  
  return (
    (생략)
    <button onClick={()=>{ navigate('/detail') }}>이동버튼</button>
  )
}
```
- useNavigate()를 쓰면 그 자리에 페이지를 이동시켜주는 함수가 남음. 
- navigate('/detail')코드가 실행되면 /detail페이지로 이동함.
- navigate(2) 숫자 넣으면 앞으로 가기, 뒤로가기 기능 개발도 가능
  **(-1) 넣으면 뒤로 1번 가기
  (2) 넣으면 앞으로 2번 가기**


<br><br>

### 404페이지
유저가 이상한 경로로 접속했을때는 "없는 페이지"라는 문구를 보여주고싶음
```js 
<Route path="*" element={ <div>없는페이지임</div> } />
```
`<Route path="*>` 하나 맨 밑에 만들어두면 됨.
* 경로는 모든 경로를 뜻해서
위에 만들어둔 /detail이 아닌 다른 페이지로 접속 시 *경로로 안내해줌.

<br><br>

### 서브경로 만들 수 있는 nested routes
/about/member로 접속하면 회사멤버 소개 페이지
/about/location으로 접속하면 회사위치 소개 페이지를 만들고싶으면

```js
<Route path="/about/member" element={ <div>멤버들</div> } />
<Route path="/about/location" element={ <div>회사위치</div> } />
```
이렇게 만들어도 되겠지만

```js
<Route path="/about" element={ <About/> } >  
  <Route path="member" element={ <div>멤버들</div> } />
  <Route path="location" element={ <div>회사위치</div> } />
</Route>
```
이렇게 만들어도 됨.

`<Route>`안에 `<Route>`를 넣을 수 있는데 이걸 Nested routes라고 부름

이렇게 쓰면 
**/about.member**로 접속 시 `<About>`&`<div>멤버들</div>`를 보여줌
**/about.location**로 접속 시 `<About>`&`<div>회사위치</div>`를 보여줌

<br><br>

#### <div\>가 안보임?
위처럼만 코드를 짜면 
/about/member로 접속 시 **`<About>`안에** `<div>멤버들</div>`을 보여줌.
그래서 `<About>`컴포넌트 안에 `<div>`를 어디다 보여줄지 표기해야 잘 보여줌.

```js
<Route path="/about" element={ <About/> } >  
  <Route path="member" element={ <div>멤버들</div> } />
  <Route path="location" element={ <div>회사위치</div> } />
</Route>
```
```js
function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}
```
위에 import해온 `<Outlet>`은 nested routes안에 element들을 어디에 보여줄지 표기하는 곳.

/about/member로 접속 시 `<Outlet>`자리에서 아까의 `<div>`박스들이 잘 보임. 
그래서 유사한 서브페이지들이 많이 필요하다면 이렇게 만드는게 유용할 듯 함!



<br><br><br>

## 리엑트 프로젝트 폴더 구조
 - 컴포넌트 : components
 - 페이지 : routes or pages
 - 함수 : utils
 이런식으로 비슷한 .js파일끼리 한 폴도로 묶어두어야 좋은 폴더구조



<!-- 221002 -->

<br><br><br>

## styled-components 
#### 1. 설치 
`npm install style-components`

#### 2. import 
`import styled from 'styled-components`

#### 3. 형식
``` js
styled.{html태그} ` ~style~ `
```

##### Sample code
```js
import styled from 'styled-components';

let Box = styled.div`
    padding : 20px;
    color : grey;
`;
let Btn = styled.button`
    backgroud : ${props.bg => props.bg};
    color : ${props => pros.bg=='blue'? 'white' : 'balck'};
`;

function Detail(){
    retunr(
        <div>
            <Box>
                <Btn>버튼임</Btn>
            </Box>
        </div>
    )
}
```

### 장단점
#### 장점
1. CSS 파일 오픈할 필요없이 js에서 바로 스타일링 가능
2. 다른 js파일을 오염시키지 않음.
    - css 이름 작명으로 스타일 오염을 막을수도 있음 `컴포넌트명.module.css`
3. 로딩시간 단축
    - 필요한 css만 불러오므로 로딩시간이 단축됨
4. props로 재활용 가능


#### 단점
1. js파일이 복잡해짐
   - 이 컴포넌트가 styled인지 아니면 일반 컴포넌트인지 구분도 힘듦
2. js 파일 간 중복 디자인 시 import 
   - import해서 쓸 바에 걍 CSS파일 씀 



<!-- 221004 -->

<br><br><br>

## Ajax(axios)
#### 1. 설치 
`npm install axios`

#### 2. import 
`import axios from 'axios'`

#### 3. 형식
`axios.get('url')`

##### Sample code
```js
<button onClick={()=>{
  axios.get('url').then((result)=>{
    console.log(result.data);
  }).catch(()=>{
    console.log('error');
  })
}}
```
버튼 클릭 시 url로 get요청을 보냄.
- then() : 성공하면 result로 데이터를 받아올 수 있음
근데 여기 들어오는 데이터에는 여러 부가적인 정보들이 같이 들어오게 됨
그래서 result.data로 데이터를 뽑아야 실질적인 데이터를 가져올 수 있음.
- catch() : 만약 서버에 요청을 실패했을때 catch안의 코드를 실행할 수 있음


<!-- 221004 -->

<br><br><br>

## Ajax(post, fetch))
#### 1. POST
`axips.post('URL', {name:'kim'})`
이렇게 실행하면 서버로 {name:'kim'}자료가 전송됨.
완료 시 특정 코드를 실행하고 싶으면 이것도 뒤에 .then()불이면 됨.

#### 2. 동시에 AJAX요청 여러개 날리기
`Promise.all([axios.get('URL1'), axios.get('URL2')] )`
이렇게 하면 URL1, URL2로 GET요청을 동시에 해주고 
뒤에 .then()을 붙이면 둘 다 완료 시 특정 코드를 실행해줌 

#### 3. fetch?
`fetch('URL').then(결과 => 결과.json()).then((결과)=>{console.log(결과)})`
쌩자바스크립트 문법인 fetch()를 이용해서 GET/POST 요청이 가능
이건 JSON → object/array이렇게 자동으로 바꿔주지 않아서 직접 바꾸는 과정이 필요함


<!-- 221009 -->

<br><br><br>

## Redux
### 1. Redux Toolkit 설치
> #### 1-1. store.js파일 생성
> `npm install @reduxjs/toolkit react-redux`
> 💡 package.json파일의 "react"와 "react-dom" 버전이 18.1.X 이상이어야 잘 동작이 됨.

> #### 1-2. Redux 셋팅
> ```js
> import { configureStore } from '@reduxjs/toolkit'
> 
> export default configureStore({
>   reducer: { }
> }) 
> ```
> state들을 보관하는 파일인 store.js파일을 만들어서 위에 코드 복붙. 
(src폴도에 만들엇음)

> #### 1-3. index.js에서 import
> ```js
> import { Provider } from "react-redux";
> import store from './store.js'
> 
> const root = ReactDOM.createRoot(document.getElementById('root'));
> root.render(
>   <React.StrictMode>
>     <Provider store={store}>
>       <BrowserRouter>
>         <App />
>       </BrowserRouter>
>     </Provider>
>   </React.StrictMode>
> ); 
> ```
> index.js파일에서 Provider라는 컴포넌트와 아까 작성한 파일을 import해옴.
> 그리고 밑에 `<Provider store={import해온거}>` 이걸로 `<App/>`을 감싸면 끝
> 
> 그럼 이제 `<App>`과 그 모든 자식컴포넌트들은 store.js에 있던 state들을 맘대로 꺼내서 쓸 수 있음.

<br>

### 2. store에 state 보관하고 쓰기
> #### 2-1. Redux store에 state 보관하는 법 
> **step 1.** createSlice()로 state 생성<br>
> **step 2.** configureStore() 안에 등록
> ```js
> import { configureStore, createSlice } from '@reduxjs/toolkit'
> 
> let user = createSlice({
>   name : 'user',
>   initialState : 'kim'
> })
> 
> export default configureStore({
>   reducer: {
>     user : user.reducer
>   }
> }) 
> ```
> 1. createSlice() improt 후 
`{name : 'state이름', 'initialState : 'state값'}` 이렇게 넣어주면 state하나가 새성됨.
(createSlice()는 useState()와 용도가 비슷)
> 
> 2. state등록은 configureStore()안에 
` 작명 : createSlice만든거.reducer}` 해주면 등록 끝.
여기 등록한 state는 모든 컴포넌트가 자유롭게 사용 가능함.


> #### 2-2. Redux store에 있는 state 가져다 쓰는 법 
> ```js
> (Cart.js)
> 
> import { useSelector } from > "react-redux"
> 
> function Cart(){
>   let a = useSelector((state) => { return state } )
>   console.log(a)
> 
>   return (생략)
> }
> ```
> 아무 컴포넌트에서 `useSelector(state =>{ return state})`로 쓰면 store에 있는 모든 state가 그 자리에 남음.
> 
> 이걸 변수에 저장하면 store.js에서 등록해 둔 {user:'kim'}이 출력됨
> 
> 📎 `let a = useSelector((state) => > state.user ) ` 이런식으로 축약도 가능
> 
> 💡 간단한거 만들 때 or 컴포넌트가 몇 개 없을 때 => 이럴때는 그냥 props를 쓰는게 코드가 더 짧음.



<br>

### 3. store에 state 변경하는 법
1. store.js에 state변경함수를 만들고
2. exprot
3. import해서 쓰면 되는데, dicpatch()로 감싸서 써야함

> #### 3-1. store의 state 변경하는 법
>> ##### 1) store.js안에 state 수정함수 생성
>> ```js
>> let user = createSlice({
>>   name : 'user',
>>   initialState : 'kim',
>>   reducers : {
>>     changeName(state){
>>       return 'john ' + state
>>     }
>>   }
>> }) 
>> ```
>> slice 안에 `reducers : { }`열고 이 안에 함수를 만들면 됨.
>> - 함수작명은 맘대로
>> - 파라미터 하나를 넣어주면 그건 기존 state가 됨.
>> - return 우측에 새로운 state를 입력하면 그걸로 state를 갈아줌.
>
>> ##### 2) export
>> ```js
>> export let { changeName } = user.actions 
>> ```
>> 이런 코드를 store.js밑에 추가하면 됨
>> `slice이름.actions`라고 적으면 state변경함수가 전부 그 자리에 출력됨.
>> 
>> 이걸 변수에 저장했다가 export하라는 뜻임
>
>> ##### 3) 원할 때 import 사용 
>> ex) Cart.js에 있는 버튼을 클릭하면 state를 'kim'에서 'jhon kim'으로 변경하고 싶으면 
>> ```js
>> (Cart.js)
>> 
>> import { useDispatch, useSelector } from "react-redux"
>> import { changeName } from "./../store.js"
>> 
>> (생략) 
>> 
>> <button onClick={()=>{
>>   dispatch(changeName())
>> }}>버튼임</button> 
>> ```
>> 이렇게 코드짜면 됨
>> - store.js에서 원하는 state 변경함수 가져오고
>> - useDispatch라는 것도 라이브러리에서 가져오기.
>> - 그리고 `dispatch(State변경함수())`이렇게 감싸서 실행하면 state변경 끝!
>> ✔️ dispatch로 꼭 감싸야 실행됨!



<!-- 221015 -->

<br><br><br>

## localStorage
### localStorage
- 크롬 개발자도구에서 Application탭에 들어가면 확인 가능
- object자료와 비슷하게 key/value형태로 저장
- 유저가 브라우저 청소를 하지 않는 이상 영구적으로 남아있음
#### Session Storage
- localStorage와 같지만 sessionStorage는 영구적이진 않고 브라우저를 종료하면 삭제됨

<br>

### localStorage 문법
```js
localStorage.setItem('데이터이름', '데이터');   // 삽입
localStorage.getItem('데이터이름');             // 읽기
localStorage.removeItem('데이터이름');          // 삭제
```
<br>

### localStorage에 array/object자료 저장
문자만 저장할 수 있는 공간이라 array/object는 바로 저장하지 못함
그래서 json으로 변환해서 저장해야 함.

> #### ✔️ array/object → json
>```js
>localStorage.setItem('obj', JSON.stringify({name:'kim'}) );
> ```
> `JSON.stringify()`함수 안에 array/object를 넣으면 됨


> #### ✔️ json → array/object
> ```js
> var a = localStorage.getItem('obj');
> var b = JSON.parse(a)
> ```
> `JSON.parse()`함수 사용





<!-- 221015 -->

<br><br><br>

## localStorage2
### 중복제거
중복젝를 하려면 Set자료형을 쓰면 됨.<br>
Set은 array와 똑같은데 중복을 알아서 제거해주는 array임<br>
`array → Set → array` 으로 사용<br>


```js
(Detail.js)

useEffect(()=>{
  let 꺼낸거 = localStorage.getItem('watched')
  꺼낸거 = JSON.parse(꺼낸거)
  꺼낸거.push(찾은상품.id)

  //Set으로 바꿨다가 다시 array로 만들기
  꺼낸거 = new Set(꺼낸거)
  꺼낸거 = Array.from(꺼낸거)
  localStorage.setItem('watched', JSON.stringify(꺼낸거))
}, [])
```
 - set 변환 : `new Set(array자료)`
 - array로 변환 : `Array.from(Set자료)`



<!-- 221015 -->

<br><br><br>

## 성능개선
### 1. lazy import
```js
(App.js)

import {lazy, Suspense} from 'react'

const Detail = lazy( () => import('./routes/Detail.js') )
const Cart = lazy( () => import('./routes/Cart.js') )

<Suspense fallback={ <div>로딩중임</div> }>
  <Detail shoes={shoes} />
</Suspense>
```
<br>

### 2. memo
```js
import {memo, useState} from 'react'

let Child = memo(function(){
  console.log('child재랜더링')
  return <div>자식컴포넌트임</div>
})

function Parent(){
  let [count, setCount] = useState(0)

  return(
    <Child />
    <button onClick={()=>{ setCount(count+1) }}>+</button>
  )
}
```
memo import 후 memo로 component감싸기 <br>
`let 컴포넌트명 = function(){}`

그럼 이제 Child로 전송되는 props가 변할때만 재렌더링 됨.
> +) memo로 감싼 컴포넌트는 기존props와 바뀐props를 비교하는 연산이 추가로 진행되므로 성능저하의 원인이 될 수 있음. 꼭 필요한 곳에만 사용

#### useMemo
```js
import {useMemo, useState} from 'react'

function 함수(){
  return 반복문 100번 돌린 결과
}

function Parent(){
  let result = useMemo(()=>{
    return 함수()
  }, [])

  return(
    <Child/>
    <button onClick={()=>{
      setCount(count+1)
    }}>+</button>
  )
}
```
useEffet와 유사
> useEffet와 useMemo의 차이<br>
- useEffect : 
- useMemo : html이 렌더링 될 때 같이 


















































<br><br><br>


# etc.
### 터미널/ 브라우저 콘솔창에 warning 없애기
`/*eslint-disable*/`을 js파일 최상단에 추가

<br>

### 유용한 크롬확장프로그램
https://chrome.google.com/webstore/
- **React Developer Tools** : 컴포넌트 미리보기/성능검사 <br>
- **Redux Developer Tools** : redux store state 확인


