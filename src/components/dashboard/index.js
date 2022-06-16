import React from 'react'
import { Container, AppDescription, Module } from './DashboardComponents'

const Dashboard = () => {
	return (
		<Container>
			<AppDescription>
				Faculty Management System (FMS) is a basic tool, which can perform CRUD operations on the Faculty data.
			</AppDescription>

			<Module to='/addFaculty'>
				Add Faculty
			</Module>

			<Module to='/removeFaculty'>
				Remove Faculty
			</Module>

			<Module to='/modifyFaculty'>
				Modify Faculty Data
			</Module>

			<Module to='/viewFaculty'>
				View All Faculty
			</Module>

		</Container>
	)
}

export default Dashboard