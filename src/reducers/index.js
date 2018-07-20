import {
    CHANGE_CLASSROOM, GET_CLASSROOM_LIST_SUCCEDED,
    CHANGE_COHORT, GET_COHORT_LIST_SUCCEDED,
    GET_ASSIGNMENTS_LIST_SUCCEDED, GET_STUDENTS_LIST_SUCCEDED,
    GET_INSTRUCTORS_LIST_SUCCEDED,
    CHANGE_COHORT_ON_FORM, CHANGE_CLASSROOM_ON_FORM, CHANGE_CLASSROOM_ON_FORM_FOR_NEW_CLASSROOM,
    CREATE_CLASSROOM, STORE_NEW_CLASSROOM_NAME,
    CREATE_COHORT, STORE_NEW_COHORT_NUMBER,
    STORE_NEW_COHORT_NAME, STORE_NEW_COHORT_REPO_NAME, STORE_NEW_COHORT_CLASS_START_DATE, 
    STORE_NEW_COHORT_CLASS_END_DATE, STORE_NEW_COHORT_INT_START_DATE, STORE_NEW_COHORT_INT_END_DATE,
    STORE_NEW_COHORT_GRAD_DATE,
    ADD_INVITE_LIST_STUDENTS, CREATE_INVITES_SUCCEEDED,
    STORE_NEW_INSTRUCTOR_NAME, STORE_NEW_INSTRUCTOR_GITHUB_NAME
    } from '../actions';


