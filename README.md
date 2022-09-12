<!-- 
# 큰분류(종류 등등)
## 중분류 (제목)
### 소제목 (부제목)

✔️ 팩트
📎 참고
💡 claspan같은 역할
❗주의할 점
❓모르겠는 점
✅ 위에서 깨달은 점
💫 중요




 -->












<br><br><br>

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
# Modal
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

# map
## 1) array 자료 객수만큼 함수 안의 코드를 실행해 줌
```js
[1, 2, 3].map(function() {
    console.log(1);
})
```
 - result : 1, 1, 1

## 2) 함수의 파라미터는 array 안에 있던 자료임
```js
[1, 2, 3].map(function(a) {
    console.log(a);
})
```
 - result : 1, 2, 3

## 3) return에 뭐 적으면 array로 담아줌
```js
[1, 2, 3].map(function() {
    return('123');
})
```
 - result : ['123', '123', '123]

## 4) 유용한 파라미터 2개 사용 가능
```js
글제목.map(function(a, i){
    return(
        <h4>{a}</h4>
        <p>{i}</p>
    )
})
```
- a : array 안의 데이터들
- i : 반복문을 돌때마다 0부터 1씩 증가하는 변수
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
- 따봉 state의 값을 필요한 개수만큼 array형식으로 변경해줌 
   → `let [따봉, 따봉변경] = useState([0, 0, 0]);`
- 그리고 따봉의 copy본을 만들어 원본데이터를 수정하지 않으면서 state변경을 함
✔️ copy본을 안만들고 원본데이터를 수정하려고 함 ㅜㅜ **copy본 만드는거 까먹지 말기!**
<br>











































































<br><br><br>

# etc.
## 터미널/ 브라우저 콘솔창에 warning 없애기
`/*eslint-disable*/`을 js파일 최상단에 추가

