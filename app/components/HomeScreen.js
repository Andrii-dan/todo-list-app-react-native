import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faListCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import { selectTasks, setIsAddModalVisible } from '../slices/tasksSlice';
import SingleTask from './SingleTask';

const HomeScreen = () => {
	const tasksList = useSelector(selectTasks);
	const dispatch = useDispatch();

	const openModalHandler = () => {
		dispatch(setIsAddModalVisible());
	};

	return (
		<View style={styles.container}>
			{tasksList.length === 0 ? (
				<View style={styles.messageContainer}>
					<Text style={styles.message}>
						There are no tasks yet, add one using the{' '}
						<FontAwesomeIcon color='#7F8994' size={20} icon={faPlus} /> button
						below
					</Text>
				</View>
			) : (
				<View style={styles.listContainer}>
					<View style={styles.listHeader}>
						<Text style={styles.listHeaderText}><FontAwesomeIcon color='#C1D0E0' size={19} icon={faListCheck} />TASKS</Text>
					</View>
					<FlatList
						keyExtractor={(item) => item.id}
						data={tasksList}
						renderItem={(itemData) => {
							return (
								<SingleTask task={itemData.item.task} id={itemData.item.id} />
							);
						}}
					/>
				</View>
			)}
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
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: 30,
		paddingHorizontal: 5,
	},
	listContainer: {
		flex: 6,
	},
	listHeader: {
		borderBottomWidth: 1,
		borderBottomColor: '#C1D0E0',
		paddingBottom: 10,
		marginBottom: 10,
	},
	listHeaderText: {
		fontWeight: '500',
		color: '#C1D0E0',
		fontSize: 22,
		paddingHorizontal: 4,
	},
	messageContainer: {
		flex: 6,
		justifyContent: 'center',
		alignItems: 'center',
	},
	message: {
		width: '75%',
		textAlign: 'center',
		fontSize: 24,
		lineHeight: 30,
		color: '#7F8994',
	},
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
