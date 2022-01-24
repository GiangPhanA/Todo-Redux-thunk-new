import React from 'react'
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {useDispatch} from 'react-redux'
import { addTodo } from '../store/actions/todoActions'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

const TodoForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const onTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        if(title !== '') {
            const newTodo ={
                id: uuidv4(),
                title,
                completed: false
            }
            // console.log ('newTodo',newTodo)
            dispatch(addTodo(newTodo));
            setTitle('')
        }
        

    }

    return (
        <div className = 'grid wide'>
            <div className = 'row'>
                <div className = 'l-6 l-o-3 m-6 m-o-3 c-12 '>
                    <div className = 'todo-form'>
                        <form onSubmit={onFormSubmit}>
                            <label htmlFor="todo" className="">To do</label>
                            <input type = 'text' id = "todo" placeholder = "To do" 
                            onChange = {onTitleChange}
                            value ={title}/>
                            <input type="submit" value="ADD" />
                        </form>

                    </div>

                </div>    
            </div>
        </div>         
    )
}

// TodoForm.propTypes = {
//     addTodo: PropTypes.func.isRequired

// }

// const mapStateToProps = state => ({})

// export default connect(mapStateToProps, {addTodo}) (TodoForm)

export default TodoForm;

