import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = (props) => {
    const { textStyle, buttonStyle } = styles;
    //buttonStyle.backgroundColor = props.bgcolor || '#841584';

    return (
    <TouchableOpacity style={buttonStyle} onPress={props.buttonPressed} >
        <Text style={textStyle}> {props.children} </Text>
    </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#009acd',
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        borderColor: '#fff'

    }
};

export default CustomButton;