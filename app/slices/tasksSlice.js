import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
	tasksList: [],
	isAddModalVisible: false,
	isEditModalVisible: false,
	taskToEdit: {
		id: '',
		task: '',
	},
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
			state.tasksList = state.tasksList.filter(
				(item) => item.id !== action.payload.id
			);
		},
		setIsAddModalVisible: (state) => {
			state.isAddModalVisible = !state.isAddModalVisible;
		},
		setIsEditModalVisible: (state) => {
			state.isEditModalVisible = !state.isEditModalVisible;
		},
		setTaskToEdit: (state, action) => {
			const task = {
				id: action.payload.id,
				task: action.payload.task,
			};
			state.taskToEdit = task;
		},
	},
});

// actions
export const {
	addTask,
	deleteTask,
	setIsAddModalVisible,
	setIsEditModalVisible,
	setTaskToEdit,
} = tasksSlice.actions;

//selectors
export const selectTasks = (state) => state.tasks.tasksList;
export const selectIsAddModalVisible = (state) => state.tasks.isAddModalVisible;
export const selectIsEditModalVisible = (state) =>
	state.tasks.isEditModalVisible;
export const selectTaskToEdit = (state) => state.tasks.taskToEdit;

export default tasksSlice.reducer;
