import {
    CHANGE_CLASSROOM, GET_CLASSROOM_LIST_SUCCEDED,
    CHANGE_COHORT, GET_COHORT_LIST_SUCCEDED,
    GET_ASSIGNMENTS_LIST_SUCCEDED, GET_STUDENTS_LIST_SUCCEDED, GET_INSTRUCTORS_LIST_SUCCEDED,
    CHANGE_COHORT_ON_FORM, CHANGE_CLASSROOM_ON_FORM, CHANGE_CLASSROOM_ON_FORM_FOR_NEW_CLASSROOM,
    STORE_NEW_CLASSROOM_NAME,
    STORE_NEW_COHORT_NUMBER, STORE_NEW_COHORT_NAME, STORE_NEW_COHORT_REPO_NAME, 
    STORE_NEW_COHORT_CLASS_START_DATE, STORE_NEW_COHORT_CLASS_END_DATE, 
    STORE_NEW_COHORT_INT_START_DATE, STORE_NEW_COHORT_INT_END_DATE,
    STORE_NEW_COHORT_GRAD_DATE, ADD_NAMES_TO_INVITE_LIST,
    STORE_NEW_INSTRUCTOR_NAME, STORE_NEW_INSTRUCTOR_GITHUB_NAME,
    STORE_SELECTED_INSTRUCTOR, STORE_SELECTED_INSTRUCTOR_NEW_DATA,
    STORE_SELECTED_CLASSROOM_NEW_DATA, STORE_SELECTED_CLASSROOM,
    UPDATE_COHORT_NUMBER, UPDATE_COHORT_NAME, UPDATE_COHORT_REPO_NAME, 
    UPDATE_COHORT_CLASS_START_DATE, UPDATE_COHORT_CLASS_END_DATE, 
    UPDATE_COHORT_INT_START_DATE, UPDATE_COHORT_INT_END_DATE,
    UPDATE_COHORT_GRAD_DATE, STORE_SELECTED_COHORT_TO_UPDATE,
    STORE_SELECTED_STUDENT_TO_UPDATE, UPDATE_STUDENT_NAME, UPDATE_STUDENT_EMAIL,
    UPDATE_STUDENT_GITHUB_NAME,UPDATE_PREFERRED_NAME, UPDATE_STUDENT_CLASSROOM_NAME,
    GET_SUBMISSION_LIST_SUCCEDED,
    STORE_SELECTED_SUBMISSION_GRADE, STORE_SELECTED_SUBMISSION, 
    STORE_NEW_ASSIGNMENT_NAME, STORE_NEW_ASSIGNMENT_REPO_URL, STORE_NEW_ASSIGNMENT_INDIVIDUAL_BOOL,
    STORE_ASSIGNMENT_GROUPS,
    UPDATE_SELECTED_ASSIGNMENT,
    ADD_STUDENT_TO_GROUP, CHANGE_GROUP_SIZE
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

    newClassroomName: null,
    newClassroomCohortId: null,

    addedNamesForInvites: [],
    addedInstructorsForInvites: [],

    newInstructorName: null,
    newInstructorGithubName: null,

    selectedtInstructorToUpdate: {
        id: null,
        name: null, 
        github_name: null,
        active: null,
    },

    selectedtClassroomToUpdate: {
        id: null,
        name: null,
        cohort_id: null
    },

    selectedtCohortToUpdate: null,
    updateCohortNumber: null,
    updateCohortName: null,
    updateCohortRepoName: null,
    updateCohortClassStartDate: null,
    updateCohortClassEndDate: null,
    updateCohortInternshipStartDate: null,
    updateCohortInternshipEndDate: null,
    updateCohortGraduationDate: null,

    selectedtStudentToUpdate: null,
    updateStudentName: null,
    updateStudentGithubName: null,
    updateStudentClassroom: null,
    updateStudentEmail: null,
    updateStudentPreferredName: null,

    submissionList: [],
    selectedSubmission: null,
    updateSubmissionGrade: null,

    newAssignmentName: null,
    newAssignmentRepoUrl: null,
    newAssignmentIndividual: false,

    selectedAssignmentonForm: null,

    groupSize: 2,
    currentClassroomStudentsToAddToGroupd: null,
    // [{name: "test3", id: 3}, {name: "test4", id: 4}]
    currentGroup: 0,
    studentsGroups: [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]
    // TODO: Can't decide which way is better, 
    // Having several separate states for each attribute or comine them in a hash
    // - hash means way more repetitions inside the component code
    // - separate states for each means lots of more repeating ereducers and actions,
    // Not enough time to think about this.

}

 function performAction(state = stateList, action) {
   
    switch (action.type) {

        // *********** COHORT *****************    
        case CHANGE_COHORT: 
        return Object.assign({}, state, {
            currentCohort : action.cohort
        })
    

        case GET_COHORT_LIST_SUCCEDED: 
        {
            let selectCohort = state.currentCohort
            let cohortList = action.payload.cohortList
            let cohortListSize = action.payload.cohortList.length-1
            let assignCohortForNewClassroom = state.selectedCohortOnFormForNewClassroom

            if(state.selectedCohortOnFormForNewClassroom === 0)  {
                assignCohortForNewClassroom = cohortList[cohortListSize].id
            }

            if(state.currentCohort === 0)  {
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
                selectedCohortOnFormForNewClassroom: assignCohortForNewClassroom,
            })
        }

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

        case UPDATE_COHORT_NUMBER:
        return Object.assign({}, state, {
            updateCohortNumber: action.number
        })  

        case UPDATE_COHORT_NAME:
        return Object.assign({}, state, {
            updateCohortName: action.name
        })  

        case UPDATE_COHORT_REPO_NAME:
        return Object.assign({}, state, {
            updateCohortRepoName: action.name
        })  

        case UPDATE_COHORT_CLASS_START_DATE:
        return Object.assign({}, state, {
            updateCohortClassStartDate: action.date
        }) 

        case UPDATE_COHORT_CLASS_END_DATE:
        return Object.assign({}, state, {
            updateCohortClassEndDate: action.date
        }) 

        case UPDATE_COHORT_INT_START_DATE:
        return Object.assign({}, state, {
            updateCohortInternshipStartDate: action.date
        }) 

        case UPDATE_COHORT_INT_END_DATE:
        return Object.assign({}, state, {
            updateCohortInternshipEndDate: action.date
        }) 

        case UPDATE_COHORT_GRAD_DATE:
        return Object.assign({}, state, {
            updateCohortGraduationDate: action.date
        }) 

        case STORE_SELECTED_COHORT_TO_UPDATE:
        return Object.assign({}, state, {
            selectedtCohortToUpdate: action.payload.cohort
        }) 
        

        // *********** CLASSROOM *****************
        case CHANGE_CLASSROOM:
        {let studentsInCurrentClassrom = state.studentsList.filter((student) => {
            return student.classroom_id === action.classroom
        })
        return Object.assign({}, state, {
            currentClassroom: action.classroom,
            currentClassroomStudents: studentsInCurrentClassrom,
            currentClassroomStudentsToAddToGroupd: studentsInCurrentClassrom
        })}

        case GET_CLASSROOM_LIST_SUCCEDED:

       { let assignClassroom = state.currentClassroom
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
        }

        case CHANGE_CLASSROOM_ON_FORM:
        return Object.assign({}, state, {
            selectedClassroomOnForm : action.classroom
        })

        case STORE_NEW_CLASSROOM_NAME:
        return Object.assign({}, state, {
            newClassroomName: action.name
        })

        case STORE_SELECTED_CLASSROOM_NEW_DATA:
        return Object.assign({}, state, {
            selectedtClassroomToUpdate: action.payload.classroom,
        })

        case STORE_SELECTED_CLASSROOM:
        {console.log(action.payload.classroom)
        const selectedClassroomData = {
            id: action.payload.classroom.id,
            name: action.payload.classroom.name, 
            cohort_id: action.payload.classroom.cohort_id
        }
        return Object.assign({}, state, {
            selectedtClassroomToUpdate: selectedClassroomData
        })}

         // *********** ASSIGNMENTS *****************    
        case GET_ASSIGNMENTS_LIST_SUCCEDED:
         return Object.assign({}, state, {
             assignmentList : action.payload.assignmentList
         })

        case STORE_NEW_ASSIGNMENT_NAME:
        return Object.assign({}, state, {
            newAssignmentName: action.payload.name,
        })

        case STORE_NEW_ASSIGNMENT_REPO_URL:
        return Object.assign({}, state, {
            newAssignmentRepoUrl: action.payload.url,
        })

        case STORE_NEW_ASSIGNMENT_INDIVIDUAL_BOOL:
        // console.log('STORE_NEW_ASSIGNMENT_INDIVIDUAL_BOOL')
        // console.log(action.payload.bool)
        // console.log(state.newAssignmentIndividual)
        
        return Object.assign({}, state, {
            // newAssignmentIndividual: action.payload.bool,
        newAssignmentIndividual: action.payload.bool,
        })
        
        case STORE_ASSIGNMENT_GROUPS:
        let addGroup = state.assignedGroups.concat(action.payload.group)
        return Object.assign({}, state, {
            assignedGroups: addGroup
        })

        case UPDATE_SELECTED_ASSIGNMENT:
        return Object.assign({}, state, {
            selectedAssignmentonForm: action.assignment
        })

         // *********** STUDENTS *****************    
         case GET_STUDENTS_LIST_SUCCEDED:
         {
            const studentsInCurrentClassrom = action.payload.studentsList.filter((student) => {
                return student.classroom_id === state.currentClassroom.id
            })
            return Object.assign({}, state, {
                studentsList : action.payload.studentsList,
                currentClassroomStudents: studentsInCurrentClassrom,
                currentClassroomStudentsToAddToGroupd: studentsInCurrentClassrom
            })
         }

         case STORE_SELECTED_STUDENT_TO_UPDATE:
         return Object.assign({}, state, {
             selectedtStudentToUpdate: action.payload.student
         }) 
         
         case UPDATE_STUDENT_NAME:
         return Object.assign({}, state, {
             updateStudentName: action.name
         }) 

         case UPDATE_STUDENT_GITHUB_NAME:
         return Object.assign({}, state, {
            updateStudentGithubName: action.name
         }) 

         case UPDATE_STUDENT_EMAIL:
         return Object.assign({}, state, {
            updateStudentEmail: action.email
         }) 

         case UPDATE_PREFERRED_NAME:
         return Object.assign({}, state, {
            updateStudentPreferredName: action.name
         }) 

        case UPDATE_STUDENT_GITHUB_NAME:
        return Object.assign({}, state, {
        updateStudentGithubName: action.name
        }) 
 
        case UPDATE_STUDENT_CLASSROOM_NAME:
        return Object.assign({}, state, {
            updateStudentClassroom: action.classroom
        })

        case ADD_STUDENT_TO_GROUP:

        console.log((action.payload.student))
        // check if gourp has defined size already and move to next group if...
        // console.log( Object.keys(state.studentsGroups[state.currentGroup]).length)
        let currentSize = Object.keys(state.studentsGroups[state.currentGroup]).length
        let putInThisGroup = state.currentGroup
        if (currentSize === state.groupSize) {
            putInThisGroup = putInThisGroup + 1
        }

        let addToGroup = state.studentsGroups[putInThisGroup].concat(action.payload.student)

        console.log(addToGroup)
        let groups = state.studentsGroups
        console.log(groups)
        groups[putInThisGroup] = addToGroup
        console.log(groups)

        let takeStudentOutOfList = state.currentClassroomStudentsToAddToGroupd.filter(function(elem){
            return elem.id != action.payload.student.id; 
         });
        // let takeStudentOutOfList = state.currentClassroomStudentsToAddToGroupd.pop(action.payload.student)
        return Object.assign({}, state, {
            studentsGroups: groups,
            currentGroup: putInThisGroup,
            currentClassroomStudentsToAddToGroupd:takeStudentOutOfList

        })

        case CHANGE_GROUP_SIZE:
        // let new_gorups = studentsGroups
        // new Array()
        let division = Object.keys(state.currentClassroomStudents).length / action.payload.size
        console.log('division')
        console.log(division)
        let new_gorups = new Array(division).fill(null).map(()=>new Array().fill(null))
        console.log(new_gorups)
        return Object.assign({}, state, {
            groupSize: action.payload.size,
            studentsGroups: new_gorups
        })

        
        // *********** INSTRUCTORS *****************    
        case GET_INSTRUCTORS_LIST_SUCCEDED:
        {
            const activeInstructors = action.payload.instructorsList.instructors.filter((instructor) => {
                return instructor.active === true
            })
            return Object.assign({}, state, {
                instructorsList : activeInstructors,
            })
        }

        case STORE_SELECTED_INSTRUCTOR_NEW_DATA:
        return Object.assign({}, state, {
            selectedtInstructorToUpdate: action.payload.instructor,
        })

        case STORE_SELECTED_INSTRUCTOR:
        {
            const selectedInstructorData = {
                id: action.payload.instructor.id,
                name: action.payload.instructor.name, 
                github_name: action.payload.instructor.github_name, 
                active: action.payload.instructor.active,
            }
            return Object.assign({}, state, {
                selectedtInstructorToUpdate: selectedInstructorData
            })
        }

        case STORE_NEW_INSTRUCTOR_NAME:
        return Object.assign({}, state, {
            newInstructorName: action.payload.name,
        })

        case STORE_NEW_INSTRUCTOR_GITHUB_NAME:
        return Object.assign({}, state, {
            newInstructorGithubName: action.payload.name,
        })


        // *********** INVITES *****************  
        case ADD_NAMES_TO_INVITE_LIST:
        return Object.assign({}, state, {
            addedNamesForInvites : action.payload.names,
        })


        // *********** SUBMISSIONS *****************  
        case GET_SUBMISSION_LIST_SUCCEDED:
        return Object.assign({}, state, {
            submissionList: action.payload.submissionList
        })

        case STORE_SELECTED_SUBMISSION:
        return Object.assign({},state, {
            selectedSubmission: action.payload.submission
        })

        case STORE_SELECTED_SUBMISSION_GRADE:
        return Object.assign({},state, {
            updateSubmissionGrade: action.payload.submissionGrade
        })



        default:
        return state

    }
}

export default performAction;

   