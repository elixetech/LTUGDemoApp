'use strict';
 
var React = require('react-native');
var SearchBooks = require('./SearchBooks');
 
var {
    StyleSheet,
    NavigatorIOS,
    Component
   } = React;
 
class Search extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'Search Books',
            component: SearchBooks
        }}/>            
        );
    }
}
 
var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

module.exports = Search;