import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';

import { selectTasks, setIsAddModalVisible } from '../slices/tasksSlice';

const AddTaskButton = () => {
	const tasksList = useSelector(selectTasks);
	const dispatch = useDispatch();

	const openModalHandler = () => {
		dispatch(setIsAddModalVisible());
	};

	return (
		<View style={styles.buttonContainer}>
			{tasksList.length > 0 && (
				<View style={styles.infoContainer}>
					<Text style={styles.infoText}>Tap here to add a new task</Text>
					<FontAwesomeIcon color={'#C1D0E0'} icon={faArrowRight} size={14} />
				</View>
			)}

			<Pressable
				style={({ pressed }) => pressed && styles.pressedItem}
				onPress={openModalHandler}
			>
				<View style={styles.button}>
					<FontAwesomeIcon
						style={styles.plusIcon}
						size={45}
						color={'#C1D0E0'}
						icon={faPlus}
					/>
				</View>
			</Pressable>
		</View>
	);
};

export default AddTaskButton;

const styles = StyleSheet.create({
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingHorizontal: 5,
		paddingVertical: 15,
	},
	infoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 30,
	},
	infoText: {
		color: '#C1D0E0',
		fontSize: 16,
		paddingRight: 10,
	},
	button: {
		width: 80,
		height: 80,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#444180',
		borderRadius: 50,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
	},
	pressedItem: {
		opacity: 0.5,
		transform: [{ scale: 0.9 }],
	},
});
