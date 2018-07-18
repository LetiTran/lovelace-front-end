import {CHANGE_CLASSROOM} from '../actions';
import {GET_CLASSROOM_LIST_SUCCEDED} from '../actions';

import {CHANGE_COHORT} from '../actions';
import {GET_COHORT_LIST_SUCCEDED} from '../actions';

import {GET_ASSIGNMENTS_LIST_SUCCEDED} from '../actions';

import {GET_STUDENTS_LIST_SUCCEDED} from '../actions';

const stateList = {
    cohort: "Select", 
    cohortList: [], 
    currentClassroomName: "Select", 
    currentClassroomId: "Select",
    classroomList: [],
    assignmentList: [],
    studentsList: [],
    currentClassroomStudents: []
}

 function performAction(state = stateList, action) {
    switch (action.type) {

        // *********** COHORT *****************    
        case CHANGE_COHORT:
        console.log("CHANGE_CLASSROOM called");
        console.log(state, action)
        return Object.assign({}, state, {
            cohort : action.cohort
        })

        case GET_COHORT_LIST_SUCCEDED:
        console.log("GET_COHORT_LIST_SUCCEDED called");
        console.log(state, action)
        console.log(action.payload.cohortList)

        let selectCohort = state.cohort
        let cohortList = action.payload.cohortList
        let cohortListSize = action.payload.cohortList.length-1

        if(state.cohort === "Select")  {
            selectCohort = cohortList[cohortListSize].id
        }
        // Can't use .pop() here! TODO: refactor all this variables..... 


        return Object.assign({}, state, {
            cohortList : action.payload.cohortList,
            cohort: selectCohort
        })


        // *********** CLASSROOM *****************
        case CHANGE_CLASSROOM:
        console.log("CHANGE_CLASSROOM called");
        console.log(state)
        console.log("action:")
        console.log(action)
        return Object.assign({}, state, {
            currentClassroomName : action.classroom[1],
            currentClassroomId: action.classroom[0]
        })

        case GET_CLASSROOM_LIST_SUCCEDED:
        console.log("GET_CLASSROOM_LIST_SUCCEDED called");
        console.log(state, action)
        console.log(action.payload.classroomList)
        console.log(action.payload.classroomList.last)

        let assignClassroomId = state.currentClassroomId 
        let assignClassroomName = state.classroomcurrentClassroomName
        let classroomList = action.payload.classroomList
        let classroomListSize = action.payload.classroomList.length-1

        if(state.currentClassroomId === "Select" || state.currentClassroomName === "Select")  {
             assignClassroomId = classroomList[classroomListSize].id
             assignClassroomName = classroomList[classroomListSize].name
        }
        // Can't use .pop() here! TODO: refactor all this variables..... 

        return Object.assign({}, state, {
            classroomList : classroomList,
            currentClassroomId: assignClassroomId,
            currentClassroomName: assignClassroomName
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
         const studentsInCurrentClassrom = action.payload.studentsList.filter((student) => {
            console.log("state.currentClassroomName")
            console.log(state.currentClassroomName)
            return student.classroom_id === state.currentClassroomId
        })

        console.log(studentsInCurrentClassrom)
        // Change state:
         return Object.assign({}, state, {
             studentsList : action.payload.studentsList,
             currentClassroomStudents: studentsInCurrentClassrom
         })

        //  case POPULATES_COHORT_STUDENTS_LIST:
        //     return Object.assign({}, state, {
            // currentClassroomStudents: action.payload.studentsList.filter((student) => {
            //     return student.classroom_id === cohort
            // })
        //     });


        default:
        return state

    }
}

export default performAction;

   