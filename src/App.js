import './App.css'
import Landing from './components/landing/landing';
import {
  BrowserRouter as
    Router,
  Route,
  Routes,
  Link

} from "react-router-dom";
import Home from './components/login/Home'
import Register from './components/register/Register'



function App() {
  return (
    <div className="App">

      <Router>
        <nav>
          <Link to='/home'>
            <button className='btn btn-primary'>Login</button>
          </Link>
          <Link to='/register'>
            <button className='btn btn-secondary'>register</button>
          </Link>
        </nav>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
        </Routes>

      </Router>
    </div >
  );
}

export default App;

