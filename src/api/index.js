import axios from 'axios';
// require('dotenv').config({path:'../../.env'})

// console.log(process.env)
// const API_BASE_URL = `http://${process.env.KIP_ADDRESS}:3000/`;
// const API_BASE_URL = `http://localhost:3000/`;
const API_BASE_URL = `http://172.24.22.199:3000/`;
// const API_BASE_URL = `https://lovelace-be-heroku.herokuapp.com/`;


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

export function fetchInstructor(id){
    return client.get(`instructors/${id}`);
}

export function postCohort(data){
    return client.post('cohorts', data)
}

export function postClassroom(data) {
    return client.post('classrooms', data)
}

export function postUserInvites(data) {
    // headers_content = {
    //     'github_name': `${data.studentList}`,
    //     'classroom_id': `${data.classrom}`,
    //     'role': `${data.role}`
    // }
//    console.log(data)
// console(" client.post('invites', data) : ")
//     console.log(data)
    return client.post('invites', data)
}

export function postInstructor(data) {
    // headers_content = {
    //     'github_name': `${data.studentList}`,
    //     'classroom_id': `${data.classrom}`,
    //     'role': `${data.role}`
    // }
    http://localhost:3000/invites/?github_name=MonalisaC&classroom_id=1&role=instructor
   console.log("client.post('instructors', data) : ")
    console.log(data)
    return client.post('instructors', data)
}

export function putInstructor(data) {
    // headers_content = {
    //     'github_name': `${data.studentList}`,
    //     'classroom_id': `${data.classrom}`,
    //     'role': `${data.role}`
    // }
    http://localhost:3000/invites/?github_name=MonalisaC&classroom_id=1&role=instructor
   console.log("client.put('instructors', data) : ")
    console.log(data)
    return client.put(`instructors/${data.id}`, data)
}