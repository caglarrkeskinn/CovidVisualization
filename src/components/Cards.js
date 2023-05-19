import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import stylesCatalog from './stylesCatalog';
export default class Cards extends Component {
    render() {
        return (
            <View style={{
                ...stylesCatalog.container2,
                backgroundColor: this.props.bg
            }}>
                <View style={stylesCatalog.col}>
                    <Icon
                        name={this.props.icon}
                        size={30}
                        color={this.props.bg == "#D93B4A" ? "#fff" : "red"}
                    />
                </View>
                <Text style={stylesCatalog.title}>{this.props.title}</Text>
                <Text style={{
                    ...stylesCatalog.number,
                    color: this.props.bg == "#D93B4A" ? "#FFF" : "#000"
                }}>
                    {this.props.number}
                </Text>
            </View>
        )
    }
};

