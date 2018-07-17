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
    assignmentsList: [],
    studentsList: []
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
         console.log(action.payload.assignmentsList)
         return Object.assign({}, state, {
             assignmentsList : action.payload.assignmentsList
         })


         // *********** STUDENTS *****************    
         case GET_STUDENTS_LIST_SUCCEDED:
         console.log("GET_STUDENTS_LIST_SUCCEDED called");
         console.log(state, action)
         console.log(action.payload.studentsList)
         return Object.assign({}, state, {
             studentsList : action.payload.studentsList
         })

        default:
        return state

    }
}

export default performAction;

   