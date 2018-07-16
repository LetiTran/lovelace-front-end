export const GET_STUDENTS_LIST = "GET_STUDENTS_LIST";
export const CHANGE_COHORT = "CHANGE_COHORT";

export function getStudentsList(students) {
    const action = {
        type: GET_STUDENTS_LIST,
        students
    };
    return action
}

export function changeCohort(cohort) {
    const action = {
        type: CHANGE_COHORT,
        cohort
    };
    return action
}