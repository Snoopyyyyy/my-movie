import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, SafeAreaView, ScrollView, View, StatusBar} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {Movie} from '../services/MovieService';
import HintInputText from "../components/HintInputText";
import GenderCarousel from "../components/GenderCarousel";


export default function HomeScreen({navigation}) {
    const [data, setData] = useState([]);
    const [genders, setGenders] = useState([]);
    const [nameFilter, setNameFilter] = useState('');
    const [loading, setLoading] = useState((<View/>));

    const getUpComing = () => {
        setLoading((<Text style={homeStyle.loading}>Loading ...</Text>))
        Movie.upComing(20).then((rawData) => {
            Movie.gender().then((rawGender) => {
                setLoading((<View/>));
                setGenders(rawGender.genres);
                setData(rawData);

            });
        });
    };
    const getGender = () => {
        return genders.filter(genre => {
            for (let movie of data) {
                if (movie.genre_ids[0] === genre.id && new RegExp(nameFilter.toUpperCase()).test(movie.title.toUpperCase())) {
                    return true;
                }
            }
            return false;
        });
    }

    useEffect(() => {
        getUpComing();
    }, []);

    return (
        <SafeAreaView style={homeStyle.container}>
            <StatusBar backgroundColor={"#032541"}/>

            <View style={homeStyle.title}>
                <HintInputText
                    placeholder={"Search a upcoming movie..."}
                    value={nameFilter}
                    setValue={setNameFilter}/>
            </View>

            {loading}

            <ScrollView>
                {getGender().map((gender, index) => {
                    return (
                        <View style={homeStyle.genderCarousel} key={index}>
                            <Text style={homeStyle.genderCarouselTitle}>{gender.name}</Text>
                            <View style={homeStyle.genderCarouselMain}>
                                <GenderCarousel
                                    gender={gender}
                                    movies={data.filter(movie => movie.genre_ids[0] === gender.id && new RegExp(nameFilter.toUpperCase()).test(movie.title.toUpperCase()))}/>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>

        </SafeAreaView>
    );
};

const homeStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#032541'
    },
    title: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#'
    },

    picker: {
        height: 52,
    },
    picker_border: {
        borderColor: '#CCC',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: '10%',
        marginVertical: '1%',
        fontSize: 16
    },
    genderCarousel: {
        height: 170,
        marginHorizontal: 24,
        marginBottom: 48,
        display: 'flex',
        flexDirection: 'column'
    },
    genderCarouselMain: {
        height: '100%',
    },
    genderCarouselTitle: {
        fontSize: 24,
        borderColor: '#2BBBD0',
        borderBottomWidth: 2,
        color: '#EEE'
    },
    loading: {
        color: '#EEE',
        fontSize: 24,
        textAlign: "center"
    }
});