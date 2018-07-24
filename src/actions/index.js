import * as api from '../api';
import RenderMessage from '../views/Instructors/CreateNewInstructor.js'

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

export const UPDATE_COHORT_NUMBER = "UPDATE_COHORT_NUMBER";
export const UPDATE_COHORT_NAME = "UPDATE_COHORT_NAME"
export const UPDATE_COHORT_REPO_NAME = "UPDATE_COHORT_REPO_NAME"
export const UPDATE_COHORT_CLASS_START_DATE ="UPDATE_COHORT_CLASS_START_DATE"
export const UPDATE_COHORT_CLASS_END_DATE ="UPDATE_COHORT_CLASS_END_DATE"
export const UPDATE_COHORT_INT_START_DATE ="UPDATE_COHORT_INT_START_DATE"
export const UPDATE_COHORT_INT_END_DATE ="UPDATE_COHORT_INT_END_DATE"
export const UPDATE_COHORT_GRAD_DATE ="UPDATE_COHORT_GRAD_DATE"

export const CREATE_COHORT = "CREATE_COHORT";
export const STORE_SELECTED_COHORT_NEW_DATA = "STORE_SELECTED_COHORT_NEW_DATA"
export const STORE_SELECTED_COHORT_TO_UPDATE = "STORE_SELECTED_COHORT_TO_UPDATE"

// *********** CLASSROOM *****************
export const CHANGE_CLASSROOM = "CHANGE_CLASSROOM";
export const GET_CLASSROOM_LIST_SUCCEDED = "GET_CLASSROOM_LIST_SUCCEDED";
export const GET_CLASSROOM_LIST = "GET_CLASSROOM_LIST";
export const CHANGE_CLASSROOM_ON_FORM = "CHANGE_CLASSROOM_ON_FORM";
export const STORE_NEW_CLASSROOM_NAME = "STORE_NEW_CLASSROOM_NAME";
export const CHANGE_CLASSROOM_ON_FORM_FOR_NEW_CLASSROOM ="CHANGE_CLASSROOM_ON_FORM_FOR_NEW_CLASSROOM";
export const CREATE_CLASSROOM_SUCCEEDED = "CREATE_CLASSROOM_SUCCEEDED"
export const STORE_SELECTED_CLASSROOM_NEW_DATA = "STORE_SELECTED_CLASSROOM_NEW_DATA"
export const STORE_SELECTED_CLASSROOM = "STORE_SELECTED_CLASSROOM"

// *********** STUDENTS *****************
export const ADD_NAMES_TO_INVITE_LIST = "ADD_NAMES_TO_INVITE_LIST";
export const GET_STUDENTS_LIST_SUCCEDED = "GET_STUDENTS_LIST_SUCCEDED";

// *********** INSTRUCTORS *****************
export const GET_INSTRUCTORS_LIST_SUCCEDED = "GET_INSTRUCTOR_LIST_SUCCEDED";
export const CREATE_INSTRUCTOR = "CREATE_INSTRUCTOR"
export const STORE_SELECTED_INSTRUCTOR = "STORE_SELECTED_INSTRUCTOR"
export const STORE_SELECTED_INSTRUCTOR_NEW_DATA = "STORE_SELECTED_INSTRUCTOR_NEW_DATA"
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
// --------

export function editCohortNumber(number) {
    const action = {
        type: UPDATE_COHORT_NUMBER,
        number
    };
    return action
}

export function editCohortName(name) {
    const action = {
        type: UPDATE_COHORT_NAME,
        name
    };
    return action
}

export function editCohortRepoName(name) {
    const action = {
        type: UPDATE_COHORT_REPO_NAME,
        name
    };
    return action
}

export function editCohortClassStartDate(date) {
    const action = {
        type: UPDATE_COHORT_CLASS_START_DATE,
        date
    };
    return action
}

export function editCohortClassEndDate(date) {
    const action = {
        type: UPDATE_COHORT_CLASS_END_DATE,
        date
    };
    return action
}

