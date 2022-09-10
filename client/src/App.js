import Canvas from "./components/Canvas"
import './App.css';

function App() {

  const canvas = document.querySelector("canvas")
  const context = canvas.getContext("2d")

  // canvas.width = 500
  // canvas.height = 300
  

 //context.fillStyle = "red"
 //context.fillRect(0,0,canvas.width, canvas.height)
  
 
  return (
    <div className="App">
      <canvas></canvas>
    </div>
  );
}

export default App;
