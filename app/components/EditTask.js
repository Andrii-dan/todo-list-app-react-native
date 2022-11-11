import React, { useEffect, useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';
import {
	editTask,
	selectIsEditModalVisible,
	selectTaskToEdit,
	setIsEditModalVisible,
} from '../slices/tasksSlice';
import { useDispatch, useSelector } from 'react-redux';

const EditTask = () => {
	const textToEdit = useSelector(selectTaskToEdit);
	const [textInputValue, setTextInputValue] = useState('');
	const isModalVisible = useSelector(selectIsEditModalVisible);
	const dispatch = useDispatch();

	useEffect(() => {
		setTextInputValue(textToEdit.task);
	}, [textToEdit]);

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
		dispatch(setIsEditModalVisible());
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
						<Button color='#b180f0' title='Edit' onPress={editHandler} />
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
