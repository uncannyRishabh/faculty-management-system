import React, { useState } from 'react'
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
import AddFaculty from '../dashboard/addFaculty';
import RemoveFaculty from '../dashboard/removeFaculty';
import ModifyFaculty from '../dashboard/modifyFaculty';
import ViewFaculty from '../dashboard/viewFaculty';

const Home = () => {
	let [isLoggedIn, setLoggedIn] = useState(true)

	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/SignUp" element={<SignUp />} />

					<Route path="/addFaculty/:id" element={<AddFaculty isLoggedIn={isLoggedIn} />} />
					<Route path="/removeFaculty/:id" element={<RemoveFaculty isLoggedIn={isLoggedIn}/>} />
					<Route path="/modifyFaculty/:id" element={<ModifyFaculty isLoggedIn={isLoggedIn}/>} />
					<Route path="/viewFaculty/:id" element={<ViewFaculty isLoggedIn={isLoggedIn}/>} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default Home