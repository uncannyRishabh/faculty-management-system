import axios from 'axios';

const FACULTY_API_BASE_URL = "http://localhost:8080/api/v1/faculties";

class FacultyService {

    getFaculty(){
        return axios.get(FACULTY_API_BASE_URL);
    }

    createFaculty(employee){
        return axios.post(FACULTY_API_BASE_URL, employee);
    }

    getFacultyById(employeeId){
        return axios.get(FACULTY_API_BASE_URL + '/' + employeeId);
    }

    updateFaculty(employee, employeeId){
        return axios.put(FACULTY_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteFaculty(employeeId){
        return axios.delete(FACULTY_API_BASE_URL + '/' + employeeId);
    }
}

export default new FacultyService()