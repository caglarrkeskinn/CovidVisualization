import React, { Component } from 'react';
import { View, Text } from 'react-native';
import stylesCatalog from './stylesCatalog';



export default class Cards extends Component {
    render() {
        return (
            <View style={{
                ...stylesCatalog.container2,
                backgroundColor: this.props.bg
            }}>
                <View style={stylesCatalog.col}>
                    
                </View>
                
                <Text style={stylesCatalog.cardsTitle}>{this.props.title}</Text>
                <Text style={{...stylesCatalog.number }}>{this.props.number}</Text>
            </View>
        )
    }
};

