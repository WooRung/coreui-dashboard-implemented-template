import { configureStore, createSlice } from "@reduxjs/toolkit";
import { todosReducer } from "./reducer";

// import { createStore } from "redux";

// const initialState = {
// 	sidebarShow: true,
// };

// const changeState = (state = initialState, { type, ...rest }) => {
// 	switch (type) {
// 		case "set":
// 			return { ...state, ...rest };
// 		default:
// 			return state;
// 	}
// };

// export const store = createStore(changeState);

export const uiSlice = createSlice({
	name: "ui",
	initialState: {
		sidebarShow: true,
	},
	reducers: {
		set: (state, action) => {
			return Object.assign(state, action.payload);
		},
	},
});

// export default store;
export default configureStore({
	reducer: {
		ui: uiSlice.reducer,
	},
});
