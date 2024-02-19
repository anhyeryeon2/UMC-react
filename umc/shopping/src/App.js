import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import { useState } from 'react';
import data from './data.js';
import {Routes, Route, Link,useNavigate,Outlet} from 'react-router-dom';
import detail from './routes/detail.js';


function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (

    <div className="App">

    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link onClick={() => {navigate ('/')}}>Home</Nav.Link>
        <Nav.Link onClick={() => {navigate ('/detail')}}>detail</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      
      <Routes>
        <Route path="/" element={
          <>
          <div className='main-bg'></div>
          <div className="container">
            <div className="row">
              {
                shoes.map((a,i)=> {
                  return(
                    <Card shoes={shoes[i]} i={i}></Card>
                  )
                })
              }
            </div>
          </div>
          </>
          } />  

        {/* <Route path="/detail" element={<detail shoes={shoes}/>}/> */}
        {/* <Route path="/*" element={<div> 없는 페이지 </div>}/>


        <Route path="/about" element={<about/>}> 
          <Route path="member" element={<div> 멤버임</div>}/>
          <Route path="location" element={<about/>}/>
        </Route> */}
        <Route path = "/detail/:id" element={<detail shoes={shoes}/>}/>

      </Routes>

    </div>
  );
}


function about(){
  return(
    <div>
        <h4> 외사정보</h4>
        <Outlet> </Outlet>
    </div>
  )
}

function Card(props){
  return(
    <div className="col-md-4">
            <img src={'https://codingapple1.github.io/shop/shoes'+(props.i+1)+ '.jpg'} width="80%" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
          </div>
  )
}


export default App;
