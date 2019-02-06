'use strict';

var React = require('react-native');
var Search = require('./Search');
var Featured = require('./Featured');
var AskAutoViewer = require('./AskAutoViewer');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  TabBarIOS
} = React;

class LTUGDemoApp extends Component{

  constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'featured'
        };
    }
 
    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    title='Featured'
                    selected={this.state.selectedTab === 'featured'}
                    icon={require('./images/star-25.png')} // .14 way of adding images
                    onPress={() => {
                        this.setState({
                            selectedTab: 'featured'
                        });
                    }}>
                    <Featured/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title='Search'
                    selected={this.state.selectedTab === 'search'}
                    icon={require('./images/search-25.png')} // .14 way of adding images
                    onPress={() => {
                        this.setState({
                            selectedTab: 'search'
                        });
                    }}>
                    <Search/>
                </TabBarIOS.Item>
                 <TabBarIOS.Item
                    title='AskAuto'
                    selected={this.state.selectedTab === 'askauto'}
                    icon={require('./images/car-25.png')}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'askauto'
                        });
                    }}>
                    <AskAutoViewer/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LTUGDemoApp', () => LTUGDemoApp);
