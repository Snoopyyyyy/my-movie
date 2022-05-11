import React from 'react';
import {Image, ScrollView, View, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";


export default function GenderCarousel({gender, movies}) {
    const navigation = useNavigation();
    const seeMore = (id) => {
        navigation.navigate('Details', id);
    }

    return (
        <ScrollView horizontal={true} style={genderCarousel.container}>
            {movies.map((movie, index) => {
                return (
                    <View onTouchEnd={() => seeMore(movie.id)} key={index}>
                        <Image
                            style={genderCarousel.image}
                            resizeMode={"contain"}
                            source={{uri: 'https://image.tmdb.org/t/p/w500/' + movie.poster_path}}/>
                    </View>
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