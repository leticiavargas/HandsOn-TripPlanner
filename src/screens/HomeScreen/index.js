import React, {useState} from 'react';
import {View, Text, ImageBackground, Image, TouchableWithoutFeedback} from 'react-native';
import assets from './assets';
import styles from './styles';

const HomeScreen = ({navigation: {navigate}}) => {   
  
  const [show, setShow] = useState(true);

  handleShow = () => {
    setShow(!show);
  }

    return(
        <View >
            <ImageBackground 
            source={assets.background} 
            imageStyle={{resizeMode: 'stretch'}}
            style={styles.background}
            >
              <View style={styles.wrapperLogoTripPlanner}>  
                <Image source={assets.tripplanner} />
              </View>  
              <View style={styles.wrapperLogoDevPleno}>  
                <Image source={assets.devpPleno} />
              </View> 
              {
                !show ?
                  <TouchableWithoutFeedback onPress={this.handleShow}>
                    <View style={styles.buttonBackground}>
                        <Text style={styles.buttonText}>Iniciar </Text>
                    </View>
                  </TouchableWithoutFeedback> 
                :
                  <TouchableWithoutFeedback onPress={() => navigate('Trips')}>
                  <View style={styles.buttonEmptyBackground}>
                      <Image source={assets.pin} style={styles.pin} />
                      <Text style={styles.buttonEmptyText}>Vamos planejar sua primeira viagem?</Text>
                      <Image source={assets.arrow} style={styles.arrow} />
                  </View>
                </TouchableWithoutFeedback> 
              }
              </ImageBackground>
        </View>
    );
};

export default HomeScreen;

