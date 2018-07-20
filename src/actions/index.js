import * as api from '../api';

export const CHANGE_CLASSROOM = "CHANGE_CLASSROOM";
export const GET_CLASSROOM_LIST_SUCCEDED = "GET_CLASSROOM_LIST_SUCCEDED";
export const GET_CLASSROOM_LIST = "GET_CLASSROOM_LIST";
export const CHANGE_CLASSROOM_ON_FORM = "CHANGE_CLASSROOM_ON_FORM";
export const STORE_NEW_CLASSROOM_NAME = "STORE_NEW_CLASSROOM_NAME";
export const CREATE_CLASSROOM = "CREATE_CLASSROOM";
export const CHANGE_COHORT = "CHANGE_COHORT";
export const GET_COHORT_LIST_SUCCEDED = "GET_COHORT_LIST_SUCCEDED";
export const CHANGE_COHORT_ON_FORM = "CHANGE_COHORT_ON_FORM";
export const CHANGE_CLASSROOM_ON_FORM_FOR_NEW_CLASSROOM ="CHANGE_CLASSROOM_ON_FORM_FOR_NEW_CLASSROOM";
export const STORE_NEW_COHORT_NUMBER = "STORE_NEW_COHORT_NUMBER";
export const STORE_NEW_COHORT_NAME = "STORE_NEW_COHORT_NAME"
export const STORE_NEW_COHORT_REPO_NAME = "STORE_NEW_COHORT_REPO_NAME"
export const STORE_NEW_COHORT_CLASS_START_DATE ="STORE_NEW_COHORT_CLASS_START_DATE"
export const STORE_NEW_COHORT_CLASS_END_DATE ="STORE_NEW_COHORT_CLASS_END_DATE"
export const STORE_NEW_COHORT_INT_START_DATE ="STORE_NEW_COHORT_INT_START_DATE"
export const STORE_NEW_COHORT_INT_END_DATE ="STORE_NEW_COHORT_INT_END_DATE"
export const STORE_NEW_COHORT_GRAD_DATE ="STORE_NEW_COHORT_GRAD_DATE"
export const CREATE_COHORT = "CREATE_COHORT";

export const GET_ASSIGNMENTS_LIST_SUCCEDED = "GET_ASSIGNMENTS_LIST_SUCCEDED";
// export const GET_ASSIGNMENTS_LIST = "GET_ASSIGNMENTS_LIST";

export const GET_STUDENTS_LIST_SUCCEDED = "GET_STUDENTS_LIST_SUCCEDED";
// export const GET_STUDENTS_LIST = "GET_STUDENTS_LIST";

// export const GET_INSTRUCTORS_LIST = "GET_INSTRUCTOR_LIST";
export const GET_INSTRUCTORS_LIST_SUCCEDED = "GET_INSTRUCTOR_LIST_SUCCEDED";


export const ADD_INVITE_LIST_STUDENTS = "ADD_INVITE_LIST_STUDENTS"
export const CREATE_USER_INVITES = "CREATE_USER_INVITES"
export const CREATE_INVITES_SUCCEEDED = "CREATE_INVITES_SUCCEEDED"

export const CREATE_INSTRUCTOR = "CREATE_INSTRUCTOR"
export const STORE_NEW_INSTRUCTOR_NAME = "STORE_NEW_INSTRUCTOR_NAME"
export const STORE_NEW_INSTRUCTOR_GITHUB_NAME = "STORE_NEW_INSTRUCTOR_GITHUB_NAME"


// *********** COHORT *****************
export function fetchCohortList() {
    return dispatch => {
        api.fetchCohortList().then(response => {
            // console.log('called fetch cohortList, response:')
            // console.log(response)
            dispatch(fetchCohortListSucceded(response.data))
        })
    }
}

export function changeCurrentCohort(cohort) {
    const action = {
        type: CHANGE_COHORT,
        cohort
    };
    return action
}

export function fetchCohortListSucceded(cohortList) {
    // console.log('cohortList in actions:')
    // console.log(cohortList)
    return {
    type: GET_COHORT_LIST_SUCCEDED,
        payload: {
            cohortList
        }
    }
}

export function changeCohortOnForm(cohort) {
    const action = {
        type: CHANGE_COHORT_ON_FORM,
        cohort
    };
    return action
}

export function changeCohortOnFormForNewClassroom(cohort) {
    const action = {
        type: CHANGE_CLASSROOM_ON_FORM_FOR_NEW_CLASSROOM,
        cohort
    };
    return action
}

export function storeNewCohortNumber(number) {
    const action = {
        type: STORE_NEW_COHORT_NUMBER,
        number
    };
    return action
}

export function storeNewCohortName(name) {
    const action = {
        type: STORE_NEW_COHORT_NAME,
        name
    };
    return action
}

export function storeNewCohortRepoName(name) {
    const action = {
        type: STORE_NEW_COHORT_REPO_NAME,
        name
    };
    return action
}

export function storeNewCohortClassStartDate(date) {
    const action = {
        type: STORE_NEW_COHORT_CLASS_START_DATE,
        date
    };
    return action
}