export function editCohortIntStartDate(date) {
    const action = {
        type: UPDATE_COHORT_INT_START_DATE,
        date
    };
    return action
}

export function editCohortIntEndDate(date) {
    const action = {
        type: UPDATE_COHORT_INT_END_DATE,
        date
    };
    return action
}

export function editCohortGradDate(date) {
    const action = {
        type: UPDATE_COHORT_GRAD_DATE,
        date
    };
    return action
}



export function updateCohort(cohortInfo){
    console.log("cohortInfo:")
    console.log(cohortInfo)
    let id = cohortInfo.id
    let number= cohortInfo.number
    let name= cohortInfo.name
    let repo_name = cohortInfo.repoName   
    let class_start_date= cohortInfo.classStartDate   
    let class_end_date = cohortInfo.classEndDate
    let internship_start_date = cohortInfo.internshipStartDate
    let internship_end_date = cohortInfo.internshipEndDate
    let graduation_date = cohortInfo.graduationDate 

    console.log("Sending Params:")
    console.log(id,number,name, repo_name, class_start_date, 
        class_end_date, internship_start_date, 
        internship_end_date, graduation_date)

    return dispatch => {
        api.putCohort({
            id ,number, name, repo_name, class_start_date, 
            class_end_date, internship_start_date, 
            internship_end_date, graduation_date
        }).then(response => {
            // dispatch(createCohortSucceeded(response))
            //  TODO: put action to show customizedSnackBar was successfull
            console.log(response.data)
            dispatch(fetchCohortList())
        }).catch((error) => {
            if (error.response) {
                console.log(error.response);
                console.log(error.response.status);
            } 
        });
    }
}


// ---------
export function createCohort(cohortInfo){
    // console.log("cohortInfo:")
    // console.log(cohortInfo)
    let name= cohortInfo.name
    let repo_name = cohortInfo.repoName   
    let class_start_date= cohortInfo.classStartDate   
    let class_end_date = cohortInfo.classEndDate
    let internship_start_date = cohortInfo.internshipStartDate
    let internship_end_date = cohortInfo.internshipEndDate
    let graduation_date = cohortInfo.graduationDate 

    console.log("Sending Params:")
    console.log(name, repo_name, class_start_date, 
        class_end_date, internship_start_date, 
        internship_end_date, graduation_date)

    return dispatch => {
        api.postCohort({
            name, repo_name, class_start_date, 
            class_end_date, internship_start_date, 
            internship_end_date, graduation_date
        }).then(response => {
            // dispatch(createCohortSucceeded(response))
            //  TODO: put action to show customizedSnackBar was successfull
            console.log(response.data)
            dispatch(fetchCohortList())
        }).catch((error) => {
            if (error.response) {
                console.log(error.response);
                console.log(error.response.status);
            } 
        });
    }
}


// export function saveSelectedCohortNewData(data) {
//     return {
//         type: STORE_SELECTED_COHORT_NEW_DATA,
//         payload: {
//             data
//         }
//     }
// }

// export function saveSelectedCohort(cohortId) {
// return dispatch => {
//     api.fetchCohort(cohortId).then(response => {
//         console.log('cohort')
//         console.log(response.data)
//         dispatch(fetchCohortSucceeded(response.data))
//     }).catch((error) => {
//         if (error.response) {
//             console.log(error.response.status);
//         } 
//     });
// }
// }



// export function fetchCohortSucceeded(cohort) {
//     return {
//     type: STORE_SELECTED_COHORT,
//         payload: {
//             cohort
//         }
//     }
// }

export function saveSelectedCohortforUpdating(cohortId) {
    return dispatch => {
        api.fetchCohort(cohortId).then(response => {
            console.log('cohort')
            console.log(response.data)
            dispatch(fetchCohortForUpdatingSucceeded(response.data))
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.status);
            } 
        });
    }
    }


