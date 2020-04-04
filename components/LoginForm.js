import {
	Image,
	ImageBackground,
	Alert,
	ScrollView,
	StyleSheet,
	Text,
	Button,
	TextInput,
	View,
	TouchableOpacity,
	AsyncStorage,
	KeyboardAvoidingView
} from 'react-native';
import React from 'react';
import InputStyles from '../constants/InputStyles';
import GeneralStyles from '../constants/General';


const styles = StyleSheet.create({
	...GeneralStyles
});


export class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: '', password: '' };
	}


	render() {
		return (
			<KeyboardAvoidingView style={styles.getStartedContainer} behavior="padding" enabled>

				<Text style={{ textAlign: 'left', color: '#ffffff' }}>User:</Text>
				<TextInput
					autoCompleteType='username'
					textContentType='username'
					style={InputStyles.textInput}
					onChangeText={(username) => this.setState({ username })}
					value={this.state.username}
				/>

			</KeyboardAvoidingView>
		);
	}
}
