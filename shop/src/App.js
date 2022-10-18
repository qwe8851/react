import React, { useState, useEffect, lazy, Suspense } from 'react'
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'  // react-query → @tanstack/react-query
import axios from 'axios'
import './App.css'
import data from './data.js'
import Test from './test.js'
// lazy import (별도의 js파일로 분리됨)
const Detail = lazy(() => import('./routes/Detail.js'))
const Cart = lazy(() => import('./routes/Cart.js'))



function App() {

  // state 생성
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  // react-query : ajax요청(get)
  let result = useQuery(['작명'], ()=>  
    //대괄호, return 생략
    axios.get('https://codingapple1.github.io/userdata.json')
    .then((a)=>{
      console.log('refetch'); 
      return a.data
    })
    // { staleTime : 2000}
  )

  return (  
    <div className="App"> 
      
      {/* navbar */}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail/1')}}>Detail</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
          { result.error &&  "에러임" }
          { result.isLoading ? "로딩중" :  result.data.name }
          </Nav>
        </Container>
      </Navbar>

      <Suspense fallback={<div>로딩중임.. </div>}>
        <Routes>
          <Route path="/" element={
            <>
            <div className="main-bg"></div>
            <Container>
              <Row>
                {  shoes.map((a,i) => {
                    return <Card shoes={shoes[i]} i={i}></Card> 
                })}
              </Row>
            </Container>
            {/* 서버통신 */}
            <button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json').then((result)=>{
                let copy = [...shoes, ...result.data];
                setShoes(copy);
              }).catch(()=>{
                console.log("실패함");
              })
            }}>더보기</button>
            </>
          } />

          <Route path="/detail/:id" element={ 
              <Detail shoes={shoes} />
          } />
          {/* 이벤트 nested routes */}
          <Route path="/event" element={ <Event/> }> 
            <Route path="one" element={ <p>첫 주문시 양배추즙 서비스</p> } />
            <Route path="two" element={ <p>생일기념 쿠폰 받기</p> } />
          </Route>
          {/* 404페이지 */}
          <Route path="*" element={ <div>없는 페이지 입니다. </div> } />
          {/* 장바구니 페이지 */}
          <Route path="/cart" element={<Cart/>} />
          {/* 성능개선 test */}
          <Route path="/test" element={<Test/>} />
        </Routes>
      </Suspense>
      </div>
  )
}

// component 생성
function Event(){
  return(
    <>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>   {/* 자식라우트 컴포넌트의 위치 지정 */}
    </>
  )
}

function Card(props) {
    return(
      <Col>
        <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) +'.jpg'} width="80%"/>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </Col>
    )
}



export default App
export let Context1 = React.createContext()