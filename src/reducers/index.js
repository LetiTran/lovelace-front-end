import {
    CHANGE_CLASSROOM, GET_CLASSROOM_LIST_SUCCEDED,
    CHANGE_COHORT, GET_COHORT_LIST_SUCCEDED,
    GET_ASSIGNMENTS_LIST_SUCCEDED, GET_STUDENTS_LIST_SUCCEDED,
    GET_INSTRUCTORS_LIST_SUCCEDED,
    CHANGE_COHORT_ON_FORM, CHANGE_CLASSROOM_ON_FORM, CHANGE_CLASSROOM_ON_FORM_FOR_NEW_CLASSROOM,
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

    newClassroomtName: "",
    newClassroomtCohortId: "",

}

 function performAction(state = stateList, action) {
    switch (action.type) {

        // *********** COHORT *****************    
        case CHANGE_COHORT:
        return Object.assign({}, state, {
            currentCohort : action.cohort
        })

        case GET_COHORT_LIST_SUCCEDED:
        console.log("GET_COHORT_LIST_SUCCEDED called");
        console.log(state, action)
        console.log(action.payload.cohortList)

        let selectCohort = state.cohort
        let cohortList = action.payload.cohortList
        let cohortListSize = action.payload.cohortList.length-1

        if(state.cohort === 0)  {
            selectCohort = cohortList[cohortListSize].id
        }
        // Can't use .pop() here! TODO: refactor all this variables..... 
        return Object.assign({}, state, {
            cohortList : action.payload.cohortList,
            currentCohort: selectCohort
        })

        case CHANGE_COHORT_ON_FORM:
        return Object.assign({}, state, {
            selectedCohortOnForm : action.cohort
        })

        case CHANGE_CLASSROOM_ON_FORM_FOR_NEW_CLASSROOM:
        return Object.assign({}, state, {
            selectedCohortOnFormForNewClassroom : action.cohort
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
        console.log("GET_CLASSROOM_LIST_SUCCEDED called");
        console.log(state, action)
        console.log(action.payload.classroomList)
        console.log(action.payload.classroomList.last)

        let assignClassroom = state.currentClassroom
        // let assignClassroomName = state.classroomcurrentClassroomName
        let classroomList = action.payload.classroomList
        let classroomListSize = action.payload.classroomList.length-1

        if(state.currentClassroom === 0 )  {
            assignClassroom = classroomList[classroomListSize]
        }
        // Can't use .pop() here! TODO: refactor all this variables..... 
        return Object.assign({}, state, {
            classroomList : classroomList,
            currentClassroom: assignClassroom
        })
        
        case CHANGE_CLASSROOM_ON_FORM:
        return Object.assign({}, state, {
            selectedClassroomOnForm : action.classroom
        })

         // *********** ASSIGNMENTS *****************    
         case GET_ASSIGNMENTS_LIST_SUCCEDED:
         console.log("GET_ASSIGNMENTS_LIST_SUCCEDED called");
         console.log(state, action)
         console.log(action.payload.assignmentList)
         return Object.assign({}, state, {
             assignmentList : action.payload.assignmentList
         })


         // *********** STUDENTS *****************    
         case GET_STUDENTS_LIST_SUCCEDED:
         console.log("GET_STUDENTS_LIST_SUCCEDED called");
         console.log(state, action)
         console.log(action.payload.studentsList)

         // Filter students in current classromm
          studentsInCurrentClassrom = action.payload.studentsList.filter((student) => {
            console.log("state.currentClassroom")
            console.log(state.currentClassroom)
            console.log(student.classroom_id)
            return student.classroom_id === state.currentClassroom.id
        })

        console.log(studentsInCurrentClassrom)
        // Change state:
         return Object.assign({}, state, {
             studentsList : action.payload.studentsList,
             currentClassroomStudents: studentsInCurrentClassrom
         })


        // *********** INSTRUCTORS *****************    
        case GET_INSTRUCTORS_LIST_SUCCEDED:
        console.log("GET_INSTRUCTORS_LIST_SUCCEDED called");
        console.log(state, action)
        console.log(action.payload.instructorsList)

        // Filter instructors in current classromm
        const activeInstructors = action.payload.instructorsList.filter((instructor) => {
            console.log(instructor)
            return instructor.active === true
        })

        console.log(activeInstructors)
        // Change state:
        return Object.assign({}, state, {
            instructorsList : activeInstructors,
        })

        default:
        return state

    }
}

export default performAction;

   