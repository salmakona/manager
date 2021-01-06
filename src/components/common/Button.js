/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({ onPress, children }) =>{
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{ children }</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle:{
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        padding:10,
    },
    buttonStyle:{
        flex:1,
        alignSelf: 'stretch',
        backgroundColor: '#ffffff',
        borderRadious:5,
        borderWidth:1,
        borderColor: '#007aff',
        margin:5,
    }
}

export { Button };