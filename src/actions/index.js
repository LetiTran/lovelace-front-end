import * as api from '../api';

export const CHANGE_CLASSROOM = "CHANGE_CLASSROOM";
export const GET_CLASSROOM_LIST_SUCCEDED = "GET_CLASSROOM_LIST_SUCCEDED"
export const GET_CLASSROOM_LIST = "GET_CLASSROOM_LIST"

export const CHANGE_COHORT = "CHANGE_COHORT";
export const GET_COHORT_LIST_SUCCEDED = "GET_COHORT_LIST_SUCCEDED"
export const GET_COHORT_LIST = "GET_COHORT_LIST";

export const GET_ASSIGNMENTS_LIST_SUCCEDED = "GET_ASSIGNMENTS_LIST_SUCCEDED"
export const GET_ASSIGNMENTS_LIST = "GET_ASSIGNMENTS_LIST";

export const GET_STUDENTS_LIST_SUCCEDED = "GET_STUDENTS_LIST_SUCCEDED"
export const GET_STUDENTS_LIST = "GET_STUDENTS_LIST";

// *********** COHORT *****************
export function fetchCohortList() {
    return dispatch => {
        api.fetchCohortList().then(response => {
            console.log('called fetch cohortList, response:')
            console.log(response)
            dispatch(fetchCohortListSucceded(response.data))
        })
    }
}

export function changeCohort(cohort) {
    const action = {
        type: CHANGE_COHORT,
        cohort
    };
    return action
}

export function fetchCohortListSucceded(cohortList) {
    console.log('cohortList in actions:')
    console.log(cohortList)
    return {
    type: GET_COHORT_LIST_SUCCEDED,
        payload: {
            cohortList
        }
    }
}

// *********** CLASSROOM *****************
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

// *********** ASSIGNMENTS *****************
export function fetchAssignmentList() {
    return dispatch => {
        api.fetchAssignmentList().then(response => {
            console.log('called fetch assignmentList, response:')
            console.log(response)
            dispatch(fetchAssignmentListSucceded(response.data))
        })
    }
}

export function fetchAssignmentListSucceded(assignmentList) {
    console.log('assignmentList in actions:')
    console.log(assignmentList)
    return {
    type: GET_ASSIGNMENTS_LIST_SUCCEDED,
        payload: {
            assignmentList
        }
    }
}


// *********** STUDENTS *****************
export function fetchStudentsList() {
    return dispatch => {
        api.fetchStudentsList().then(response => {
            console.log('called fetch studentsList, response:')
            console.log(response)
            dispatch(fetchStudentsListSucceded(response.data))
        })
    }
}

export function fetchStudentsListSucceded(studentsList) {
    console.log('studentsList in actions:')
    console.log(studentsList)
    return {
    type: GET_STUDENTS_LIST_SUCCEDED,
        payload: {
            studentsList
        }
    }
}