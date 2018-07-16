import axios from 'axios';


// import {GET_CLASSROOM_LIST} from '../actions';
// import {GET_CLASSROOM_LIST_SUCCEDED} from '../actions';
const API_BASE_URL = 'http://localhost:3000';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Conten-Type': 'application/json',
    },
});

export function fetchClassroomList() {
    return client.get('/classroomapi');
}


// export function fetchClassroomList() {
//     return function action(dispatch) {
//       dispatch({ type: GET_CLASSROOM_LIST })
  
//       const request = axios({
//         method: 'GET',
//         baseURL: API_BASE_URL,
//         headers: {
//             'Conten-Type': 'application/json',
//         },
//       });
      
//       return request.then(
//         // response => dispatch(fetchClassroomListSuccess(response)),
//         response => dispatch({type: GET_CLASSROOM_LIST_SUCCEDED} (response)),


//         // err => dispatch(fetchClassroomListError(err))
//       );
//     }
//   }