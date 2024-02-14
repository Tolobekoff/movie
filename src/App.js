import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Popular from './pages/Popular/Popular';
import Contact from './pages/Contact/Contact';
import { useState } from 'react';
import MovieSearch from './pages/MovieSearch/MovieSearch';
import TopRated from './pages/TopRated/TopRated';


function App() {
  const [value, setValue]=useState([])
  return (
    <div className="App">
    <Header setValue={setValue}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/popular' element={<Popular/>}/>
      <Route path='/top' element={<TopRated/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/search' element={<MovieSearch/>}/>
    </Routes>
    </div>
  );
}

export default App;
