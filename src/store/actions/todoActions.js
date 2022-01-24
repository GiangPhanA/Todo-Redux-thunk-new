import axios from "axios"
// export const markComplete = () => {
// 	const markCompleteAction = dispatch => {
// 		dispatch({
// 			type: 'MARK_COMPLETE',
// 			payload: 'my payload'
// 		})
// 	}
// 	return markCompleteAction
// }

export const getTodos = () => async dispatch => {
	try {
		const response = await axios.get(
			// 'https://61b0bbb13c954f001722a5fb.mockapi.io/api/produc?_limit=3'
			'https://61b0bbb13c954f001722a5fb.mockapi.io/api/todo'
		)
		dispatch({
			type: 'GET_TODOS',
			payload: response.data
		})
	} catch (error) {
		console.log(error)
	}
}

export const markComplete = (id) => async dispatch => {
        // console.log(id)
		// dispatch({
		// 	type: 'MARK_COMPLETE',
		// 	payload: id
		// })

		const newTodoPut = {
			"completed": true,
		}

		try {
			await axios.put(`https://61b0bbb13c954f001722a5fb.mockapi.io/api/todo/${id}`, newTodoPut)
			dispatch({
				type: 'MARK_COMPLETE',
				payload: id
			})
		} catch (error) {
			console.log(error)
		}
}

export const addTodo = newTodo => async dispatch => {
	// dispatch({
	// 	type: 'ADD_TODO',
	// 	payload: newTodo
	// })
	try {
		await axios.post('https://61b0bbb13c954f001722a5fb.mockapi.io/api/todo', newTodo)
		dispatch({
			type: 'ADD_TODO',
			payload: newTodo
		})
	} catch (error) {
		console.log(error)
	}
}

export const deleteTodo = (id) => async dispatch => {
	// console.log(id)
	// dispatch({
	// 	type: 'DELETE_TODO',
	// 	payload: id
	// })
	try {
		await axios.delete(`https://61b0bbb13c954f001722a5fb.mockapi.io/api/todo/${id}`)
		dispatch({
			type: 'DELETE_TODO',
			payload: id
		})
	} catch (error) {
		console.log(error)
	}
}