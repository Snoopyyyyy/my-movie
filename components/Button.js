import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';

const Button = ({title, type, disabled = false, onPress}) => {
    const myCss = css[`${type}${disabled ? 'D' : ''}`];

    return (
        <TouchableHighlight onPress={onPress} style={myCss} underlayColor={activator[type]} disabled={disabled}>
            <Text style={css[type + 'T']}>{title}</Text>
        </TouchableHighlight>
    );
};

const activator = {
    primary: "#0A58CA",
    secondary: "#565E64",
};

const css = StyleSheet.create({
    primary: {
        marginHorizontal: '10%',
        marginVertical: '1%',
        borderRadius: 7,
        height: 40,
        backgroundColor: '#0074D9',
        display: "flex",
        flexDirection: 'row',
    },
    primaryD: {
        marginHorizontal: '10%',
        marginVertical: '1%',
        borderRadius: 7,
        height: 40,
        backgroundColor: '#62A1FE',
        display: "flex",
        flexDirection: 'row',
    },
    primaryT: {
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#FFF',
        width: "100%",
        fontSize: 16
    },

    secondary: {
        marginHorizontal: '10%',
        marginVertical: '1%',
        borderRadius: 7,
        height: 40,
        backgroundColor: '#6C757D',
        display: "flex",
        flexDirection: 'row',
    },
    secondaryD: {
        marginHorizontal: '10%',
        marginVertical: '1%',
        borderRadius: 7,
        height: 40,
        backgroundColor: '#A0A6AB',
        display: "flex",
        flexDirection: 'row',
    },
    secondaryT: {
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#FFF',
        width: "100%",
        fontSize: 16
    },
});

export default Button;