import { Button } from '@mui/material'
import React from 'react'
import { Container, Field, Heading, FormContainer } from './DashboardComponents'

const AddFaculty = ({ isLoggedIn }) => {
	if (isLoggedIn)
		return (
			<Container>
				<Heading>
					Fill out the details to add a new faculty.
				</Heading>
				<form>
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
							id="emailID"
							label="Email Address"
							name="email"
							autoComplete="email"
						/>
						<br />

						<Field
							required
							fullWidth
							id="courseName"
							label="Course Name"
							name="courseName"
						/>
						<br />

						<Field
							required
							fullWidth
							id="phoneNumber"
							label="Phone Number"
							name="phoneNumber"
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
							sx={{ mt: 3, mb: 2 , height: '54px'}}
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

export default AddFaculty