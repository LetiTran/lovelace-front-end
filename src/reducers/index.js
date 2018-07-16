import {CHANGE_CLASSROOM} from '../actions';
import {GET_CLASSROOM_LIST_SUCCEDED} from '../actions';

export default function performAction(state = {classroom: 9, classroomList: []}, action) {
    switch (action.type) {

        case CHANGE_CLASSROOM:
        console.log("CHANGE_CLASSROOM called");
        console.log(state, action)
        let classroom = state.classroom;
        return {classroom};
        default:
        return state


        case GET_CLASSROOM_LIST_SUCCEDED:
        console.log("GET_CLASSROOM_LIST_SUCCEDED called");
        console.log(state, action)
        return {classroomList: action.payload.classroomList};
        // default:
        // return state

    }
}



   