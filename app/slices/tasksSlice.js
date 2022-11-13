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
		setTasksList: (state, action) => {
			state.tasksList = action.payload;
		},
		addTask: (state, action) => {
			const newTask = {
				id: action.payload.id,
				task: action.payload.task,
			};
			state.tasksList.push(newTask);
		},
		setTaskToEdit: (state, action) => {
			const task = {
				id: action.payload.id,
				task: action.payload.task,
			};
			state.taskToEdit = task;
		},
		editTask: (state, action) => {
			// finds a specific task from the taskList to edit
			const findTask = state.tasksList.find(
				(item) => item.id === state.taskToEdit.id
			);
			// returns the index of the task to be edited
			const indexOfEditingTask = state.tasksList.indexOf(findTask);
			// based on the index of the task to be edited, replaces it with the user-edited task
			state.tasksList[indexOfEditingTask] = {
				id: action.payload.id,
				task: action.payload.task,
			};
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
	},
});

// actions
export const {
	setTasksList,
	addTask,
	deleteTask,
	editTask,
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
