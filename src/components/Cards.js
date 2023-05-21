import React, { Component } from 'react';
import {
    View,
    Text,

} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import stylesCatalog from './stylesCatalog';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default class Cards extends Component {
    render() {
        return (
            <View style={{
                ...stylesCatalog.container2,
                backgroundColor: this.props.bg
            }}>
                <View style={stylesCatalog.col}>
                    
                </View>
                
                <Text style={stylesCatalog.title}>{this.props.title}</Text>
                <Text style={{...stylesCatalog.number }}>{this.props.number}</Text>
            </View>
        )
    }
};

