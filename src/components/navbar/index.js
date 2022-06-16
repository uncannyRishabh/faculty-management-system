import React from 'react'
import { NavbarContainer, AppLogo, ButtonContainer, Button } from './NavbarComponents'

const Navbar = () => {
  return (
	<NavbarContainer>
		<AppLogo>
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