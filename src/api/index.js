import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        // 'Conten-Type': 'application/json',
    },
});

export function fetchClassroomList() {
    return client.get('classroomapi');
}

export function fetchCohortList() {
    return client.get('classroomapi');
}