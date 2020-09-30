import React, { useState, useEffect } from 'react';
import { AsyncStorage, StyleSheet, Dimensions, ScrollView, Image, View, TouchableOpacity, Text } from 'react-native';
import EmehdoNav from '../../navbar/emehdonav';

const ratio = Dimensions.get('window').width / 375;
// 375 × 853
const Step3 = ({ navigation }) => {
    const [photo, setPhoto] = useState(null);
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        (async () => {
            const photoString = await AsyncStorage.getItem('photo');
            setPhoto(JSON.parse(photoString));
            const locationString = await AsyncStorage.getItem('location');
            setLocation(locationString);
        })();
    }, []);

    const renderMap = () => {
        return (
            <MapView
                zoomControlEnabled
                maxZoomLevel={13}
                style={styles.map}
                provider="google"
            // googleMapsApiKey='AIzaSyDHIHypl6Oa6a6JjG_8nYs2uFU5X3egH_I'
            // showsUserLocation
            >
                <Marker coordinate={location} />
                <View style={{ height: Dimensions.get('window').height - 150, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'white' }}>
                    <Text>{location.longitude}</Text>
                    <Text>{location.latitude}</Text>
                </View>
            </MapView>
        )
    }

    return (
        <>
            <EmehdoNav />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* <TouchableWithoutFeedback onPress={() => navigation.navigate('ConfirmDetails')}> */}
                <Image
                    source={require('../../../assets/pageImages/home/Step3a.png')}
                    style={{
                        width: Dimensions.get('window').width,
                        height: 604 * ratio,
                        flex: 1,
                    }}
                />
                <View style={styles.container}>
                    {
                        photo !== null ?
                            <Image source={{ uri: photo }} style={{ width: 200, height: 400 }} /> :
                            <View style={styles.photocontainer}>
                                <Text>Could not find image</Text>
                            </View>
                    }
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TakePhotoPage')}
                        style={styles.bigbutton}>
                        <Text style={{ color: 'ghostwhite', textAlign: 'center' }}>RETAKE PHOTO</Text>
                    </TouchableOpacity>
                </View>
                <Image
                    source={require('../../../assets/pageImages/home/Step3b.png')}
                    style={{
                        width: Dimensions.get('window').width,
                        height: 255 * ratio,
                        flex: 1,
                    }}
                />
                <View style={styles.container}>
                    {
                        location !== null ?
                            renderMap() :
                            <View style={styles.mapcontainer}>
                                <Text>Could not get location</Text>
                            </View>
                    }
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TakePhotoPage')}
                        style={styles.bigbutton}>
                        <Text style={{ color: 'ghostwhite', textAlign: 'center' }}>SHARE LOCATION</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.secondarybutton}>
                        <Text style={{ color: 'grey', textAlign: 'center' }}>BACK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('IsHardwareReady')}
                        style={styles.mainbutton}>
                        <Text style={{ color: 'ghostwhite', textAlign: 'center' }}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    photocontainer: {
        display: 'flex',
        marginBottom: 30,
        borderWidth: 1,
        borderColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: 230,
        height: 400
    },
    mapcontainer: {
        display: 'flex',
        marginBottom: 30,
        borderWidth: 1,
        borderColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width - 30,
        height: 300 * ratio,
    },
    buttoncontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        textAlign: 'center',
        paddingBottom: 30
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
    bigbutton: {
        height: 40,
        width: 300,
        borderRadius: 2,
        backgroundColor: "#0099F7",
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'lightgrey'
    },
});

export default Step3;