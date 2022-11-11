import React, { useEffect, useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import {
	editTask,
	selectIsEditModalVisible,
	selectTaskToEdit,
	setIsEditModalVisible,
} from '../slices/tasksSlice';

const EditTask = () => {
	const textToEdit = useSelector(selectTaskToEdit);
	const isModalVisible = useSelector(selectIsEditModalVisible);
	const [textInputValue, setTextInputValue] = useState('');
	const dispatch = useDispatch();

	const cancelHandler = () => {
		dispatch(setIsEditModalVisible());
	};

	const editHandler = () => {
		dispatch(
			editTask({
				id: textToEdit.id,
				task: textInputValue,
			})
		);
		// closes edit-task modal window
		dispatch(setIsEditModalVisible());
	};

	useEffect(() => {
		setTextInputValue(textToEdit.task);
	}, [textToEdit]);

	return (
		<Modal visible={isModalVisible} animationType='slide'>
			<View style={styles.inputContainer}>
				<View style={styles.editTaskIconContainer}>
					<FontAwesomeIcon icon={faPenToSquare} color={'#1ABA62'} size={130} />
				</View>
				<View style={styles.headerContainer}>
					<Text style={styles.headerText}>EDITING</Text>
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
						<Button color='#1ABA62' title='SAVE' onPress={editHandler} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default EditTask;

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
	editTaskIconContainer: {
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
