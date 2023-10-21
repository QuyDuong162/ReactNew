import './App.css';

import Navigation from './components/Navigation';
import Main2 from './components/Main2';
import Footer from './components/Footer';
import Player from './components/Player';
import Contact from './components/Contact'
import Detail from './components/Detail'
import {
  Routes,
  Route,
} from "react-router-dom";
import PlayersPresentation from './components/PlayersPresentation';


function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Main2/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
   
  );
}

export default App;