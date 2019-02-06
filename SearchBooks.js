'use strict';
 
var React = require('react-native');
var SearchResults = require('./SearchResults');

var {
    StyleSheet,
    View,
    Text,
    Component,
    TextInput,
    TouchableHighlight,
    ActivityIndicatorIOS,
    ScrollView
    } = React;
 
class SearchBooks extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            bookAuthor: '',
            bookTitle: '',
            isLoading: false,
            errorMessage: ''
        };
    }
 
    render() {
        var spinner = this.state.isLoading ?
            ( <ActivityIndicatorIOS
                hidden='true'
                size='large'/> ) :
            ( <View/>);
        return (
            <ScrollView 
                contentContainerStyle={styles.contentContainer}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.fieldLabel}>Book Title:</Text>
                    <TextInput style={styles.searchInput} onChange={this.bookTitleInput.bind(this)}/>
                </View>
                <View>
                    <Text style={styles.fieldLabel}>Author:</Text>
                    <TextInput style={styles.searchInput} onChange={this.bookAuthorInput.bind(this)}/>
                </View>
                <TouchableHighlight style={styles.button}
                                    underlayColor='#95B9C7'
                                    onPress={this.searchBooks.bind(this)}>
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableHighlight>
                {spinner}
                <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
                <Text>Title: {this.state.bookTitle}</Text>
                <Text>Author: {this.state.bookAuthor}</Text>
            </View>
            </ScrollView>
        );
    }
 
    bookTitleInput(event) {
        this.setState({ bookTitle: event.nativeEvent.text });
    }
 
    bookAuthorInput(event) {
        this.setState({ bookAuthor: event.nativeEvent.text });
    }
 
    searchBooks() {
        this.fetchData();
    }
 
    fetchData() {
 
        this.setState({ isLoading: true });
 
        var baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
        if (this.state.bookAuthor !== '') {
            baseURL += encodeURIComponent('inauthor:' + this.state.bookAuthor);
        }
        if (this.state.bookTitle !== '') {
            baseURL += (this.state.bookAuthor === '') ? encodeURIComponent('intitle:' + this.state.bookTitle) : encodeURIComponent('+intitle:' + this.state.bookTitle);
        }
 
        console.log('URL: >>> ' + baseURL);
        
        // fetch new data
        fetch(baseURL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({ isLoading: false});
                if (responseData.items) {
 
                    this.props.navigator.push({
                        title: 'Search Results',
                        component: SearchResults,
                        passProps: {books: responseData.items}
                    });
                } else {
                    this.setState({ errorMessage: 'No results found'});
                }
            })
            .catch(error =>
                this.setState({
                    isLoading: false,
                    errorMessage: error
                }))
            .done();
    }
 
}

var styles = StyleSheet.create({
    container: {
        marginTop: 5,
        padding: 10
    },
    contentContainer: {
        padding: 0
    },
    searchInput: {
        height: 40,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        borderWidth: 1,
        flex: 1,
        borderRadius: 8,
        padding: 5
    },
    button: {
        height: 40,
        backgroundColor: '#488AC7',
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 15
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    instructions: {
        fontSize: 18,
        alignSelf: 'center',
        marginBottom: 15
    },
    fieldLabel: {
        fontSize: 15,
        marginTop: 15
    },
    errorMessage: {
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 15,
        color: 'red'
    }
});
 
module.exports = SearchBooks;