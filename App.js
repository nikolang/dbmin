import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View,YellowBox, AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GLOBAL from './app/Global.js';
import isSignedIn from './app/Auth.js';
import NavigationDB from './components/NavigationDB.js';

export default function App(props) {
	const [isLoadingComplete, setLoadingComplete] = useState(false);

	YellowBox.ignoreWarnings(['Require cycle:']);

	if (!isLoadingComplete && !props.skipLoadingScreen) {
		return (
			<AppLoading
				startAsync={loadResourcesAsync}
				onError={handleLoadingError}
				onFinish={() => handleFinishLoading(setLoadingComplete)}
			/>
		);
	} else {
		console.log("loaded");
		console.log("------------");
		console.log(isSignedIn());
		console.log("------------");
		console.log(GLOBAL.role);

		return (
			<View style={styles.container}>
				{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
				<NavigationDB />
			</View>
		);
		
	}
};


async function loadResourcesAsync() {
	await Promise.all([
		Asset.loadAsync([
			require('./assets/images/robot-dev.png'),
			require('./assets/images/robot-prod.png'),
		]),
		Font.loadAsync({
			'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
		}),
	]);
}

function handleLoadingError(error) {
	console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
	setLoadingComplete(true);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
	},
});
