import './App.css';
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
