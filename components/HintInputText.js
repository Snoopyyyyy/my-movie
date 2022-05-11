import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from "react-native";
import textInput from "react-native-web/dist/exports/TextInput";

const types = {
    email: {
        keyboardType: "email-address",
        secureTextEntry: false
    },
    password: {
        keyboardType: "default",
        secureTextEntry: true,
    },
    default: {
        keyboardType: "default",
        secureTextEntry: false
    }
}

const HintInputText = ({value, setValue, placeholder, type = "default", regex}) => {
    const [isValid, setValid] = useState('textInput');

    const onChangeText = (text) => {
        setValue(text);
        if (text.length && regex !== undefined) {
            let valid = regex.test(text);
            setValid(valid ? 'textInputP' : 'textInputN');
        } else {
            setValid('textInput');
        }
    };

    return (
        <View>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={hintInputText[isValid]}
                keyboardType={types[type].keyboardType}
                secureTextEntry={types[type].secureTextEntry}
            />
        </View>
    );
};

const hintInputText = StyleSheet.create({
    textInput: {
        marginHorizontal: '10%',
        marginVertical: '1%',
        borderColor: '#CCC',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: '1%',
        height: 52,
        fontSize: 16,
        backgroundColor: '#FFF'
    },
    textInputN: {
        marginHorizontal: '10%',
        marginVertical: '1%',
        borderColor: '#F22',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: '1%',
        height: 52,
        fontSize: 16,
        backgroundColor: '#FFF'
    },
    textInputP: {
        marginHorizontal: '10%',
        marginVertical: '1%',
        borderColor: '#0A0',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: '1%',
        height: 52,
        fontSize: 16,
        backgroundColor: '#FFF'
    },
});

export default HintInputText;