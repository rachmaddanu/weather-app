import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    //styles.CardSecStyle.flexDirection = props.flexdir || 'row';
    return (
        <View style={styles.CardSecStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    CardSecStyle: {
        borderBottomWidth: 2,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
        borderColor: '#ddd'
    }
};

export default CardSection;