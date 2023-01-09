import { uuidv4 } from "uuid";

const ADD_TODO = "ADD_TODO";
const TODO_TOGGLED = "TODO_TOGGLED";

export const addTodo = text => ({
	type: ADD_TODO,
	payload: { text, id: uuidv4() },
});

export const todoToggled = id => ({
	type: TODO_TOGGLED,
	payload: id,
});
