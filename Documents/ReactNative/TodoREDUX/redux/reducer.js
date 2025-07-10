const initialState = { 
  todo: [ 
    {id: 0, text: "Get started with Todo List"}
  ] 
};

const TodoTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDTASK':
      return {
        ...state,
        todo: [...state.todo, action.payload]
      };

    case 'REMOVETASK':
      return {
        ...state,
        todo: state.todo.filter(task => task.id !== action.payload.id)
      };

    default:
      return state;
  }
};

export default TodoTaskReducer;