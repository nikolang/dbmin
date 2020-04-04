import React, { useState, useEffect } from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	TextInput,
	View,
	Field,
	Button,
	AsyncStorage,
	KeyboardAvoidingView,
	Alert,
	Animated
} from 'react-native';
import ApiVars from '../constants/ApiVars';
import ModalDropdown from 'react-native-modal-dropdown';
import InputStyles from '../constants/InputStyles';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { WebBrowser } from 'expo';
import GLOBAL from '../app/Global.js';
import Icon from 'react-native-vector-icons/FontAwesome';
//import HomeForm from '../components/HomeForm';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class ChatScreen extends React.Component {
	constructor(props) {
		super(props);

		this.region = {
			latitude: 53.5662125,
			longitude: 10.0074288,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		};
		this.state = {
			chats: [],
			message: null,
			pressedButton: null,
			isDisabledStarted: false,
			isDisabledArrived: true,
			isDisabledDriving: true,
			isDisabledFinished: true,
			isDisabledCanceled: true,
			kilometer: null,
			time: null,
			complete: false,
			completeMessage: false,
			canceledMessage: false,
			canceled: false,
			trackMe: false,
			drivers: [],
			location: {
				latitude: 53.5662125,
				longitude: 10.0074288,
			},
		}
		this.reload = this.reload.bind(this);
		this._postMessage = this._postMessage.bind(this);
		this._putOrder = this._putOrder.bind(this);
		this.render = this.render.bind(this);
	}



	render() {

		return (
			<ScrollView>
			</ScrollView>
		);

	}

}