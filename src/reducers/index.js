import {CHANGE_CLASSROOM} from '../actions';
import {GET_CLASSROOM_LIST_SUCCEDED} from '../actions';

import {CHANGE_COHORT} from '../actions';
import {GET_COHORT_LIST_SUCCEDED} from '../actions';

import {GET_ASSIGNMENTS_LIST_SUCCEDED} from '../actions';

import {GET_STUDENTS_LIST_SUCCEDED} from '../actions';

const stateList = {
    cohort: 1, 
    cohortList: [], 
    classroom: 1, 
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
        return Object.assign({}, state, {
            cohortList : action.payload.cohortList
        })


        // *********** CLASSROOM *****************
        case CHANGE_CLASSROOM:
        console.log("CHANGE_CLASSROOM called");
        console.log(state, action)
        return Object.assign({}, state, {
            classroom : action.classroom
        })

        case GET_CLASSROOM_LIST_SUCCEDED:
        console.log("GET_CLASSROOM_LIST_SUCCEDED called");
        console.log(state, action)
        console.log(action.payload.classroomList)
        return Object.assign({}, state, {
            classroomList : action.payload.classroomList
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
            console.log("state.classroom")
            console.log(state.classroom)
            return student.classroom_id === state.classroom
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

   