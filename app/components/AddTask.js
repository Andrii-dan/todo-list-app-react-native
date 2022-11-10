import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import {
	addTask,
	selectIsAddModalVisible,
	selectTasks,
	setIsAddModalVisible,
} from '../slices/tasksSlice';

const AddTask = () => {
	const [textInputValue, setTextInputValue] = useState('');
	const tasksList = useSelector(selectTasks);
	const isModalVisible = useSelector(selectIsAddModalVisible);
	const dispatch = useDispatch();
	const uniqueId = uuid();

	const addTaskHandler = () => {
		dispatch(
			addTask({
				id: uniqueId,
				task: textInputValue,
			})
		);
		// clearing input
		setTextInputValue('');
		// closes add task modal
		dispatch(setIsAddModalVisible());
	};

	const cancelHandler = () => {
		dispatch(setIsAddModalVisible());
	};

	return (
		<Modal visible={isModalVisible} animationType='slide'>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder='Add task'
					value={textInputValue}
					onChangeText={(text) => setTextInputValue(text)}
				/>
				<View style={styles.btnContainer}>
					<View style={styles.button}>
						<Button color='#f31282' title='Cancel' onPress={cancelHandler} />
					</View>
					<View style={styles.button}>
						<Button color='#b180f0' title='Add Task' onPress={addTaskHandler} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default AddTask;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		backgroundColor: '#311b6b',
		paddingBottom: 250,
	},
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
	btnContainer: {
		marginTop: 16,
		flexDirection: 'row',
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
});
