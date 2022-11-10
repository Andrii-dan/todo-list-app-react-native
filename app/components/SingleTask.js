import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import {
	deleteTask,
	setIsEditModalVisible,
	setTaskToEdit,
} from '../slices/tasksSlice';

const SingleTask = ({ task, id }) => {
	const dispatch = useDispatch();

	const editTaskHandler = () => {
		dispatch(setIsEditModalVisible());
		dispatch(
			setTaskToEdit({
				id: id,
				task: task,
			})
		);
	};

	const deleteTaskHandler = () => {
		dispatch(
			deleteTask({
				id: id,
			})
		);
	};

	return (
		<View style={styles.taskContainer}>
			<Text style={styles.taskText}>{task}</Text>
			<Pressable
				style={({ pressed }) => pressed && styles.pressedItem}
				onPress={editTaskHandler}
			>
				<View>
					<FontAwesomeIcon style={styles.editIcon} icon={faPenToSquare} />
				</View>
			</Pressable>
			<Pressable
				style={({ pressed }) => pressed && styles.pressedItem}
				onPress={deleteTaskHandler}
			>
				<View>
					<FontAwesomeIcon style={styles.deleteIcon} icon={faTrashCan} />
				</View>
			</Pressable>
		</View>
	);
};

export default SingleTask;

const styles = StyleSheet.create({
	taskContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 12,
		marginVertical: 5,
		borderRadius: 7,
		backgroundColor: '#5e0acc',
	},
	pressedItem: {
		opacity: 0.5,
	},
	taskText: {
		width: '75%',
		paddingVertical: 8,
		fontSize: 18,
		color: '#fff',
	},
	deleteIcon: {
		paddingHorizontal: 2,
		color: '#fff',
	},
	editIcon: {
		paddingHorizontal: 2,
		color: '#fff',
	},
});
