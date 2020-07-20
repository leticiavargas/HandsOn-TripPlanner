import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Trip from './Trip';
import styles from './styles';
import MapView from 'react-native-maps';

const TripScreen = ({navigation: {navigate}}) => {
    const listTrips = [
        {id:'1', name: 'Alasca', price: 'R$ 2000'},
        {id:'2', name: 'Uruguai', price: 'R$ 3000'},
    ];

    const renderItem = ({item}) => {
        return <Trip onPress={() => navigate('TripDetail')} name={item.name} price={item.price} />
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.map}>
                <MapView 
                    style={{flex: 1}}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                />
                <TouchableOpacity onPress={() => navigate('AddTrip')} style={{
                    position: 'absolute',
                    bottom: 20,
                    right:20,
                    padding: 10,
                    backgroundColor: 'gray'
                }}>
                    <Image source={require('../../../assets/plus_white.png')} />
                </TouchableOpacity>
            </View>
            <View>
                <FlatList 
                    data={listTrips}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal
                    pagingEnabled
                />
            
               
            </View>
        </View>
    );

}

export default TripScreen;