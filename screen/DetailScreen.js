import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from "react-native";
import {Movie} from "../services/MovieService";

export default function DetailScreen({route}) {
    const [details, setDetails] = useState({});
    const id = route.params;


    const getDetails = () => {
        Movie.details(id).then((rawDetail) => {
            console.log(rawDetail);
            setDetails(rawDetail);
        }).catch(err => console.error(err));
    };

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <SafeAreaView style={detailsStyle.container}>
            <Text>{details.title}</Text>
        </SafeAreaView>
    );
};

const detailsStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    }
});