import * as api from '../api';

// ____________________EXPORTS:____________________

// *********** COHORT *****************
export const CHANGE_COHORT = "CHANGE_COHORT";
export const GET_COHORT_LIST_SUCCEDED = "GET_COHORT_LIST_SUCCEDED";
export const CHANGE_COHORT_ON_FORM = "CHANGE_COHORT_ON_FORM";
export const STORE_NEW_COHORT_NUMBER = "STORE_NEW_COHORT_NUMBER";
export const STORE_NEW_COHORT_NAME = "STORE_NEW_COHORT_NAME"
export const STORE_NEW_COHORT_REPO_NAME = "STORE_NEW_COHORT_REPO_NAME"
export const STORE_NEW_COHORT_CLASS_START_DATE ="STORE_NEW_COHORT_CLASS_START_DATE"
export const STORE_NEW_COHORT_CLASS_END_DATE ="STORE_NEW_COHORT_CLASS_END_DATE"
export const STORE_NEW_COHORT_INT_START_DATE ="STORE_NEW_COHORT_INT_START_DATE"
export const STORE_NEW_COHORT_INT_END_DATE ="STORE_NEW_COHORT_INT_END_DATE"
export const STORE_NEW_COHORT_GRAD_DATE ="STORE_NEW_COHORT_GRAD_DATE"
export const CREATE_COHORT = "CREATE_COHORT";

// *********** CLASSROOM *****************
export const CHANGE_CLASSROOM = "CHANGE_CLASSROOM";
export const GET_CLASSROOM_LIST_SUCCEDED = "GET_CLASSROOM_LIST_SUCCEDED";
export const GET_CLASSROOM_LIST = "GET_CLASSROOM_LIST";
export const CHANGE_CLASSROOM_ON_FORM = "CHANGE_CLASSROOM_ON_FORM";
export const STORE_NEW_CLASSROOM_NAME = "STORE_NEW_CLASSROOM_NAME";
export const CHANGE_CLASSROOM_ON_FORM_FOR_NEW_CLASSROOM ="CHANGE_CLASSROOM_ON_FORM_FOR_NEW_CLASSROOM";
export const CREATE_CLASSROOM_SUCCEEDED = "CREATE_CLASSROOM_SUCCEEDED"

// *********** STUDENTS *****************
export const ADD_INVITE_LIST_STUDENTS = "ADD_INVITE_LIST_STUDENTS";
export const GET_STUDENTS_LIST_SUCCEDED = "GET_STUDENTS_LIST_SUCCEDED";

// *********** INSTRUCTORS *****************
export const GET_INSTRUCTORS_LIST_SUCCEDED = "GET_INSTRUCTOR_LIST_SUCCEDED";
export const CREATE_INSTRUCTOR = "CREATE_INSTRUCTOR"

// *********** ASSIGNMENTS *****************
export const GET_ASSIGNMENTS_LIST_SUCCEDED = "GET_ASSIGNMENTS_LIST_SUCCEDED";
export const STORE_NEW_INSTRUCTOR_NAME = "STORE_NEW_INSTRUCTOR_NAME"
export const STORE_NEW_INSTRUCTOR_GITHUB_NAME = "STORE_NEW_INSTRUCTOR_GITHUB_NAME"

// *********** INVITES *****************
export const CREATE_USER_INVITES = "CREATE_USER_INVITES"
export const CREATE_INVITES_SUCCEEDED = "CREATE_INVITES_SUCCEEDED"



//  ____________________FUNCTIONS:____________________

// *********** COHORT *****************
export function fetchCohortList() {
    return dispatch => {
        api.fetchCohortList().then(response => {
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

export function createCohort(cohortInfo){
    let name= cohortInfo.newCohortName
    let repo_name = cohortInfo.newCohortRepoName   
    let class_start_date= cohortInfo.newCohortClassStartDate   
    let class_end_date = cohortInfo.newCohortClassEndDate
    let internship_start_date = cohortInfo.newCohortInternshipStartDate
    let internship_end_date = cohortInfo.newCohortInternshipEndDate
    let graduation_date = cohortInfo.newCohortGraduationDate 
    return dispatch => {
        api.postCohort({
            name, repo_name, class_start_date, 
            class_end_date, internship_start_date, 
            internship_end_date, graduation_date
        }).then(response => {
            // dispatch(createCohortSucceeded(response))
            //  TODO: put action to show customizedSnackBar was successfull
            console.log(response.data)
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.status);
            } 
        });
    }
}

// *********** CLASSROOM *****************
export function fetchClassroomList() {
    return dispatch => {
        api.fetchClassroomList().then(response => {
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

export function createClassroom(data){
    let name = data.name
    let cohort_id = data.cohortId
    return dispatch => {
        api.postClassroom({name, cohort_id}).then(response => {
            console.log(response.data)
        //  TODO: put action to show customizedSnackBar was successfull
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.status);
            } 
        });
    }
}


// *********** ASSIGNMENTS *****************
export function fetchAssignmentList() {
    return dispatch => {
        api.fetchAssignmentList().then(response => {
            dispatch(fetchAssignmentListSucceded(response.data))
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.status);
            } 
        });
    }
}

export function fetchAssignmentListSucceded(assignmentList) {
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
            dispatch(fetchStudentsListSucceded(response.data))
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.status);
            } 
        });
    }
}

export function fetchStudentsListSucceded(studentsList) {
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
            dispatch(fetchInstructorsListSucceded(response.data))
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.status);
            } 
        });
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

export function createInstructor(instructorinfo){
    let name = instructorinfo.name
    let github_name = instructorinfo.github_name
    return dispatch => {
        api.postInstructor({name, github_name}).then(response => {
            // dispatch(createInstructorSucceeded(response))
            console.log(response.data)
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.status);
            } 
        });
    }
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
        api.postUserInvites({classroom_id, github_names, role}).then(response => {
            // dispatch(createUserInvitesSucceeded(response.data))
            //  TODO: put action to show customizedSnackBar was successfull
            console.log(response.data)
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.status);
            } 
        });
    }
}
