import { Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/contact' element = {<Contact/>}/>
     </Routes> 
    </div>
  );
}

export default App;
