import Home from "./pages/home"
import Start from "./pages/start"
import Canvas from './pages/canvas'
import Game from './pages/game'
import {Routes,Route} from 'react-router-dom'

import './App.css';

function App() {  
 



  return (
    <div className="App">

        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/start" element={<Start/>}/>
           <Route path="/form" element={<Canvas/>}/>
           <Route path="/game" element={<Game/>}/>
        </Routes>

    </div>
  );
}

export default App;
