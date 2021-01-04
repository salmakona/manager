import React, { Component } from 'react';
import {View,Text} from 'react-native';


const CardSection = (props) =>{

    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
};

const styles = {
    containerStyle:{
        borderBottomWidth: 1,
        borderBottomColor: "#47315a",
         padding:5,
         backgroundColor:'#fff',
         justifyContent:'flex-start',
         flexDirection:'row',
         position:'relative'
    }
}

export default CardSection;