import './App.css';
import ApiFile from './Component/API/ApiFile';
import Header from './Component/Header';
import Nav from './Component/Nav';
import Home from './Component/Home';
import { Routes,Route } from 'react-router-dom';
import Store from './Component/Store'
import Iphone from './Component/Iphone';
import Ipad from './Component/Ipad';
import Macbook from './Component/Macbook'
import Accesories from './Component/Accesories'
import Card from './Component/Card';
import Slider from './Component/Slider';
function App() {
  return (
    <div className="App">
        <ApiFile>
          <Header/>
          <Nav/>
        <Slider/>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/store' element={<Store/>}/>
            <Route path='/iphone' element={<Iphone/>}/>
            <Route path='/ipad' element={<Ipad/>}/>
            <Route path='/macbook' element={<Macbook/>}/>
            <Route path='/accesories' element={<Accesories/>}/>
          </Routes>
          <br />
          <br />
         
        </ApiFile>
    </div>
  );
}

export default App;
