import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import Home from './components/home/home';
import Slider from './components/slider/slider';
import Header from './components/header/header';






const App = () => {
  return (
    <div className="App-header">
      <Header />
      <Slider />
      <div className="padding-40">
        
       <Home />
      </div>
    </div>
  );
}

export default App;
