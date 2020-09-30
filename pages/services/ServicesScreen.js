import React, { useState, useEffect } from 'react';
import { AsyncStorage, StyleSheet, Dimensions, ScrollView, Image, View, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker, Overlay, PROVIDER_GOOGLE } from 'react-native-maps';
import SummaryNav from '../navbar/summarynav';

const ratio = Dimensions.get('window').width / 375;
// 375 × 853
const ServicesScreen = ({ navigation }) => {
    const [photo, setPhoto] = useState(null);
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(false);
    const [region, setRegion] = useState({
        latitude: -35.0574823,
        longitude: 150.6718037,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009
    });

    useEffect(() => {
        (async () => {
            const photoString = await AsyncStorage.getItem('photo');
            setPhoto(JSON.parse(photoString));
            const locationString = await AsyncStorage.getItem('location');
            const locationJSON = JSON.parse(locationString)
            setLocation({ latitude: locationJSON.latitude, longitude: locationJSON.longitude });
            setRegion({ ...region, latitude: locationJSON.latitude, longitude: locationJSON.longitude })
        })();
    }, []);

    return (
        <>
            <SummaryNav />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Image
                    source={require('../../assets/pageImages/home/servicespageA.png')}
                    style={{
                        width: Dimensions.get('window').width,
                        height: 746 * ratio,
                        flex: 1,
                    }}
                />
                <Image
                    source={require('../../assets/pageImages/home/servicespageB.png')}
                    style={{
                        width: Dimensions.get('window').width,
                        height: 683 * ratio,
                        flex: 1,
                    }}
                />
                <Image
                    source={require('../../assets/pageImages/home/servicespageC.png')}
                    style={{
                        width: Dimensions.get('window').width,
                        height: 363 * ratio,
                        flex: 1,
                    }}
                />
                <View style={styles.container}>
                    {
                        photo !== null ?
                            <Image source={{ uri: photo }} style={{ width: 200, height: 400 }} /> :
                            <>
                                <View style={styles.photocontainer}>
                                    <Text>Could not find image</Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('TakePhotoPage')}
                                    style={styles.bigbutton}>
                                    <Text style={{ color: 'ghostwhite', textAlign: 'center' }}>RETAKE PHOTO</Text>
                                </TouchableOpacity>
                            </>
                    }
                </View>
                <Image
                    source={require('../../assets/pageImages/home/servicespageD.png')}
                    style={{
                        width: Dimensions.get('window').width,
                        height: 111 * ratio,
                        flex: 1,
                    }}
                />
                {location && location.latitude ?
                    (
                        <View style={styles.mapcontainer}>
                            <MapView
                                zoomControlEnabled
                                maxZoomLevel={15}
                                style={{ width: Dimensions.get('window').width - 30, height: 300 * ratio, }}
                                provider="google"
                                googleMapsApiKey='AIzaSyDHIHypl6Oa6a6JjG_8nYs2uFU5X3egH_I'
                                showsUserLocation
                                initialRegion={region}
                                onRegionChangeComplete={region => setRegion(region)}
                            >
                                <Marker coordinate={location} />
                                <View>
                                    {/* <View style={{ height: Dimensions.get('window').width - 30, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'white' }}> */}
                                    <Text>{location.longitude}</Text>
                                    <Text>{location.latitude}</Text>
                                </View>
                            </MapView>
                        </View>) :
                    (
                        <>
                            <View style={styles.mapcontainer}>
                                <Text>Could not get location</Text>
                            </View>
                            <View style={styles.container}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('ShareLocation')}
                                    style={styles.bigbutton}>
                                    <Text style={{ color: 'ghostwhite', textAlign: 'center' }}>SHARE LOCATION</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )
                }
                <Image
                    source={require('../../assets/pageImages/home/servicespageE.png')}
                    style={{
                        width: Dimensions.get('window').width,
                        height: 87 * ratio,
                        flex: 1,
                    }}
                />
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('FinalStep')}
                        style={styles.bigbutton}>
                        <Text style={{ color: 'ghostwhite', textAlign: 'center' }}>MANAGE INFORMATION</Text>
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

export default ServicesScreen;