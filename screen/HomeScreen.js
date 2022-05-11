import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, SafeAreaView, ScrollView, View, Image} from "react-native";
import {Movie} from '../services/MovieService';

export default function HomeScreen({navigation}) {
    const [data, setData] = useState([]);

    const getUpComing = () => {
        Movie.upComing().then((datas) => {
            console.log(datas.dates, datas.results.length)
            setData(datas.results)

        })
    }

    useEffect(() => {
        getUpComing();
    }, []);


    return (
        <SafeAreaView style={homeStyle.container}>
            <ScrollView>
                {data.map((item, index) => {
                    console.log(item.title)
                    return (
                        <View style={homeStyle.card} key={index} onTouchEnd={() => console.warn('Click !')}>
                            <View style={homeStyle.cardImage}>
                                <Image
                                    style={{width: '100%', height: '100%', resizeMode: 'cover'}}
                                    resizeMode={"contain"}
                                    source={{uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path}}/>
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
        backgroundColor: '#032541'
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        height: 180,
        marginBottom: 0,
        margin: 20,
        borderRadius: 5,
        backgroundColor: '#2BBBD0',
        shadowRadius: 16,
        elevation: 24,
        shadowOffset: {
            width: 0,
            height: 12
        },
        shadowOpacity: 1 ,
        shadowColor: '#AAA'
    },
    cardImage: {
        width: '33%',
        height: '100%',
        borderTopStartRadius: 5,
        borderBottomStartRadius: 5,
        overflow: 'hidden'
    },
    cardContent: {

    },
    cardTitle: {

    },
    cardOverview: {

    }
});