import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import DraggableFlatList from 'react-native-draggable-flatlist';

import { selectTasks, setTasksList } from '../slices/tasksSlice';
import SingleTask from './SingleTask';

const Tasks = () => {
	const tasksList = useSelector(selectTasks);
	const dispatch = useDispatch();

	return (
		<View style={styles.listContainer}>
			<View style={styles.listHeader}>
				<FontAwesomeIcon color='#C1D0E0' size={19} icon={faListCheck} />
				<Text style={styles.listHeaderText}>TASKS</Text>
			</View>
			<DraggableFlatList
				data={tasksList}
				onDragEnd={({ data }) => dispatch(setTasksList(data))}
				keyExtractor={(item) => item.id}
				style={styles.draggableList}
				renderItem={({ item, drag, isActive }) => {
					return (
						<SingleTask
							task={item.task}
							id={item.id}
							drag={drag}
							isActive={isActive}
						/>
					);
				}}
			/>
		</View>
	);
};

export default Tasks;

const styles = StyleSheet.create({
	listContainer: {
		width: '100%',
		flex: 6,
	},
	listHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#C1D0E0',
		marginHorizontal: 21,
		paddingBottom: 10,
		marginBottom: 10,
	},
	listHeaderText: {
		fontWeight: '500',
		color: '#C1D0E0',
		fontSize: 22,
		paddingHorizontal: 4,
	},
	draggableList: {
		height: '95%',
		paddingHorizontal: 20,
	},
});
