import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    background:{
      width: '100%', 
      height: '100%',
      alignItems: 'stretch',
      justifyContent:'space-between'
    },
    wrapperLogoTripPlanner: {
      flex:1,
      alignItems:'center',
      justifyContent: 'center'
    },
    wrapperLogoDevPleno: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingBottom: 32
    },
    buttonBackground: {
      backgroundColor: 'white', 
      paddingBottom: 16, 
      paddingTop:16
    },
    buttonText:{
      textAlign: 'center',
      fontSize: 18
    },
    pin:{
        marginTop: 16,
        marginBottom: 16
    },
    arrow:{
        marginTop:16
    },
    buttonEmptyBackground: {
        backgroundColor: 'white', 
        paddingBottom: 16, 
        paddingTop: 16,
        alignItems: 'center'
      },
      buttonEmptyText:{
        textAlign: 'center',
        fontSize: 18,
        width: 220
      }
  });