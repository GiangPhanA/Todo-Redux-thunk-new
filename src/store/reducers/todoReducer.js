const initialState = {
	 todos: [] 
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TODOS':
			return {
				...state,
				todos: action.payload
			}
        case 'MARK_COMPLETE':
             //console.log ('click complete');
             console.log (action.payload)
            // return state

            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload) 
                      todo.completed = !todo.completed
                    return todo
                })       
            }
        case 'ADD_TODO':
            console.log ('new add',action.payload)
            return {
                ...state,
                todos: [...state.todos, action.payload ]
            }
        
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            return state

    }

}

export default todoReducer