
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Pages/Home';
import Pages from './Components/Pages/Pages';
import Projects from './Components/Pages/Projects';
import Services from './Components/Pages/Services';
import Blog from './Components/Pages/Blog';
import Contact from './Components/Pages/Contact';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/pages' element={<Pages/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    
</BrowserRouter>
    </div>
  );
}

export default App;
