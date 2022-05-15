import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {css} from "../../styles";
import HintInputText from "../../components/HintInputText";
import Button from "../../components/Button";
import {Service} from '../../services/UserService';

const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');

    const register = () => {
        let res = Service.register(email, password);
        if (res.type === 'error') {
            setError(res.message);
        } else {
            setError('');
            navigation.navigate("Home");
        }
    }

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
            <HintInputText
                placeholder={"confirm password"}
                value={confirm}
                setValue={setConfirm}
                type={"password"}
                regex={new RegExp('^' + password)}/>

            <View style={{marginTop: 30}}>
                <Text style={registerScreenStyle.error}>{error}</Text>
                <Button
                    title={"Register"}
                    type={"primary"}
                    onPress={register}
                    disabled={!emailPattern.test(email) || !password.length || !confirm.length}/>
                <Button
                    title={"Cancel"}
                    type={"secondary"}
                    onPress={() => navigation.navigate('Login')}/>
            </View>
        </SafeAreaView>
    );
};


const registerScreenStyle = StyleSheet.create({
    error: {
        color: '#F44',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default RegisterScreen;