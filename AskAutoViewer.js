"use strict";

import React from 'react-native';

//https://www.loanliner.com/LocationServices/Presenter/Main.aspx?DeviceToken=bdb0accc-92db-4844-bedf-77e23e8be387

var {
	StyleSheet,
	View,
	Text,
	Component,
	WebView
} = React;

class AskAutoViewer extends Component{
	constructor(props){
		super(props);
		this.state = {
			url: 'http://www.google.com',
			status: 'No Page Loaded',
			loading: true,
			scalesPageToFit: true
		};
	}

	render(){
		return (
			<WebView 
				style={styles.container}
				ref='webview'
				url={this.state.url}
				startInLoadingState={true}
				scalesPageToFit={this.state.scalesPageToFit} />
		)
	}

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

module.exports = AskAutoViewer;