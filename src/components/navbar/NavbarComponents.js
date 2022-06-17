import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavbarContainer = styled.div`
	width: 100%;
	height: 85px;
	backdrop-filter: blur(2px);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	position: fixed;
`

export const AppLogo = styled(Link)`
	color: #1a0a4a;
	text-decoration: none;
	font-size: 24px;
	font-weight: 700;
	font-family: 'Poppins';
	margin-left: 32px;
	margin-right: 16px;
`

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-right: 24px;
`

export const Button = styled(Link)`
	padding-inline: 12px;
	text-decoration: none;
	box-shadow: 0px 4px 16px -6px #5a29e4;
    background: #5a29e4;
    color: #fff;
	font-family: 'Poppins';
	padding: 1rem 3.5rem;
	border-radius: 12px;
	margin-right: 14px;
	transition: all .3s ease-in-out;
	cursor: pointer;

	:hover {
		box-shadow: 0px 4px 16px -2px #5a29e4;
	}
`
