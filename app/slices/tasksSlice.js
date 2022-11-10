import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
	tasksList: [],
};

// slice
export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (state, action) => {
			const newTask = {
				id: action.payload.id,
				task: action.payload.task,
			};
			state.tasksList.push(newTask);
		},
		deleteTask: (state, action) => {
			return state.filter((item) => item.id !== action.payload.id);
		},
	},
});

// actions
export const { addTask, deleteTask } = tasksSlice.actions;

//selectors
export const selectTasks = (state) => state.tasks.tasksList;

export default tasksSlice.reducer;
