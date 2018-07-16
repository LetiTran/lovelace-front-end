import { uniqueId } from '../actions';

const mockTasks = [
  {
    id: uniqueId(),
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: 'Unstarted',
  },
  {
    id: uniqueId(),
    title: 'Peace on Earth',
    description: 'No big deal.',
    status: 'In Progress',
  },
];

const initialState = {
  tasks: [],
  currentUser: null,
  currentUserRole: null,
  isLoading: false,
  error:null
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case 'POST_LOGIN_SUCCEEDED': {
      return {
        ...state,
        currentUser: action.payload.currentUser,
      };
    }
    // case 'FETCH_TASKS_SUCCEEDED': {
    //   return {
    //     ...state,
    //     tasks: action.payload.tasks,
    //     isLoading: false,
    //   };
    // }
    // case 'FETCH_TASKS_FAILED': {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: action.payload.error,
    //   };
    // }
    // case 'CREATE_TASK_SUCCEEDED': {
    //   return {
    //     ...state,
    //     tasks: state.tasks.concat(action.payload.task),
    //   };
    // }
    // case 'EDIT_TASK_SUCCEEDED': {
    //   const { payload } = action;
    //   const nextTasks = state.tasks.map(task => {
    //     if (task.id === payload.task.id) {
    //       return payload.task;
    //     }
    //
    //     return task;
    //   });
    //   return {
    //     ...state,
    //     tasks: nextTasks,
    //   };
    // }
    default: {
      return state;
    }
  }
}


export default function tasks(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TASKS_STARTED': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'FETCH_TASKS_SUCCEEDED': {
      return {
        ...state,
        tasks: action.payload.tasks,
        isLoading: false,
      };
    }
    case 'FETCH_TASKS_FAILED': {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case 'CREATE_TASK_SUCCEEDED': {
      return {
        ...state,
        tasks: state.tasks.concat(action.payload.task),
      };
    }
    case 'EDIT_TASK_SUCCEEDED': {
      const { payload } = action;
      const nextTasks = state.tasks.map(task => {
        if (task.id === payload.task.id) {
          return payload.task;
        }

        return task;
      });
      return {
        ...state,
        tasks: nextTasks,
      };
    }
    default: {
      return state;
    }
  }
}

