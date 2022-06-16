import React from 'react'
import { Container, AppDescription, Module } from './DashboardComponents'

const Dashboard = () => {
  return (
	<Container>
		<AppDescription>
			Faculty Management System (FMS) is a basic tool, which can perform CRUD operations on the Faculty data. 
		</AppDescription>
		<Module>
			Add Faculty
		</Module>

		<Module>
			Remove Faculty
		</Module>

		<Module>
			Modify Faculty Data
		</Module>

		<Module>
			View All Faculty
		</Module>

		<Module>
			Logout
		</Module>

	</Container>
  )
}

export default Dashboard