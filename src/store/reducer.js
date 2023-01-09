import { addTodo, todoToggled } from "./action";

export const todosReducer = (state = [], action) => {
	switch (action.type) {
		case addTodo.type:
			return state.concat({
				id: action.payload.id,
				text: action.payload.text,
				completed: false,
			});
		case todoToggled.type:
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
