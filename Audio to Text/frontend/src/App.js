import SpeechRecognition from './components/AudioGenerator';
import './App.css';
function App() {
  return (
    <div  className="app flex justify-center items-center w-screen h-screen bg--400">
      <header className="App-header">
       <SpeechRecognition />
      </header>
    </div>
  );
}

export default App;
