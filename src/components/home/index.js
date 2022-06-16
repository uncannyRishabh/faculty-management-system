import React from 'react'
import Dashboard from '../dashboard'
import Navbar from '../navbar'
import {
	BrowserRouter,
	Routes,
	Route,
  } from "react-router-dom";
import '../../App.css'
import SignUp from '../signup';
import Login from '../login';

const Home = () => {
  return (
	<div className='App'>
		<BrowserRouter>
		<Navbar/>
		<Routes>
			<Route path="/" element={<Dashboard/>} />
			<Route path="/Login" element={<Login/>} />
			<Route path="/SignUp" element={<SignUp/>} />
		</Routes>
	</BrowserRouter>
	</div>
  )
}

export default Home