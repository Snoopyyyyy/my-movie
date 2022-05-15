import React, {useState} from 'react';
import {View, TouchableHighlight, Text, StyleSheet, SafeAreaView, StatusBar} from "react-native";
import HintInputText from "../../components/HintInputText.js";
import {css} from '../../styles';
import Button from "../../components/Button";
import {Service} from '../../services/UserService';

const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LoginScreen = ({navigation}) => {
    let test = true;
    const [email, setEmail] = useState(test ? 'Admin@gmail.com' :'');
    const [password, setPassword] = useState(test ? 'Admin' : '');
    const [error, setError] = useState('');

    const login = () => {
        let res = Service.login(email, password);
        if (res.type === 'error') {
            setError(res.message);
        } else {
            setError('');
            navigation.navigate("Home");
        }
    };

    return (
        <SafeAreaView style={css.view}>
            <StatusBar />
            <HintInputText
                placeholder={"email"}
                value={email}
                setValue={setEmail}
                type={"email"}
                regex={emailPattern}/>
            <HintInputText
                placeholder={"password"}
                value={password}
                setValue={setPassword}
                type={"password"}/>

            <View style={{marginTop: 30}}>
                <Button
                    title={"Login"}
                    type={"primary"}
                    onPress={login}
                    disabled={!emailPattern.test(email) || !password.length}/>
                <Text style={loginScreenStyle.error}>{error}</Text>
                <Text style={loginScreenStyle.createAccountT} onPress={() => navigation.navigate('Register')}>Create an
                    account</Text>
            </View>
        </SafeAreaView>
    );
};

const loginScreenStyle = StyleSheet.create({
    createAccountT: {
        marginVertical: '1%',
        textAlignVertical: 'center',
        textAlign: 'center',
        textDecorationLine: "underline",
        width: "100%",
        fontSize: 16
    },
    error: {
        color: '#F44',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default LoginScreen;


