import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addTask, selectTasks } from '../slices/tasksSlice';

const AddTask = () => {
	const [textInputValue, setTextInputValue] = useState('');
	const tasksList = useSelector(selectTasks);
	const dispatch = useDispatch();
	const uniqueId = uuid();

	const addTaskHandler = () => {
		dispatch(
			addTask({
				id: uniqueId,
				task: textInputValue,
			})
		);
		setTextInputValue('');
	};
	console.log(tasksList);

	return (
		<View className='add-todo'>
			<TextInput
				style={styles.textInput}
				placeholder='Add task'
				value={textInputValue}
				onChangeText={(text) => setTextInputValue(text)}
			/>
			<Button title='Add Task' onPress={addTaskHandler} />
		</View>
	);
};

export default AddTask;

const styles = StyleSheet.create({
	textInput: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
		backgroundColor: '#e4d0ff',
		color: '#120438',
		borderRadius: 5,
		padding: 16,
		marginBottom: 5,
		width: '80%',
	},
});
