import axios from 'axios';
// require('dotenv').config({path:'../../.env'})

// console.log(process.env)
// const API_BASE_URL = `http://${process.env.KIP_ADDRESS}:3000/`;
// const API_BASE_URL = `http://localhost:3000/`;
const API_BASE_URL = `http://172.24.22.199:3000/`;



const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        // 'Conten-Type': 'application/json',
        
        
    },
});

export function fetchClassroomList() {
    return client.get('classroomsapi');
}

export function fetchCohortList() {
    return client.get('cohorts');
}

export function fetchAssignmentList() {
    return client.get('assignments');
}

export function fetchStudentsList() {
    return client.get('students');
}

export function fetchInstructorsList() {
    return client.get('instructors');
}

export function postNewClassroom() {
    return client.post('')
}

export function postUserInvites(data) {
    // headers_content = {
    //     'github_name': `${data.studentList}`,
    //     'classroom_id': `${data.classrom}`,
    //     'role': `${data.role}`
    // }
    http://localhost:3000/invites/?github_name=MonalisaC&classroom_id=1&role=instructor
   console.log(data)
    return client.post('invites', data)
}