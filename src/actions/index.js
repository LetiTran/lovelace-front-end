import * as api from '../api';

// export const GET_COHORT_LIST = "GET_COHORT_LIST";
export const CHANGE_CLASSROOM = "CHANGE_CLASSROOM";
export const GET_CLASSROOM_LIST_SUCCEDED = "GET_CLASSROOM_LIST_SUCCEDED"
export const GET_CLASSROOM_LIST = "GET_CLASSROOM_LIST"

export function fetchClassroomList() {
    return dispatch => {
        api.fetchClassroomList().then(response => {
            console.log('called fetch clasroomList, response:')
            console.log(response)
            dispatch(fetchClassroomListSucceded(response.data))
        })
    }
}

export function changeClassroom(classroom) {
    const action = {
        type: CHANGE_CLASSROOM,
        classroom
    };
    return action
}

export function fetchClassroomListSucceded(classroomList) {
    console.log('classroomList in actions:')
    console.log(classroomList)
    return {
    type: GET_CLASSROOM_LIST_SUCCEDED,
        payload: {
            classroomList
        }
    }
}