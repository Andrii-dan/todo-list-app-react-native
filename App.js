const { View, StyleSheet } = require('react-native');
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import store from './app/store';

import HomeScreen from './app/components/HomeScreen';
import AddTask from './app/components/AddTask';
import EditTask from './app/components/EditTask';

const App = () => {
	return (
		<Provider store={store}>
			<StatusBar style='light'/>
			<View style={styles.appContainer}>
				<HomeScreen />
				<AddTask />
				<EditTask />
			</View>
		</Provider>
	);
};

export default App;

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 60,
		paddingBottom: 20,
		paddingHorizontal: 18,
		backgroundColor: '#283747',
	},
});
