const { View, StyleSheet } = require('react-native');
import { Provider } from 'react-redux';
import store from './app/store';

import HomeScreen from './app/components/HomeScreen';
import AddTask from './app/components/AddTask';
import EditTask from './app/components/EditTask';

const App = () => {
	return (
		<Provider store={store}>
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
	},
});
