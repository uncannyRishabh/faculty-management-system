import React from 'react'
import { NavbarContainer, AppLogo, ButtonContainer, Button } from './NavbarComponents'

const Navbar = ({isLoggedIn}) => {
  if(isLoggedIn) return (
	<NavbarContainer>
		<AppLogo to="/">
			Faculty Management
		</AppLogo>
	</NavbarContainer>
  )
  else return (
	<NavbarContainer>
		<AppLogo to="/">
			Faculty Management
		</AppLogo>
		<ButtonContainer>
			<Button to="/login">
				Login
			</Button>
			<Button to="/signup">
				SignUp
			</Button>
		</ButtonContainer>
	</NavbarContainer>
  )
}

export default Navbar