export function fetchCohortForUpdatingSucceeded(cohort) {
    return {
    type: STORE_SELECTED_COHORT_TO_UPDATE,
        payload: {
            cohort
        }
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

export function saveSelectedClassroomNewData(classroom) {
    return {
        type: STORE_SELECTED_CLASSROOM_NEW_DATA,
        payload: {
            classroom
        }
    }
}

export function saveSelectedClassroom(classroomId) {
return dispatch => {
    api.fetchClassroom(classroomId).then(response => {
        console.log('classroom')
        console.log(response.data)
        dispatch(fetchClassroomSucceeded(response.data))
    }).catch((error) => {
        if (error.response) {
            console.log(error.response.status);
        } 
    });
}
}

export function fetchClassroomSucceeded(classroom) {
    return {
    type: STORE_SELECTED_CLASSROOM,
        payload: {
            classroom
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
            dispatch(fetchClassroomList())
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

export function saveSelectedInstructorNewData(instructor) {
    return {
        type: STORE_SELECTED_INSTRUCTOR_NEW_DATA,
        payload: {
            instructor
        }
    }
}

export function saveSelectedInstructor(instructorId) {
return dispatch => {
    api.fetchInstructor(instructorId).then(response => {
        console.log('instuctor')
        console.log(response.data)
        dispatch(fetchInstructorSucceeded(response.data))
    }).catch((error) => {
        if (error.response) {
            console.log(error.response.status);
        } 
    });
}
}

export function fetchInstructorSucceeded(instructor) {
    return {
    type: STORE_SELECTED_INSTRUCTOR,
        payload: {
            instructor
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
            dispatch(fetchInstructorsList())
            // dispatch(renderMessage("Instructor created!"))
            
        }).catch((error) => {
            // dispatch(RenderMessage("Instructor created!"))
            if (error.response) {
                console.log(error.response.status);
            } 
        });
    }
}


// *********** INVITES *****************
export function addNamesToInviteList(names){
    return {
        type: ADD_NAMES_TO_INVITE_LIST,
        payload: {
            names
        }
    }
}


// *********** CREATE AND UPDATE POST REQUESTS *****************

export function createUserInvites(inviteStudents, data){
    let classroom_id = data.classroom_id
    let github_names = data.github_names
    let role = data.role
    let github_name = data.github_name

    switch(inviteStudents){
    case true:
    console.log('post invite for students')
    console.log({classroom_id, github_names, role})
        return dispatch => {
            api.postUserInvites({classroom_id, github_names, role}).then(response => {
                // dispatch(createUserInvitesSucceeded(response.data))
                //  TODO: put action to show customizedSnackBar was successfull
                console.log(response.data)
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response);
                } 
            });
        }

    case false:   
    console.log('post invite for instructor') 
    console.log({github_name, role})
        return dispatch => {
            api.postUserInvites({github_name, role}).then(response => {
                // dispatch(createUserInvitesSucceeded(response.data))
                //  TODO: put action to show customizedSnackBar was successfull
                console.log(response.data)
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response);
                } 
            });
        }

    }
}

export function postUpdate(data){

    switch(data.type){

    case 'instructor':
    console.log('post update instructor')
    console.log(data)
    const putDataInstructor = {
        id: data.id,  
        name: data.name, 
        github_name: data.github_name, 
        active: data.active, 
    }
        return dispatch => {
            api.putInstructor(putDataInstructor).then(response => {
                // dispatch(postUpdateSucceeded(response.data))
                //  TODO: put action to show customizedSnackBar was successfull
                console.log(response.data)
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response);
                } 
            });
        }


    case 'classroom':
    console.log('classroom update')
    const putDataClassroom = {
        id: data.id,  
        name: data.name, 
        cohort_id: data.cohort_id, 
    }

    console.log(putDataClassroom)
        return dispatch => {
            api.putClassroom(putDataClassroom).then(response => {
                // dispatch(puttUpdateSucceeded(response.data))
                //  TODO: put action to show customizedSnackBar was successfull
                console.log(response.data)
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response);
                } 
            });
        }

    }
}
