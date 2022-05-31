import { Col, Container, Row } from 'react-bootstrap'
import './content.css'


const Content = () => {
  return (
    <div className="content">
     <Container>
       <Row>
         <Col>
         <h1 style={{color:'white' ,fontSize:'5rem'}}>Learn to Code</h1>
         <h6 style={{fontSize:'23px',color:'#FFC0C7'}}>With the world's largest web developer site.</h6>
         <input className='inp-one' type='search' placeholder='you can find easy'/><br></br>
         <a href="#">Not Sure Where To Begin?</a>
         </Col>
        </Row>
     </Container>
    </div>
  )
}
export default Content