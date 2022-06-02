
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
        <Col>
          <button className='btn btn-primary'>Login</button>
          <button className='btn btn-secondary'>Register</button>
        </Col>
      </Row>
    </Container>
  )
}
export default ProfileBar