const stateList = {
    currentCohort: 0, 
    cohortList: [], 

    currentUser: 1,
    currentClassroom : 0,
    currentClassroomStudents: [],

    classroomList: [],
    assignmentList: [],
    studentsList: [],
    instructorsList: [],

    selectedInstructors: [],
    selectedCohortOnForm: 0,
    selectedClassroomOnForm: 0,
    selectedCohortOnFormForNewClassroom: 0,

    newCohortNumber: 0,
    newCohortName: "C",
    newCohortRepoName: "Ada-",
    newCohortClassStartDate: "",
    newCohortClassEndDate: "",
    newCohortInternshipStartDate: "",
    newCohortInternshipEndDate: "",
    newCohortGraduationDate: "",

    newClassroomName: "",
    newClassroomCohortId: "",

    addedStudentsForInvites: [],
    addedInstructorsForInvites: [],

    newInstructorName: "",
    newInstructorGithubName: "",

}

 function performAction(state = stateList, action) {
    switch (action.type) {

        // *********** COHORT *****************    
        case CHANGE_COHORT:
        return Object.assign({}, state, {
            currentCohort : action.cohort
        })

        case GET_COHORT_LIST_SUCCEDED:
        // console.log("GET_COHORT_LIST_SUCCEDED called");
        // console.log(state, action)
        // console.log(action.payload.cohortList)

        let selectCohort = state.cohort
        let cohortList = action.payload.cohortList
        let cohortListSize = action.payload.cohortList.length-1

        if(state.cohort === 0)  {
            selectCohort = cohortList[cohortListSize].id
        }

        let assignCohortOnForm = stateList.selectedCohortOnForm
        if(state.currentCohort === 0){
        assignCohortOnForm = cohortList[cohortList.length - 1]
        }

        // Can't use .pop() here! TODO: refactor all this variables..... 
        return Object.assign({}, state, {
            cohortList : action.payload.cohortList,
            currentCohort: selectCohort,
            selectedCohortOnForm: assignCohortOnForm,

        })

        case CHANGE_COHORT_ON_FORM:
        return Object.assign({}, state, {
            selectedCohortOnForm : action.cohort
        })

        case CHANGE_CLASSROOM_ON_FORM_FOR_NEW_CLASSROOM:
        return Object.assign({}, state, {
            selectedCohortOnFormForNewClassroom : action.cohort
        })

        case STORE_NEW_COHORT_NUMBER:
        return Object.assign({}, state, {
            newCohortNumber: action.number
        })  

        case STORE_NEW_COHORT_NAME:
        return Object.assign({}, state, {
            newCohortName: action.name
        })  

        case STORE_NEW_COHORT_REPO_NAME:
        return Object.assign({}, state, {
            newCohortRepoName: action.name
        })  

        case STORE_NEW_COHORT_CLASS_START_DATE:
        return Object.assign({}, state, {
            newCohortClassStartDate: action.date
        }) 

        case STORE_NEW_COHORT_CLASS_END_DATE:
        return Object.assign({}, state, {
            newCohortClassEndDate: action.date
        }) 

        case STORE_NEW_COHORT_INT_START_DATE:
        return Object.assign({}, state, {
            newCohortInternshipStartDate: action.date
        }) 

        case STORE_NEW_COHORT_INT_END_DATE:
        return Object.assign({}, state, {
            newCohortInternshipEndDate: action.date
        }) 

        case STORE_NEW_COHORT_GRAD_DATE:
        return Object.assign({}, state, {
            newCohortGraduationDate: action.date
        }) 

        case CREATE_COHORT:
        return Object.assign({}, state, {
            newCohortNumber: action.data.number,
            newCohortName: action.data.name,
            newCohortRepoName: action.data.repoName,
            newCohortClassStartDate: action.data.classStartDate,
            newCohortClassEndDate: action.data.classEndDate,
            newCohortInternshipStartDate: action.data.internshipStartDate,
            newCohortInternshipEndDate: action.data.internshipEndDate,
            newCohortGraduationDate: action.data.graduationDate,
        })

        // *********** CLASSROOM *****************
        case CHANGE_CLASSROOM:
        let studentsInCurrentClassrom = state.studentsList.filter((student) => {
            return student.classroom_id === action.classroom
        })
        return Object.assign({}, state, {
            currentClassroom: action.classroom,
            currentClassroomStudents: studentsInCurrentClassrom
        })

        case GET_CLASSROOM_LIST_SUCCEDED:
        // console.log("GET_CLASSROOM_LIST_SUCCEDED called");
        // console.log(state, action)
        // console.log(action.payload.classroomList)
        // console.log(action.payload.classroomList.last)

        let assignClassroom = state.currentClassroom
        // let assignClassroomName = state.classroomcurrentClassroomName
        let classroomList = action.payload.classroomList
        let classroomListSize = action.payload.classroomList.length-1

        if(state.currentClassroom === 0 )  {
            assignClassroom = classroomList[classroomListSize]
        }

        let assignClassOnForm = stateList.selectedClassroomOnForm
        if(state.currentCohort === 0){
        assignClassOnForm = classroomList[classroomList.length - 1]
        }

        // Can't use .pop() here! TODO: refactor all this variables..... 
        return Object.assign({}, state, {
            classroomList : classroomList,
            currentClassroom: assignClassroom,
            selectedClassroomOnForm: assignClassOnForm
        })
        
        case CHANGE_CLASSROOM_ON_FORM:
        // let thisClassroom = state.classroomList.filter((classroom) => {
        //     return classroom.id === action.classroom
        // })
        return Object.assign({}, state, {
            selectedClassroomOnForm : action.classroom
        })

        case STORE_NEW_CLASSROOM_NAME:
        return Object.assign({}, state, {
            newClassroomName: action.name
        })  

        case CREATE_CLASSROOM:
        return Object.assign({}, state, {
            newClassroomName: action.data.name,
            newClassroomCohortId: action.data.cohortId,
        })

         // *********** ASSIGNMENTS *****************    
         case GET_ASSIGNMENTS_LIST_SUCCEDED:
        //  console.log("GET_ASSIGNMENTS_LIST_SUCCEDED called");
        //  console.log(state, action)
        //  console.log(action.payload.assignmentList)
         return Object.assign({}, state, {
             assignmentList : action.payload.assignmentList
         })


         // *********** STUDENTS *****************    
         case GET_STUDENTS_LIST_SUCCEDED:
        //  console.log("GET_STUDENTS_LIST_SUCCEDED called");
        //  console.log(state, action)
        //  console.log(action.payload.studentsList)

         // Filter students in current classromm
          studentsInCurrentClassrom = action.payload.studentsList.filter((student) => {
            // console.log("state.currentClassroom")
            // console.log(state.currentClassroom)
            // console.log(student.classroom_id)
            return student.classroom_id === state.currentClassroom.id
        })

        // console.log(studentsInCurrentClassrom)
        // Change state:
         return Object.assign({}, state, {
             studentsList : action.payload.studentsList,
             currentClassroomStudents: studentsInCurrentClassrom
         })


        // *********** INSTRUCTORS *****************    
        case GET_INSTRUCTORS_LIST_SUCCEDED:
        // console.log("GET_INSTRUCTORS_LIST_SUCCEDED called");
        // console.log(state, action)
        // console.log(action.payload.instructorsList)

        // Filter instructors in current classromm
        const activeInstructors = action.payload.instructorsList.filter((instructor) => {
            // console.log(instructor)
            return instructor.active === true
        })

        // console.log(activeInstructors)
        // Change state:
        return Object.assign({}, state, {
            instructorsList : activeInstructors,
        })

        // case CREATE_INSTRUCTOR:
        // return Object.assign({}, state, {
        //     newInstructorInfo: action.payload.newInstructorInfo,
        // })

        case STORE_NEW_INSTRUCTOR_NAME:
        return Object.assign({}, state, {
            newInstructorName: action.payload.name,
        })

        case STORE_NEW_INSTRUCTOR_GITHUB_NAME:
        return Object.assign({}, state, {
            newInstructorGithubName: action.payload.name,
        })


        // *********** INVITES *****************  
        case ADD_INVITE_LIST_STUDENTS:
        return Object.assign({}, state, {
            addedStudentsForInvites : action.payload.students,
        })

        case CREATE_INVITES_SUCCEEDED:
        return {
            post_request_answer: action.payload.invites
        }

        default:
        return state

    }
}

export default performAction;

   