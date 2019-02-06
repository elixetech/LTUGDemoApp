'use strict';

import React from 'react-native';
var BookList = require('./BookList');

const {
  StyleSheet,
  Text,
  View,
  Component,
  NavigatorIOS
} = React;

class Featured extends Component {
  render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'Featured Books',
            component: BookList
        }}/>            
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

module.exports = Featured;