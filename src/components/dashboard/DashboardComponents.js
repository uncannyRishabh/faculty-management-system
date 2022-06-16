import { Link } from "react-router-dom"
import styled from "styled-components"
import { TextField } from "@mui/material"

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin-top: 85px;
`

export const AppDescription = styled.h3`
	width: 90%;
	margin-top: 40px;
	margin-bottom: 40px;
	font-size: 34px;
	font-family: sans-serif;
`

export const Module = styled(Link)`
	width: 280px;
	height: 220px;
	text-decoration: none;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgb(106, 55, 250);
	margin: 24px;
	border-radius: 12px;
	box-shadow: 0px 2px 6px 0px #fff;
	transition: all 0.4s ease-in-out;

	:hover {
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