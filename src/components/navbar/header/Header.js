import { Container, Row, Col } from "react-bootstrap"
import './header.css'
import MenuBar from "../menu-bar/MenuBar"
import ProfileBar from "../profile-bar/ProfileBar"





const Header = () => {
  return (
    <div className='header'>
      <Container>
        <Row>
          <Col><MenuBar /></Col>
          <Col> <ProfileBar /></Col>
       
         
        </Row>
      </Container>
    </div>

  )
}
export default Header