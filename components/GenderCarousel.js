import React from 'react';
import {Image, ScrollView, View, StyleSheet} from "react-native";

export default function GenderCarousel({navigation, gender, movies}) {
    return (
        <ScrollView horizontal={true} style={genderCarousel.container}>
            {movies.map((movie, index) => {
                console.log(index)
                return (
                    <Image
                        key={index}
                        style={genderCarousel.image}
                        resizeMode={"contain"}
                        source={{uri: 'https://image.tmdb.org/t/p/w500/' + movie.poster_path}}/>
                )
            })}
        </ScrollView>
    );
};

const genderCarousel = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    image: {
        width: 120,
        marginRight: 10,
        borderRadius: 4,
        overflow: "hidden",
        height: '100%',
        resizeMode: 'cover',
        backgroundColor: '#A44',
    }
});