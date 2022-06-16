import React, { Component, useState } from 'react'
import axios from 'axios'
import FacultyService from '../../FacultyService'
import { Container, Heading, TableContent, TableHeading } from './DashboardComponents'

class ViewFaculty extends Component {
	constructor(props) {
		super(props)

		this.state = {
			data: []
		}
	}


	componentDidMount() {
		axios.get('http://localhost:8081/auth/view')
			.then(response => {
				this.setState({ data: response.data })
				console.log(this.data);
			});


	}

	render() {
		if (this.props.isLoggedIn)
			return (
				<Container >
					<Heading className="text-center">Faculty List</Heading>
					<br></br>
					<div className="row">
						<table className="table table-striped table-bordered">
							<thead >
								<tr>
									<TableHeading> Faculty ID</TableHeading>
									<TableHeading> Faculty First Name</TableHeading>
									<TableHeading> Faculty Last Name</TableHeading>
									<TableHeading> Faculty Email Id</TableHeading>
									<TableHeading> Faculty Course</TableHeading>
									<TableHeading> Faculty Salary</TableHeading>
									<TableHeading> Faculty PhoneNo.</TableHeading>
								</tr>
							</thead>
							<tbody>
								{
									this.state.data.map(
										data =>
											<tr key={data.id}>
												<TableContent> {data.id}</TableContent>
												<TableContent> {data.firstName} </TableContent>
												<TableContent> {data.lastName}</TableContent>
												<TableContent> {data.emailId}</TableContent>
												<TableContent> {data.course}</TableContent>
												<TableContent> {data.salary}</TableContent>
												<TableContent> {data.phoneNo}</TableContent>
											</tr>
									)
								}
							</tbody>
						</table>

					</div>

				</Container>
			)
		else
			return (
				<Container>YOU NEED TO LOGIN OR SIGNUP TO ACCESS</Container>
			)
	}
}
export default ViewFaculty