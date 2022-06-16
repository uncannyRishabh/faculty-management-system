import React, { Component } from 'react'
import FacultyService from '../../FacultyService'
import { Container } from './DashboardComponents'

class ViewFaculty extends Component {
	constructor(props) {
		super(props)

		this.state = {
			id: this.props.match.params.id,
			faculty: {}
		}
	}

	componentDidMount() {
		FacultyService.getFacultyById(this.state.id).then(res => {
			this.setState({ faculty: res.data });
		})
	}

	render() {
		if (this.props.isLoggedIn)
			return (
				<div>addFaculty</div>
			)
		else
			return (
				<Container>YOU NEED TO LOGIN OR SIGNUP TO ACCESS</Container>
			)
	}
}
export default ViewFaculty