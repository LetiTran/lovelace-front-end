import {CHANGE_COHORT} from '../actions';

export default function performAction(state = {cohort: 9}, action) {
    switch (action.type) {
        case CHANGE_COHORT:
        console.log("CHANGE_COHORT called");
        console.log(state, action)
        let cohort = state.cohort +1;
        return {cohort};
        default:
        return state
    }
}