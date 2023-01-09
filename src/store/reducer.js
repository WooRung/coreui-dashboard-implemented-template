import { ADD_TODO, TODO_TOGGLED } from "./action";

export const todosReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return state.concat({
				id: action.payload.id,
				text: action.payload.text,
				completed: false,
			});
		case TODO_TOGGLED:
			return state.map(todo => {
				if (todo.id !== action.payload.id) return todo;

				return {
					...todo,
					completed: !todo.completed,
				};
			});
		default:
			return state;
	}
};
