import 'bootstrap/dist/css/bootstrap.min.css';
import { Router,BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Components/Frontend/Home';
import About from './Components/Frontend/About';
import './assets/css/style.scss';
import Header from './Components/parts/Header';

function App() {

  return (
    <>
      <Header />
    </>
  )
}

export default App
