import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/';

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
    // TODO: Change to cohortsapi when we have Cohort table in back-end
    return client.get('cohortsapi');
}

export function fetchAssignmentList() {
    return client.get('assignmentsapi');
}

export function fetchStudentsList() {
    return client.get('studentsapi');
}