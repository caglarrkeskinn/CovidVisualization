import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import stylesCatalog from './stylesCatalog';

const ItemRows = ({ item }) => {
    return (
        <View style={stylesCatalog.rows}>
            <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
                
                <View style={{ marginRight: 100, marginTop: 5 }}>
                    <Text style={stylesCatalog.countryName}>{item.Countries}</Text>
                </View>
                <View>
                    <Text style={stylesCatalog.totalCases}>{item.n}</Text>
                </View>
            </View>
        </View>
    );
}

export default ItemRows;