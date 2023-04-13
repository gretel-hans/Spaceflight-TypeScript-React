import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNotFound from './components/PageNotFound';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <BrowserRouter>
    <MyNavbar/>
    <div className="App">
      
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/Details/:id' element={<DetailPage />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </div> 
    <MyFooter/>
    </BrowserRouter>
  );
}

export default App;
