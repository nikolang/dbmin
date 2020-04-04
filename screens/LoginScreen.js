import React from 'react';
import {
	Image,
	ImageBackground,
	Alert,
	ScrollView,
	StyleSheet,
	Text,
	Button,
	TextInput,
	TouchableOpacity,
	View,
	AsyncStorage
} from 'react-native';

import GeneralStyles from '../constants/General';
import InputStyles from '../constants/InputStyles';
import ApiVars from '../constants/ApiVars';
import { isSignedIn } from "../app/Auth";
import MapView from 'react-native-maps';
import { WebBrowser } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MonoText } from '../components/StyledText';
import { LoginForm } from '../components/LoginForm';
import { Base64 } from 'js-base64';
import GLOBAL from '../app/Global.js';
import NavigationDB from '../components/NavigationDB.js';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';


export default class LoginScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: '', username: '', password: '' };
	}


	render() {
		
		return (
			<View style={styles.container}>
				
			</View>
		);
	}

}

const styles = StyleSheet.create({
	...GeneralStyles
});
