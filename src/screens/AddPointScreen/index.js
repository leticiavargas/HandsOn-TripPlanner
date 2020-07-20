import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import MapView, {Marker} from 'react-native-maps';

const AddPointScreen = ({navigation: {goBack}}) => {
   
    const[latitude, setLatitude] = useState(37.78825);
    const[longitude,setLongitude] = useState(-122.4324);
    const[pointName, setPointName] = useState();
    const[description, setDescription] = useState();
    const[price, setPrice] = useState();
   
    return(
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <MapView style={{flex: 1}}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                >
                    <Marker 
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324
                        }}
                        onDragEnd={
                            (evt) => {
                                setLatitude(evt.nativeEvent.coordinate.latitude);
                                setLongitude(evt.nativeEvent.coordinate.longitude);
                                
                            }
                        }
                        draggable 
                    />

                </MapView>


            <TouchableOpacity onPress={() => goBack()} style={styles.backButton}>
                <Image source={require('../../../assets/arrow_left_white.png')} />
            </TouchableOpacity>
            </View>
            <TextInput style={styles.input} placeholder="Nome do ponto" onChangeText={(value) => {setPointName(value)}} />
            <TextInput style={styles.input} placeholder="Descrição" onChangeText={(value) => {setDescription(value)}} />
            <TextInput style={styles.input} placeholder="Preço" onChangeText={(value) => {setPrice(value)}} />
            <TouchableOpacity style={styles.saveButton}>
                <Text>Salvar Ponto</Text>
            </TouchableOpacity>
            <Text>Latitude {latitude}</Text>
            <Text>Longitude {longitude}</Text>
            <Text>{pointName}</Text>
            <Text>{description}</Text>
            <Text>{price}</Text>
        </View>
    );
}

export default AddPointScreen;