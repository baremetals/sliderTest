import './App.css';
import Slider from './components/Slider'
import images from './images'

function App() {
  return (
    <Slider slides={images} />
  );
}

export default App;
