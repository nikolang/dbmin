import React from "react";
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	Button,
	TextInput,
	View,
	AsyncStorage,
	Alert,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';
import GeneralStyles from '../constants/General';
import InputStyles from '../constants/InputStyles';
import MapView from 'react-native-maps';
import ModalDropdown from 'react-native-modal-dropdown';
import { Marker, Circle } from 'react-native-maps';
import { WebBrowser } from 'expo';
import ApiVars from '../constants/ApiVars';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';
import GLOBAL from '../app/Global.js';
import { MonoText } from "../components/StyledText";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import moment from "moment";


const geolib = require('geolib');

let homePlace = {
	description: "This Hotel",
	place_id: GLOBAL.placeId,
	structured_formatting: {main_text: GLOBAL.name},
	geometry: { location: { lat: GLOBAL.hotelLat, lng: GLOBAL.hotelLng } }
};
const airportPlace = {
	description: "Airport",
	place_id:"ChIJV6bPHGSIsUcRJFgnHDMmRnM",
	structured_formatting: {main_text: "Hamburg Airport (HAM)"},
	geometry: { location: { lat: 53.6326197, lng: 10.0062257 } }
};


export default class OrderScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
			drivers:[],
			disponents:[],
			start: null,
			startLocation: null,
			startPlaceid: null,
			startLat:null,
			startLng:null,
			destination: null,
			destinationLocation: null,
			destinationPlaceid: null,
			endLat:null,
			endLng:null,
			customer: null,
			driverId: null,
			phone: null,
			info: null,
			passengers: 1,
			kilometer: null,
			cost: null,
			date: null,
			mode: 'date',
			show: false,
			isDisabledSend:false
		};

		this._postOrder = this._postOrder.bind(this);
	}


	render() {
		return (
			<ScrollView keyboardShouldPersistTaps={"always"} style={{ backgroundColor: '#131313'}}>
			</ScrollView>
		);
	}

}
