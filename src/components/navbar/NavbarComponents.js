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

export const AppLogo = styled.h3`
	color: #5a29e4;
	font-size: 24px;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	margin-inline: 24px;
`

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-right: 24px;
`

export const Button = styled(Link)`
	padding-inline: 12px;
	box-shadow: 0px 4px 16px -4px #5a29e4;
    background: #5a29e4;
    color: #fff;
	padding: 1rem 3.5rem;
	border-radius: 12px;
	margin-right: 14px;
	cursor: pointer;
`
