import axios from 'axios'
import React, { Component } from 'react'
import { Container, Field, FormContainer, Heading, TableContent, TableHeading } from './DashboardComponents'

class RemoveFaculty extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
		this.removeFaculty = this.removeFaculty.bind(this);
	}

	componentDidMount() {
		axios.get('http://localhost:8081/auth/view')
			.then(response => {
				this.setState({data : response.data})
				console.log(this.data);
			});
	}

	removeFaculty(id){
        this.props.history.push(`/modifyFaculty/${id}`);
    }

	changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
	

	render() {
		if (this.props.isLoggedIn)
			return (
				<Container >
					<Heading className="text-center">Remove Faculty from List</Heading>
					<br></br>
					<div className="row">
						<table className="table table-striped table-bordered">
							<thead >
								<tr>
									<TableHeading> Faculty ID</TableHeading>
									<TableHeading> Faculty First Name</TableHeading>
									<TableHeading> Faculty Last Name</TableHeading>
									<TableHeading> Faculty Email Id</TableHeading>
									<TableHeading> Faculty Course</TableHeading>
									<TableHeading> Faculty Salary</TableHeading>
									<TableHeading> Faculty PhoneNo.</TableHeading>
									<TableHeading> Action </TableHeading>
								</tr>
							</thead>
							<tbody>
								{
									this.state.data.map(
										data =>
											<tr key={data.id}>
												<TableContent> {data.id}</TableContent>
												<TableContent> {data.firstName} </TableContent>
												<TableContent> {data.lastName}</TableContent>
												<TableContent> {data.emailId}</TableContent>
												<TableContent> {data.course}</TableContent>
												<TableContent> {data.salary}</TableContent>
												<TableContent> {data.phoneNo}</TableContent>
												<button onClick={ () => this.removeFaculty(data.id)} className="btn btn-info"> Remove </button>
											</tr>
									)
								}
							</tbody>
						</table>

					</div>

				</Container>
			)
		else
			return (
				<Container>YOU NEED TO LOGIN OR SIGNUP TO ACCESS</Container>
			)
	}
}
export default RemoveFaculty