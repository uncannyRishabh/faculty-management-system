import { Button } from '@mui/material'
import React from 'react'
import { Container, Field, FormContainer } from './DashboardComponents'

const RemoveFaculty = ({ isLoggedIn }) => {


	if (isLoggedIn)
	return (
		<Container>
			{/* <FormContainer>
				<Field
				/>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 , height: '54px'}}
					>
						SEARCH
				</Button>
			</FormContainer> */}

			{/* <ResultList>

			</ResultList> */}
		</Container>
	)
else
	return (
		<Container>YOU NEED TO LOGIN OR SIGNUP TO ACCESS</Container>
	)
}

export default RemoveFaculty