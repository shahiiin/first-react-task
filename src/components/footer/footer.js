import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import { TbBrandTelegram } from 'react-icons/tb'

import './footer.css'




const Footer = () => {


  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col>
            <p>W3Schools is optimized for learning, testing, and training. </p>
          </Col>
          <Col>
            <button className='btn btn-primary'>PHP</button>
            <button className='btn btn-secondary'>LARAVEL</button>
            <button className='btn btn-warning'>JAVA</button>
            <button className='btn btn-success'>PYTHON</button>
          </Col>
          <Col>
            <span><AiOutlineInstagram /></span>
            <span><FiTwitter /></span>
            <span><TbBrandTelegram /></span>
            <span><FiTwitter /></span>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
