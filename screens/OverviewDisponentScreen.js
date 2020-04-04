import React from 'react';
import {
	ScrollView,
	StyleSheet,
	Platform,
	AsyncStorage,
	Button,
	Alert,
	Picker,
	ButtonGroup,
	View,
	TouchableOpacity,
	Text,
	Modal
} from 'react-native';
import InputStyles from '../constants/InputStyles';
import GeneralStyles from '../constants/General';
import * as moment from 'moment';
import MapView from 'react-native-maps';
import { Marker, Circle } from 'react-native-maps';
import ModalDropdown from 'react-native-modal-dropdown';
import ApiVars from '../constants/ApiVars';
import GLOBAL from '../app/Global.js';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class OverviewDisponentScreen extends React.Component {

	constructor(props) {
		super(props);
		this.region = {
			latitude: 53.5662125,
			longitude: 10.0074288,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		};
		this.state = {
			drivers: [],
			hotels: [],
			driverPicker: [],
			orders: [],
			cancelOrderCode:null,
			find:false,
			findDriver:null,
			showModal:false,
			location: {
				latitude: 53.5662125,
				longitude: 10.0074288,
			},
			filterType: "active",
			rawOrders: [],
			tableHead: ['Date/Time\nCustomer', 'Start\n-> Dest.', 'Cost\nStatus', 'Driver'],
		    tableDriver:['Date/Time\nCustomer', 'Start\n-> Dest.', 'Cost\nStatus', 'Activate']

		},

		this._isMounted = false;
		this.getOngoing = this.getOngoing.bind(this);
		this.getAll = this.getAll.bind(this);
		this._putOrder = this._putOrder.bind(this);
		this._renderName = this.renderName.bind(this);
	}

	render() {

		return (

			<ScrollView style={styles.container, { backgroundColor: '#131313' }}>
				
			</ScrollView>

		);

	}
}

