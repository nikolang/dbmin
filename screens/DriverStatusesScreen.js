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
	Navigator,
	Modal,
	TouchableHighlight
} from 'react-native';
//import Geolocation from 'react-native-geolocation-service';
import ApiVars from '../constants/ApiVars';
import GeneralStyles from '../constants/General';
import * as moment from 'moment';
import InputStyles from '../constants/InputStyles';
import { WebBrowser } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
//import HomeForm from '../components/HomeForm';
import {  Table, TableWrapper, Row, Rows, Col, Cols, Cell} from 'react-native-table-component';
import GLOBAL from '../app/Global.js';



export default class DriverStatusesScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			drivers: [],
			modalVisible:false,
			tableHead: ['Picture', 'Name', 'ID', 'Phone', 'Status'],
			tableDriver: ['Date/Time\nCustomer', 'Start\n-> Dest.', 'Cost\nStatus', 'Order-Code'],
			orders:[]

		}

		this.load = this.load.bind(this);
	}

	render() {
		return (
			<ScrollView>
			</ScrollView>
		);
	}
}