import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { ScaleDecorator } from 'react-native-draggable-flatlist';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
	deleteTask,
	setIsEditModalVisible,
	setTaskToEdit,
} from '../slices/tasksSlice';

const SingleTask = ({ task, id, drag, isActive }) => {
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
		<ScaleDecorator>
			<View style={styles.taskContainer}>
				<View style={styles.taskTextContainer}>
					<TouchableOpacity
						activeOpacity={1}
						onLongPress={drag}
						disabled={isActive}
					>
						<Text style={styles.taskText}>{task}</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.buttonsConteiner}>
					<Pressable
						style={({ pressed }) => pressed && styles.pressedItem}
						onPress={editTaskHandler}
					>
						<View>
							<FontAwesomeIcon
								style={styles.actionIcon}
								color={'#C1D0E0'}
								icon={faPenToSquare}
							/>
						</View>
					</Pressable>
					<Pressable
						style={({ pressed }) => pressed && styles.pressedItem}
						onPress={deleteTaskHandler}
					>
						<View>
							<FontAwesomeIcon
								style={styles.actionIcon}
								color={'#C1D0E0'}
								icon={faTrashCan}
							/>
						</View>
					</Pressable>
				</View>
			</View>
		</ScaleDecorator>
	);
};

export default SingleTask;

const styles = StyleSheet.create({
	taskContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 12,
		paddingVertical: 8,
		marginVertical: 5,
		borderRadius: 7,
		backgroundColor: '#444180',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
	},
	taskTextContainer: {
		width: '80%',
	},
	taskText: {
		paddingVertical: 8,
		fontSize: 18,
		color: '#C1D0E0',
	},
	buttonsConteiner: {
		width: '20%',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	pressedItem: {
		opacity: 0.5,
		transform: [{ scale: 0.9 }],
	},
	actionIcon: {
		paddingHorizontal: 2,
	},
});
