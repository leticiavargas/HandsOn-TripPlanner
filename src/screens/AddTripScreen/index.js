import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';

const AddTripScreen = ({navigation: {goBack, navigate}}) => {
    
    const[tripName, setTripName] = useState();

    const handleSave = async () => {
        const newTrip = {
            id: new Date().getTime(),
            trip: tripName,
            price: 0,
            latitude: 0,
            longitude: 0
        }
        const tripsAS = await AsyncStorage.getItem('trips');
        console.log("tripsAS", tripsAS);
        let trips = [];
        if(tripsAS){
            trips = JSON.parse(tripsAS);
        }
        console.log("depois do if", trips);
        trips.push(newTrip);
        console.log("depois do push", trips);
        const saveTrip = await AsyncStorage.setItem('trips', JSON.stringify(trips));
        console.log("here");
        if(saveTrip) navigate('AddPointScreen', {id: newTrip.id});
        console.log(saveTrip);
    }
   
    return(
        <View style={styles.wrapper}>
            <View style={styles.header}>

            <TouchableOpacity onPress={() => goBack()} style={styles.backButton}>
                <Image source={require('../../../assets/arrow_left_white.png')} />
            </TouchableOpacity>
            </View>
            <TextInput style={styles.input} placeholder="Nome da Viagem" onChangeText={(value) => {setTripName(value)}} />
            <TouchableOpacity style={styles.saveButton} onPress={()=> handleSave()}>
                <Text>Salvar Nova Viagem</Text>
            </TouchableOpacity>
        </View>
    );
}

export default AddTripScreen;