import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const client = axios.create({
  baseURL: API_BASE_URL,
  header: {
    'Content-Type': 'application/json'
  }
});

export function postLogin() {
  return client.post('/login');
}

// See edit submission comment
// export function createAssignmentGroups(params) {
//   return client.post('/assignment_groups', params);
// }

// This doesn't do anything yet. I just put this here for no particular reason. Because that's some great software
// development practice
// export function editSubimssion(id, params) {
//   return client.put(`/submissions/${id}`, params);
// }