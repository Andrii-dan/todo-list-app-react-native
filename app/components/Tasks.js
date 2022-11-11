import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

import { selectTasks } from '../slices/tasksSlice';
import SingleTask from './SingleTask';

const Tasks = () => {
	const tasksList = useSelector(selectTasks);

	return (
		<View style={styles.listContainer}>
			<View style={styles.listHeader}>
				<Text style={styles.listHeaderText}>
					<FontAwesomeIcon color='#C1D0E0' size={19} icon={faListCheck} />
					TASKS
				</Text>
			</View>
			<FlatList
				keyExtractor={(item) => item.id}
				data={tasksList}
				renderItem={(itemData) => {
					return <SingleTask task={itemData.item.task} id={itemData.item.id} />;
				}}
			/>
		</View>
	);
};

export default Tasks;

const styles = StyleSheet.create({
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
});
