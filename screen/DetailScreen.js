import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet, StatusBar, Image} from "react-native";
import {Movie} from "../services/MovieService";

export default function DetailScreen({route}) {
    const [details, setDetails] = useState({});
    const id = route.params;

    const getDetails = () => {
        Movie.details(id).then(setDetails).catch(err => console.error(err));
    };

    useEffect(getDetails, []);

    return (
        <SafeAreaView style={detailsStyle.container}>
            <StatusBar backgroundColor={"#032541"}/>
            <Image
                source={{uri: `https://image.tmdb.org/t/p/original${details.backdrop_path ?? details.poster_path}`}}
                resizeMode={details.backdrop_path ? "stretch" : "cover"}
                style={{width: '100%', height: '30%'}}/>
            <Text style={detailsStyle.title}>{details.title}</Text>
            <Text style={detailsStyle.tagline}>{details.tagline}</Text>
            <Text style={detailsStyle.overview}>{details.overview}</Text>

            <Text style={detailsStyle.date}>{details.release_date}</Text>
        </SafeAreaView>
    );
};

const detailsStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#032541'
    },
    title: {
        color: '#EEE',
        fontSize: 24,
        paddingTop: 10,
        paddingHorizontal: 20,
        textDecorationLine: "underline",
        backgroundColor: '#2BBBD0'
    },
    tagline: {
        color: '#EEE',
        fontSize: 18,
        paddingBottom: 10,
        paddingHorizontal: 20,
        backgroundColor: '#2BBBD0',
    },
    overview: {
        color: '#EEE',
        marginTop: 24,
        fontSize: 16,
        paddingHorizontal: 10,
    },
    date: {
        color: '#EEE',

    }
});