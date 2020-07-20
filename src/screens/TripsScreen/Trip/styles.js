import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    wrapperTrip: {
        backgroundColor: 'white',
        paddingTop:16,
        paddingLeft:16,
        paddingRight:16
    },
    image: {
        backgroundColor:'pink',
        height: 144,
        marginBottom: 6
    },
    price: {
        backgroundColor: '#24C6DC',
        position: 'absolute',
        top: 144 - 16,
        right:32,
        textAlign: 'right',
        padding: 4,
        color: 'white'
    }
});

export default styles;