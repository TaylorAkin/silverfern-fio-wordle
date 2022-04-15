import './App.css';
import { Board } from './components/Board';
import { Keyboard } from './components/Keyboard';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
        <Board />
        <Keyboard />
      </nav>
    </div>
  );
}

export default App;
