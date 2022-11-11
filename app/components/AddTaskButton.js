import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useDispatch } from 'react-redux';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { setIsAddModalVisible } from '../slices/tasksSlice';

const AddTaskButton = () => {
	const dispatch = useDispatch();

	const openModalHandler = () => {
		dispatch(setIsAddModalVisible());
	};

	return (
		<View style={styles.buttonContainer}>
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
		paddingHorizontal: 5,
	},
	button: {
		width: 80,
		height: 80,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#444180',
		borderRadius: '50%',
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
