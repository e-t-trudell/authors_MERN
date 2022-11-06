import './App.css';
import {useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './view/Main'
import Detail from './components/Detail';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/author' default element={<Main/>}/>
          <Route path="/author/:id"  element={<Detail/>} />
          <Route path="/author/edit/:id" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
