import React, { useEffect, useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
	faCircleExclamation,
	faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
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
	const [errorMessage, setErrorMessage] = useState(false);
	const dispatch = useDispatch();

	const textInputHandler = (text) => {
		setTextInputValue(text);
		setErrorMessage(false);
	};

	const editHandler = () => {
		if (!textInputValue) {
			setErrorMessage(true);
		} else {
			dispatch(
				editTask({
					id: textToEdit.id,
					task: textInputValue,
				})
			);
			// closes edit-task modal window
			dispatch(setIsEditModalVisible());
		}
	};

	const cancelHandler = () => {
		dispatch(setIsEditModalVisible());
		setErrorMessage(false);
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
					style={
						errorMessage
							? [styles.textInput, styles.errorTextInput]
							: styles.textInput
					}
					placeholder='Type your task here...'
					value={textInputValue}
					onChangeText={textInputHandler}
				/>
				{errorMessage && (
					<View style={styles.errorContainer}>
						<FontAwesomeIcon icon={faCircleExclamation} color='#FF4636' />
						<Text style={styles.errorMessage}>
							You cannot add an empty task
						</Text>
					</View>
				)}
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
		paddingBottom: Platform.OS === 'ios' ? 180 : 100,
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
	errorContainer: {
		flexDirection: 'row',
		paddingTop: 4,
	},
	errorMessage: {
		color: '#FF4636',
		paddingLeft: 4,
	},
	errorTextInput: {
		borderWidth: 2,
		borderColor: '#FF4636',
	},
});
