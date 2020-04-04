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
	Text
} from 'react-native';
import InputStyles from '../constants/InputStyles';
import GeneralStyles from '../constants/General';
import * as moment from 'moment';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import ModalDropdown from 'react-native-modal-dropdown';
import ApiVars from '../constants/ApiVars';
import GLOBAL from '../app/Global.js';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class OverviewDriverScreen extends React.Component {

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
			isDisabledActivate:false,
			driverPicker: [],
			orders: [],
			location: {
				latitude: 53.5662125,
				longitude: 10.0074288,
			},
			filterType: "active",
			rawOrders: [],
			tableHead:['Date/Time\nCustomer', 'Start\n-> Dest.', 'Cost\nStatus', 'Activate']
		},
		this._isMounted = false;
		this.reload = this.reload.bind(this);
		this.getOfDriver = this.getOfDriver.bind(this);
		this._getCurrentOrdersOfDriver = this._getCurrentOrdersOfDriver.bind(this);
		this.setGlobalOrderCode = this.setGlobalOrderCode.bind(this);

	}

	render() {



	return (

					<ScrollView>
        			

                     </ScrollView>

                    );


}
}

