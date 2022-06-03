import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap'
import './profile-bar.css'

const ProfileBar = () => {
  return (
    <Container>
      <Row>
        <Col>
          <input className='search-bar'
            placeholder='search.....'
            type='text' />
        </Col>
     
      </Row>
    </Container>
  )
}
export default ProfileBar
