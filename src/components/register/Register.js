import { Form, Button, Card } from "react-bootstrap"
import './register.css'

const Register = () => {
  return (
    <div className="register">
    <Card className='login-card'>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="Login"style={{marginTop:25}}>
            Sing in
          </Button>
          <Button variant="danger" type="Login" style={{marginTop:25}}>
            Sing up
          </Button>
        </Form>
      </Card.Body>
    </Card>

  </div>
  )
}
export default Register