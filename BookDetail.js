'use strict';
 
var React = require('react-native');
 
var {
    StyleSheet,
    Text,
    View,
    Component,
    Image,
    ScrollView
   } = React;
 
class BookDetail extends Component {
    render() {
        var book = this.props.book;
        var imageURI = (typeof book.volumeInfo.imageLinks !== 'undefined') ? book.volumeInfo.imageLinks.thumbnail : '';
        var description = (typeof book.volumeInfo.description !== 'undefined') ? book.volumeInfo.description : '';
        return (
            <ScrollView 
                contentContainerStyle={styles.contentContainer}>
                <View style={styles.container}>
                    <Image style={styles.image} source={{uri: imageURI}} />
                    <Text style={styles.description}>{description}</Text>
                </View>
            </ScrollView>
        );
    }
}

//Styles
var styles = StyleSheet.create({
    container: {
        marginTop: 0,
        alignItems: 'center'
    },
    contentContainer: {
        padding: 10
    },
    image: {
        width: 107,
        height: 165,
        padding: 10
    },
    description: {
        padding: 10,
        fontSize: 15,
        color: '#656565'
    }
});
 
module.exports = BookDetail;