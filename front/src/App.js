import logo from './logo.svg';
import './App.css';
import { Box, Button } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Home from '../src/Home'
import Add from './Add';
import View from './View';
import Edit from './Edit';
import { UpdateProvider } from './UpdateContext';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
      
            <UpdateProvider>
              <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/add' element={<Add/>}></Route>
              <Route path='/view' element={<View/>}></Route>
              <Route path='/edit' element={<Edit/>}></Route>
              </Routes>
            </UpdateProvider>
      
      
      
      
        </header>
      </div>
    </Router>
  );
}

export default App;
