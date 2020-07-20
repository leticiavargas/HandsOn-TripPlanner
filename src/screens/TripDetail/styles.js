import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        flex:1
    },
    header: {
        height: 192,
        backgroundColor: "yellow"
    },
    backButton:{
        position: 'absolute',
        padding: 10
    },
    item: { 
        flexDirection: 'row',
        paddingBottom:16
    },
    wrapperInfo: {
        flex:1
    },
    tripName: {
        position: 'absolute',
        left:16,
        bottom:16
    },
    tripPrice:{
        position: 'absolute',
        bottom: 16,
        right: 16,
        textAlign: 'right',
        backgroundColor: '#24C6DC',
        padding: 4,
        color: '#FFF'
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 18
    },
    wrapperitemPrice: {
        alignItems: 'center',
        justifyContent:'center'
    },
    itemPrice: {
        textAlign: 'right',
        color: '#24C6DC',
        fontWeight: 'bold'
    },

});

export default styles;