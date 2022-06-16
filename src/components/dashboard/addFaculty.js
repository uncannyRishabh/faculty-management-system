import { Button } from '@mui/material'
import React, { Component } from 'react'
import FacultyService from '../../FacultyService'
import { Container, Field, Heading, FormContainer } from './DashboardComponents'

class AddFaculty extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            FacultyService.getFacultyById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId : employee.emailId
                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(this.state.id === '_add'){
            FacultyService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            FacultyService.updateFaculty(employee, this.state.id).then( res => {
                this.props.history.push('/employees');
            });
        }
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

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }

	render(){
		if (true) //isLoggedIn
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
							onClick={this.saveOrUpdateEmployee()}
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
	
}

export default AddFaculty