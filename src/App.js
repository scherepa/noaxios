import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import {Route, BrowserRouter as Router, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import People from './components/People';
import RandomPerson from './components/RandomPerson';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="App-header">
        <nav>
              <Link to="/" className="App-link">Home</Link>
              <Link to="/about" className="App-link">About</Link>
              <Link to="/people" className="App-link">Elon</Link>
              <Link to="/person" className="App-link">People</Link>   
        </nav> 
      </div>
    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/people" element = {<People/>} />
      <Route path="/person" element = {<RandomPerson/>} />
      <Route path="/" exact element = {<Home/>} />
    </Routes> 
    </div>
   </Router>
  );
}

export default App;
