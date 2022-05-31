import { Col, Container, Row } from 'react-bootstrap'
import './profile-bar.css'

const ProfileBar = () => {
  return (
    <Container>
      <Row>
        <Col>
        <span>Fast to find subject</span>
        </Col>
        <Col>
        <input className='search-bar' placeholder='search.....' type='text'/>
        </Col>
      </Row>
    
    </Container>
  )
}
export default ProfileBar