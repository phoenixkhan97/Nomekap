
import './App.css';

function App() {

  const canvas = document.querySelector("canvas")
  const context = canvas.getContext("2d")

  canvas.width = 960
  canvas.height = 565

  context.fillStyle = "white"
  context.fillRect(0,0,canvas.width, canvas.height)
  
  return (
    <div className="App">
      <canvas></canvas>
    </div>
  );
}

export default App;
