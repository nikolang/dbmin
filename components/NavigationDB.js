import React, { PureComponent } from 'react';
import GLOBAL from '../app/Global.js';
import AppNavigatorLogin from '../navigation/AppNavigatorLogin';
import AppNavigatorDisponent from '../navigation/AppNavigatorDisponent';
import AppNavigatorDriver from '../navigation/AppNavigatorDriver';
import AppNavigatorHotel from '../navigation/AppNavigatorHotel';

export default class NavigationDB extends PureComponent {
    constructor(props) {
		super(props);
		this.state = {
            inc: 0,
            role: "login"
		}
    }
    inc() {
        this.setState({ role: GLOBAL.role })
        this.forceUpdate();
    }
    async componentDidMount() {

        setInterval(this.inc.bind(this), 2000);
    }
    async componentDidUpdate(){
        //console.log("componentDidUpdate");
    }
    render() {
        if(this.state.role=="disponent"){
            navigator = <AppNavigatorDisponent />
        }else if(this.state.role=="driver"){
            navigator = <AppNavigatorDriver />
        }else if(this.state.role=="hotel"){
            navigator = <AppNavigatorHotel />
        }else{
            navigator = <AppNavigatorLogin />
        }

        return navigator;
    }
}