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
import ModalDropdown from 'react-native-modal-dropdown';
import ApiVars from '../constants/ApiVars';
import GLOBAL from '../app/Global.js';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class OverviewHotelScreen extends React.Component {

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
			driverPicker: [],
			orders: [],
			disponents:[],
			showModal:false,
			cancelOrderCode:null,
			location: {
				latitude: 53.5662125,
				longitude: 10.0074288,
			},
			filterType: "active",
			rawOrders: [],
			rawHotelOngoingOrders: [],
			hotelOngoingOrders: [],
			tableHeadHotel: ['Date/Time\nCustomer', 'Start\n-> Dest.', 'Cost\nStatus', 'Order_Code'],
			tableHead: GLOBAL.role === "driver" ? ['Date/Time\nHotel', 'Start\n-> Dest.', 'Cost\nStatus', 'Activate'] : ['Date/Time\nHotel', 'Start\n-> Dest.', 'Cost\nStatus', 'Driver'],
		},
		this._isMounted = false;
		this.reload = this.reload.bind(this);
	}

	render() {

		return (
			<ScrollView>
			
			</ScrollView>
		);
	}
}

