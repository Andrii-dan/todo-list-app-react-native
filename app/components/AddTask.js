import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View, Text } from 'react-native';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import {
	addTask,
	selectIsAddModalVisible,
	setIsAddModalVisible,
} from '../slices/tasksSlice';

const AddTask = () => {
	const [textInputValue, setTextInputValue] = useState('');
	const isModalVisible = useSelector(selectIsAddModalVisible);
	const dispatch = useDispatch();

	const addTaskHandler = () => {
		const uniqueId = uuid();
		dispatch(
			addTask({
				id: uniqueId,
				task: textInputValue,
			})
		);
		// clearing input value
		setTextInputValue('');
		// closes add-task modal window
		dispatch(setIsAddModalVisible());
	};

	const cancelHandler = () => {
		dispatch(setIsAddModalVisible());
	};

	return (
		<Modal visible={isModalVisible} animationType='slide'>
			<View style={styles.inputContainer}>
				<View style={styles.addTaskIconContainer}>
					<FontAwesomeIcon icon={faCircleCheck} color={'#1ABA62'} size={130} />
				</View>
				<View style={styles.headerContainer}>
					<Text style={styles.headerText}>ADDING A NEW TASK</Text>
				</View>
				<TextInput
					style={styles.textInput}
					placeholder='Type your task here...'
					value={textInputValue}
					onChangeText={(text) => setTextInputValue(text)}
				/>
				<View style={styles.btnContainer}>
					<View style={styles.button}>
						<Button color='#FF4636' title='CANCEL' onPress={cancelHandler} />
					</View>
					<View style={styles.button}>
						<Button color='#1ABA62' title='ADD' onPress={addTaskHandler} />
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
		backgroundColor: '#283747',
		paddingBottom: 180,
	},
	textInput: {
		backgroundColor: '#CCDCED',
		color: '#120438',
		borderRadius: 7,
		padding: 20,
		marginBottom: 5,
		width: '85%',
		fontSize: 18,
	},
	btnContainer: {
		marginTop: 16,
		flexDirection: 'row',
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
	addTaskIconContainer: {
		paddingBottom: 15,
	},
	headerContainer: {
		paddingVertical: 10,
		marginBottom: 15,
	},
	headerText: {
		color: '#C1D0E0',
		fontSize: 24,
	},
});
