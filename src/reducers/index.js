import {CHANGE_CLASSROOM} from '../actions';
import {GET_CLASSROOM_LIST_SUCCEDED} from '../actions';

 function performAction(state = {classroom: 9, classroomList: []}, action) {
    switch (action.type) {

        case CHANGE_CLASSROOM:
        console.log("CHANGE_CLASSROOM called");
        console.log(state, action)
        let classroom = state.classroom;
        // return {classroom};
        return Object.assign({}, state, {
            classroom : action.classroom
        })
        // default:
        // return state


        case GET_CLASSROOM_LIST_SUCCEDED:
        console.log("GET_CLASSROOM_LIST_SUCCEDED called");
        console.log(state, action)
        // console.log(action)
        console.log(action.payload.classroomList)
        // return {classroomList: action.payload.classroomList};
        return Object.assign({}, state, {
            classroomList : action.payload.classroomList
        })
        
        default:
        return state

    }
}

export default performAction;

   