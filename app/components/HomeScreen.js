import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

import { selectTasks } from '../slices/tasksSlice';
import Tasks from './Tasks';
import AddTaskButton from './AddTaskButton';

const HomeScreen = () => {
	const tasksList = useSelector(selectTasks);

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
				<Tasks />
			)}
			<AddTaskButton />
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
});
