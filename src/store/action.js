import { v4 as uuidv4 } from "uuid";

export const ADD_TODO = "ADD_TODO";
export const TODO_TOGGLED = "TODO_TOGGLED";

export const addTodo = text => ({
	type: ADD_TODO,
	payload: { text, id: uuidv4() },
});

export const todoToggled = id => ({
	type: TODO_TOGGLED,
	payload: id,
});
