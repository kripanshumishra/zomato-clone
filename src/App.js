import './App.css';
import Navbar from './component/Header/Header'
import {BrowserRouter, Routes} from 'react-router-dom'
import Header from './component/Header/Header';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