export function storeNewCohortClassEndDate(date) {
    const action = {
        type: STORE_NEW_COHORT_CLASS_END_DATE,
        date
    };
    return action
}

export function storeNewCohortIntStartDate(date) {
    const action = {
        type: STORE_NEW_COHORT_INT_START_DATE,
        date
    };
    return action
}

export function storeNewCohortIntEndDate(date) {
    const action = {
        type: STORE_NEW_COHORT_INT_END_DATE,
        date
    };
    return action
}

export function storeNewCohortGradDate(date) {
    const action = {
        type: STORE_NEW_COHORT_GRAD_DATE,
        date
    };
    return action
}

export function createCohort(data) {
    const action = {
        type: CREATE_COHORT,
        data
        // cohortId and classroomName
    };
    return action
}

// *********** CLASSROOM *****************
export function fetchClassroomList() {
    return dispatch => {
        api.fetchClassroomList().then(response => {
            // console.log('called fetch clasroomList, response:')
            // console.log(response)
            dispatch(fetchClassroomListSucceded(response.data))
        })
    }
}

export function changeCurrentClassroom(classroom) {
    const action = {
        type: CHANGE_CLASSROOM,
        classroom
    };
    return action
}

export function fetchClassroomListSucceded(classroomList) {
    // console.log('classroomList in actions:')
    // console.log(classroomList)
    return {
    type: GET_CLASSROOM_LIST_SUCCEDED,
        payload: {
            classroomList,
        }
    }
}

export function changeClassroomOnForm(classroom) {
    const action = {
        type: CHANGE_CLASSROOM_ON_FORM,
        classroom
    };
    return action
}

export function storeNewClassroomName(name) {
    const action = {
        type: STORE_NEW_CLASSROOM_NAME,
        name
    };
    return action
}

export function createClassroom(data) {
    const action = {
        type: CREATE_CLASSROOM,
        data
        // cohortId and classroomName
    };
    return action
}


// *********** ASSIGNMENTS *****************
export function fetchAssignmentList() {
    return dispatch => {
        api.fetchAssignmentList().then(response => {
            // console.log('called fetch assignmentList, response:')
            // console.log(response)
            dispatch(fetchAssignmentListSucceded(response.data))
        })
    }
}

export function fetchAssignmentListSucceded(assignmentList) {
    // console.log('assignmentList in actions:')
    // console.log(assignmentList)
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
            // console.log('called fetch studentsList, response:')
            // console.log(response)
            dispatch(fetchStudentsListSucceded(response.data))
        })
    }
}

export function fetchStudentsListSucceded(studentsList) {
    // console.log('studentsList in actions:')
    // console.log(studentsList)
    return {
    type: GET_STUDENTS_LIST_SUCCEDED,
        payload: {
            studentsList
        }
    }
}


// *********** INSTRUCTORS *****************

export function fetchInstructorsList() {
    return dispatch => {
        api.fetchInstructorsList().then(response => {
            // console.log('called fetch instructorsList, response:')
            // console.log(response)
            dispatch(fetchInstructorsListSucceded(response.data))
        })
    }
}

export function fetchInstructorsListSucceded(instructorsList) {
    return {
    type: GET_INSTRUCTORS_LIST_SUCCEDED,
        payload: {
            instructorsList
        }
    }
}

export function storeNewInstructorName(name) {
    return {
        type: STORE_NEW_INSTRUCTOR_NAME,
        payload: {
            name
        }
    }
}

export function storeNewInstructorGithubName(name) {
    return {
        type: STORE_NEW_INSTRUCTOR_GITHUB_NAME,
        payload: {
            name
        }
    }
}


// CREATE_INSTRUCTOR
export function createInstructor(instructorinfo){
    // put the righ fields here for header:
    let name = instructorinfo.name
    let github_name = instructorinfo.github_name
        return dispatch => {
            // console.log({"put the righ fields" :"here for header" })
            api.postInstructor({name, github_name}).then(response => {
                // console.log('called post createInstructor, response:')
                // console.log(response)
                dispatch(createInstructorSucceeded(response.data))
            })
    }
}

export function createInstructorSucceeded(instructor){
    return {
        type: 'CREATE_INSTRUCTOR_SUCCEEDED',
        payload: {
            instructor,
        },
    };
}

// *********** INVITES *****************
export function addInviteListStudents(students){
    return {
        type: ADD_INVITE_LIST_STUDENTS,
        payload: {
            students
        }
    }
}

export function createUserInvites(data){
let classroom_id = data.classroom_id
let github_names = data.github_names
let role = data.role
    return dispatch => {
        // console.log({classroom_id, github_names, role})
        api.postInstructor({classroom_id, github_names, role}).then(response => {
            // console.log('called post postUserInvites, response:')
            // console.log(response)
            dispatch(createUserInvitesSucceeded(response.data))
        }).catch((error) => {
            // Error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // console.log(error.response.data);
                console.log(error.response.status);
                // console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                // console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                // console.log('Error', error.message);
            }
            // console.log(error.config);
        });
    }
}


export function createUserInvitesSucceeded(invites){
    return {
        type: 'CREATE_TASK_SUCCEEDED',
        payload: {
            invites,
        },
    };
}