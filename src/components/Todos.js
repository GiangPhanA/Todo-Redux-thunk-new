import React from 'react';
import { useEffect } from 'react';
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import {useSelector, useDispatch} from 'react-redux'
import TodoForm from './TodoForm';
import {markComplete, deleteTodo, getTodos} from '../store/actions/todoActions'



const Todos = () => {

    const dispatch = useDispatch();
    console.log ('dispatch', dispatch)
    const todos = useSelector((state) => state.myTodos.todos);

    useEffect(() => {
        dispatch(getTodos());
        console.log ('chay useEffect');
    }, [dispatch]);

    const deleteTodoList = (item) => {
        console.log ('Da click xoa', item);
        dispatch(deleteTodo(item))
    }
    console.log ('todo now', todos)
   
    return (
        <div className = 'grid wide'>
            <div className = 'row'>
                <TodoForm  />
                <div className = 'l-6 l-o-3 m-6 m-o-3 c-12'>  
                    <div className = 'todo-list'>
                        <ul>
                            {
                                todos.map(todo => (
                                <li key = {todo.id} className = {todo.completed ? 'completed' : ''}>
                                    {todo.title}
                                    <input type = 'checkbox' onChange={() => markComplete(todo.id)}/>
                                    <button onClick = {() =>deleteTodoList(todo.id)}>Delete</button>
                                    <button >Edit</button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>              
                </div>    
            </div>
        </div>


    )
}
// Có thể không cần Todos.propTypes
// Todos.propTypes = {
// 	todos: PropTypes.array.isRequired,
// 	getTodos: PropTypes.func.isRequired,
// 	markComplete: PropTypes.func.isRequired,
// 	deleteTodo: PropTypes.func.isRequired
// }

// state là store
// const mapStateToProps = state => ({
//     // todos : là prop của component Todos
//     // state.myTodos.todos với ý nghĩa sau:
//     // state là trạng thái của store
//     // myTodos: là reducer
//     // todos: giá trị khởi tạo của iniState của reduce
// 	todos: state.myTodos.todos
// })

// export default connect(mapStateToProps, {markComplete, deleteTodo, getTodos}) (Todos)
export default Todos