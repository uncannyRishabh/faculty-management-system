import { Link } from "react-router-dom"
import styled from "styled-components"
import { TextField } from "@mui/material"

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin-top: 85px;

	@media (max-aspect-ratio: 9/16) {
		overflow-y: scroll;
	}
`

export const AppDescription = styled.h3`
	width: 90%;
	margin-top: 40px;
	margin-bottom: 40px;
	font-size: 34px;
	font-family: 'Secular One', sans-serif;
	color: #0c0326;
	`

export const Module = styled(Link)`
	width: 280px;
	height: 220px;
	text-decoration: none;
	font-family: 'Poppins';
	font-size: larger;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgb(134, 82, 250);
	margin: 24px;
	border-radius: 12px;
	box-shadow: 0px 2px 6px 0px #fff;
	transition: all 0.4s ease-in-out;

	:hover {
		background-color: rgb(84, 40, 240);
		box-shadow: 0px 2px 6px 0px #6a37fa;
	}
`

export const Heading = styled.h3`
	width: 90%;
	margin-top: 40px;
	margin-bottom: 40px;
	font-size: 34px;
	font-family: 'Secular One', sans-serif;
`

export const Field = styled(TextField)`
	margin: 16px;
`

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 360px;
`

export const TableHeading = styled.th`
	font-size: larger;
	font-family: 'Poppins';
	font-weight: 500;
	padding-right: 28px;
	background-color: #d1cafc;
`

export const TableContent = styled.td`
	font-size: medium;
	font-family: 'Poppins';
	font-weight: 300;
	padding: 20px;
	padding-left: 0px;
	padding-right: 28px;
	text-align: center;
`