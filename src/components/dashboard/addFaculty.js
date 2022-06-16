import { Button } from '@mui/material'
import axios from 'axios'
import React, { Component } from 'react'
import FacultyService from '../../FacultyService'
import { Container, Field, Heading, FormContainer } from './DashboardComponents'

export default function AddFaculty() {

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		// let employee = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };

		console.log(data)
		console.log(data.get('firstName'))
		console.log(data.get('lastName'))
		console.log(data.get('emailId'))
		console.log(data.get('course'))
		console.log(data.get('phoneNo'))
		console.log(data.get('salary'))

		axios.post('http://localhost:8081/auth/add', {
			firstName: data.get('firstName'),
			lastName: data.get('lastName'),
			emailId: data.get('emailId'),
			course: data.get('course'),
			phoneNo: data.get('phoneNo'),
			salary: data.get('salary'),
		})
			.then(function (response) {
				console.log(response);
				if (response.status === 200) {
					alert("ADDED SUCCESSFULLY")
				}
				else {
					alert("ADDING UNSUCCESSFUL")
				}
			})
			.catch(function (error) {
				console.log(error);
			});

	}

		if (true) //isLoggedIn
			return (
				<Container>
					<Heading>
						Fill out the details to add a new faculty.
					</Heading>
					<form onSubmit={handleSubmit}>
						<FormContainer>
							<Field
								required
								fullWidth
								id="firstName"
								label="First Name"
								name="firstName"
								autoComplete="First Name"
							/>
							<br />

							<Field
								required
								fullWidth
								id="lastName"
								label="Last Name"
								name="lastName"
								autoComplete="Last Name"
							/>
							<br />

							<Field
								required
								fullWidth
								id="emailId"
								label="Email Address"
								name="emailId"
								autoComplete="emailId"
							/>
							<br />

							<Field
								required
								fullWidth
								id="course"
								label="Course Name"
								name="course"
							/>
							<br />

							<Field
								required
								fullWidth
								id="phoneNo"
								label="Phone Number"
								name="phoneNo"
								autoComplete="Phone"
							/>
							<br />

							<Field
								required
								fullWidth
								id="salary"
								label="Salary"
								name="salary"
							/>

							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2, height: '54px' }}
								// onClick={this.saveOrUpdateEmployee()}
							>
								ADD FACULTY
							</Button>

						</FormContainer>

					</form>

				</Container>
			)
		else
			return (
				<Container>YOU NEED TO LOGIN OR SIGNUP TO ACCESS</Container>
			)

}