
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SinglePost from './pages/SinglePost';
import './App.css';

function App() {
  return (
    <div className="App">
		<Routes>
			<Route path='/post/:id' element={<SinglePost/>} />
			<Route path='/' element={<MainPage/>} />
		</Routes>
       
    </div>
  );
}

export default App;
