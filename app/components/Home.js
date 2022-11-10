import { SafeAreaView, StyleSheet, Text } from 'react-native';
import React from 'react';
import AddTask from './AddTask';

const Home = () => {
	return (
		<SafeAreaView>
			<Text>Home</Text>
			<AddTask />
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({});
