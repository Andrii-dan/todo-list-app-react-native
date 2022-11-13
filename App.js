const { View, StyleSheet } = require('react-native');
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import store from './app/store';

import HomeScreen from './app/components/HomeScreen';
import AddTask from './app/components/AddTask';
import EditTask from './app/components/EditTask';

const App = () => {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Provider store={store}>
				<StatusBar style='light' />
				<View style={styles.appContainer}>
					<HomeScreen />
					<AddTask />
					<EditTask />
				</View>
			</Provider>
		</GestureHandlerRootView>
	);
};

export default App;

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 60,
		paddingBottom: 20,
		paddingHorizontal: 5,
		backgroundColor: '#283747',
	},
});
