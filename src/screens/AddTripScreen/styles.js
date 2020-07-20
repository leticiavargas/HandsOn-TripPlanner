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
    input:{
        backgroundColor:"#E5E5E5",
        padding: 20,
        marginBottom: 16
    },
    saveButton: {
        backgroundColor:"#E5E5E5",
        padding: 20,
        marginBottom: 16,
        alignItems: 'center'
    }

});

export default styles;