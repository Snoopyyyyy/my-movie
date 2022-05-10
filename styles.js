import {StyleSheet} from "react-native";

export let css = StyleSheet.create({
    'buttonPrimary': {
        marginHorizontal: '10%',
        marginVertical: '2%',
        borderRadius: 7,
        height: 40,
        backgroundColor: '#0074D9',
        display: "flex",
        flexDirection: 'row',
    },
    'buttonPrimaryT': {
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#FFF',
        width: "100%",
        fontSize: 16
    },

    'buttonSecondary': {
        marginHorizontal: '10%',
        marginVertical: '2%',
        borderRadius: 7,
        height: 40,
        backgroundColor: '#6C757D',
        display: "flex",
        flexDirection: 'row',
    },
    'buttonSecondaryT': {
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#FFF',
        width: "100%",
        fontSize: 16
    },


    'view': {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
    }
});
