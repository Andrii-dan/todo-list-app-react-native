import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectTasks,
	setIsAddModalVisible,
} from '../slices/tasksSlice';
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
						<FontAwesomeIcon color='#ababab' size={20} icon={faPlus} />
						button below
					</Text>
				</View>
			) : (
				<View style={styles.listContainer}>
					<View style={styles.listHeader}>
						<Text style={styles.listHeaderText}>Tasks</Text>
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
						<FontAwesomeIcon style={styles.plusIcon} size={45} icon={faPlus} />
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
		paddingVertical: 30,
		paddingHorizontal: 15,
	},
	listContainer: {
		flex: 6,
	},
	listHeader: {
		borderBottomWidth: 1,
		borderBottomColor: '#ababab',
		marginBottom: 10,
	},
	listHeaderText: {
		fontSize: 30,
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
		color: '#ababab',
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	button: {
		width: 70,
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#7122f6',
		borderRadius: '50%',
	},
	plusIcon: {
		color: '#fff',
	},
	pressedItem: {
		opacity: 0.5,
		transform: [{ scale: 0.9 }],
	},
});
