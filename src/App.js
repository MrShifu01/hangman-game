import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes> {/* Router configuration */}
        <Route path='/' element={<Landing/>}/> {/* Route for the Landing page */}
        <Route path='/home' element={<Home/>}/> {/* Route for the Home page */}
      </Routes>
    </>
  );
}

export default App;

