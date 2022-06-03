import './App.css';
import Landing from './components/landing/landing';
import {
  BrowserRouter as
    Router,
  Route,
  Routes,

} from "react-router-dom";
import Home from './components/login/Home'
import Register from './components/register/Register'



function App() {
  return (
    <div className="App">
    
      <Router>
        <Routes>
          <Route path='/' element={  <Landing />}/>
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;

