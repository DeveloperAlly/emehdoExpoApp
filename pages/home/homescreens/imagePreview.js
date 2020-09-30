import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage } from 'react-native';

const ImagePreview = ({ route, navigation }) => {
    const { photo } = route.params;

    // async function _storeData(photo) {
    //     // alert(photo)
    //     try {
    //         let photoString = JSON.stringify(photo);
    //         alert(photoString)
    //     } catch (error) {
    //         alert('error')
    //     }
    // }

    async function _storeData(photo) {
        await AsyncStorage.setItem('photo', JSON.stringify(photo)).then(alert('saved'))

    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={{ uri: photo }} style={{ width: 380, height: 550 }} />
            <View style={styles.buttoncontainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.secondarybutton}>
                    <Text style={{ color: 'grey', textAlign: 'center' }}>RETAKE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => _storeData(photo)}
                    style={styles.mainbutton}>
                    <Text style={{ color: 'ghostwhite', textAlign: 'center' }}>ATTACH</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttoncontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        textAlign: 'center',
        paddingBottom: 10,
        paddingTop: 30
    },
    secondarybutton: {
        height: 40,
        minWidth: 150,
        borderRadius: 2,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'lightgrey'
    },
    mainbutton: {
        height: 40,
        minWidth: 150,
        borderRadius: 2,
        backgroundColor: "#0099F7",
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'lightgrey'
    },
});

export default ImagePreview;