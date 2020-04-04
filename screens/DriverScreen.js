import React from 'react';
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
	Alert,
	Button,
	AsyncStorage,
	Navigator
} from 'react-native';
//import Geolocation from 'react-native-geolocation-service';
import ApiVars from '../constants/ApiVars';
import InputStyles from '../constants/InputStyles';
import { WebBrowser } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
//import HomeForm from '../components/HomeForm';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import GLOBAL from '../app/Global.js';


export default class DriverScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			status: GLOBAL.driverStatus,
			location: { latitude: 53.5648005, longitude: 10.0076207 },
			isDisabledBlocked: false,
			isDisabledAvailable: false,
			isDisabledPause: false,
			isDisabledEnd: false,

		}
		this._isMounted = false;

		this._updateStatus = this._updateStatus.bind(this);
		this.load = this.load.bind(this);
	}

	render() {

		return (
			<ScrollView>
			</ScrollView>
		);
	}
}