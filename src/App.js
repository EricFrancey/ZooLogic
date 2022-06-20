import background from './utahpng.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="bg-image" src={background} alt="background" />
          <p className="main-text"> ZooLogic</p>
      </header>
    </div>
  );
}

export default App;
