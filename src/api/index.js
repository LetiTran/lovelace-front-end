import axios from 'axios';

// TODO: .env won't work... (?)
// require('dotenv').config({path:'../../.env'})
// console.log(process.env)
// const API_BASE_URL = `http://${process.env.KIP_ADDRESS}:3000/`;
// const API_BASE_URL = `https://lovelace-be-heroku.herokuapp.com/`;


const API_BASE_URL = `http://172.24.22.199:3000/`;


const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        // 'Conten-Type': 'application/json',
    },
});

export function fetchSubmissionList() {
    return client.get('submissions');
}

export function fetchClassroomList() {
    return client.get('classrooms');
}
export function fetchClassroom(id){
    return client.get(`classrooms/${id}`);
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
    return client.post('invites', data)
}

export function postInstructor(data) {
    return client.post('instructors', data)
}

export function putInstructor(data) {
    return client.put(`instructors/${data.id}`, data)
}

export function putClassroom(data) {
    return client.put(`classrooms/${data.id}`, data)
}

export function fetchCohort(id){
    return client.get(`cohorts/${id}`);
}

export function putCohort(data){
    return client.put(`cohorts/${data.id}`, data)
}

export function putStudent(data){
    return client.put(`students/${data.id}`, data)
}

export function fetchStudent(id){
    return client.get(`students/${id}`);
}

export function putSubmission(data){
    return client.get(`submissions/${data.id}`, data);
}

export function postAssignment(data){
    return client.get(`assignments/${data}`, data);
}

export function putAssignment(data){
    return client.get(`assignments/`, data);
}
