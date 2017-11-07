import { Text, View } from 'react-native';
import React from 'react';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (   
        <View style={viewStyle}>
            <Text style={textStyle}>{props.title}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600',
        padding: 10
    },
    viewStyle: {
        backgroundColor: '#009acd',
        elevation: 5
    }
};

export default Header;