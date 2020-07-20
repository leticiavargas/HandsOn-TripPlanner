import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const TripDetail = ({navigation: {goBack}}) => {
   
    const Trip = {
        name: "Viagem da Familia",
        price: 'R$ 3000',
        places: [
            {id: '1', name: 'Sitio Santa Cruz', description: "piscina", price: 100, lat: 0, long: 0},
            {id: '2', name: 'Povo Novo', description: "Churrascão", price: 200, lat: 0, long: 0}
        ]
    }

    const renderItem = ({item}) => {
        return(
                <View style={styles.item}>
                    <View style={styles.wrapperInfo}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text>{item.description}</Text>
                    </View>
                    <View style={styles.wrapperitemPrice}>
                        <Text style={styles.itemPrice}>{item.price}</Text>
                    </View>
                    
                </View>
        );
    }
   
    return(
        <View style={styles.wrapper}>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => goBack()} style={styles.backButton}>
                <Image source={require('../../../assets/arrow_left_white.png')} />
            </TouchableOpacity>
                <Text style={styles.tripName}>{Trip.name}</Text>
                <Text style={styles.tripPrice}> {Trip.price}</Text>
            </View>
            <FlatList 
                data={Trip.places}
                contentContainerStyle={{
                    padding: 16
                }}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default TripDetail;