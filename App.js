const { View } = require('react-native');
import { Provider } from 'react-redux';
import store from './app/store';

import Home from './app/components/Home';

const App = () => {
	return (
		<Provider store={store}>
			<View>
				<Home />
			</View>
		</Provider>
	);
};

export default App;
