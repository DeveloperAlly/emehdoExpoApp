import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Dimensions, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import MapView, { Marker, Overlay, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Constants from 'expo-constants';

/** THIS WORKS ON ANDROID / MOBILE ONLY */
const MapViewAndroid = ({ myLocation, navigation }) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [x, setX] = useState(null)
    const [region, setRegion] = useState({
        latitude: -35.0574823,
        longitude: 150.6718037,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009
    });

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords);
            setRegion({ ...region, latitude: location.coords.latitude, longitude: location.coords.longitude })
        })();
    }, []);

    async function _storeData(location) {
        await AsyncStorage.setItem('location', JSON.stringify(location)).then(() => navigation.navigate('Step3'))
    }

    const renderMap = () => {
        return (
            <MapView
                zoomControlEnabled
                maxZoomLevel={9}
                style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height - 150,
                }}
                provider="google"
                googleMapsApiKey='AIzaSyDHIHypl6Oa6a6JjG_8nYs2uFU5X3egH_I'
                showsUserLocation
                initialRegion={region}
                onRegionChangeComplete={region => setRegion(region)}
            >
                <Marker coordinate={location} />
                {/* <Marker
                    draggable
                    coordinate={location}
                    onDragEnd={(e) => setLocation(e.nativeEvent.coordinate)}
                // coordinate={this.state.x}
                // onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
                /> */}
                <View style={{ height: Dimensions.get('window').height - 150, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Text>{location.longitude}</Text>
                    <Text>{location.latitude}</Text>
                </View>
            </MapView>
        )
    }

    const renderLoading = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> {'Loading...'} </Text>
            </View>
        )
    }

    return (
        <>
            {
                myLocation !== null && location !== null ? renderMap() : renderLoading()
            }
            <View style={styles.buttoncontainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.secondarybutton}>
                    <Text style={{ color: 'grey', textAlign: 'center' }}>BACK</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => _storeData(location)}
                    style={styles.mainbutton}>
                    <Text style={{ color: 'ghostwhite', textAlign: 'center' }}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </>
    )

}

const styles = StyleSheet.create({
    buttoncontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        textAlign: 'center',
        paddingBottom: 30,
        paddingTop: 30,
        zIndex: 50
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

export default MapViewAndroid;


/** THIS WORKS ON WEB ONLY */
// import React, { useState, useEffect } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import * as Location from 'expo-location';

// const MapContainer = () => {
//     const [location, setLocation] = useState(null);
//     const [errorMsg, setErrorMsg] = useState(null);

//     useEffect(() => {
//         (async () => {
//             let { status } = await Location.requestPermissionsAsync();
//             if (status !== 'granted') {
//                 setErrorMsg('Permission to access location was denied');
//             }

//             let location = await Location.getCurrentPositionAsync({});
//             setLocation(location);
//         })();
//     }, []);

//     const mapStyles = {
//         height: "100vh",
//         width: "100%"
//     };

//     const defaultCenter = {
//         lat: 41.3851, lng: 2.1734
//     }

//     return (
//         <LoadScript
//             googleMapsApiKey='AIzaSyDHIHypl6Oa6a6JjG_8nYs2uFU5X3egH_I'>
//             <GoogleMap
//                 mapContainerStyle={mapStyles}
//                 zoom={13}
//                 center={defaultCenter}
//             >
//                 <Marker position={{ lat: 41.39, lng: 2.162 }} />
//             </GoogleMap>
//         </LoadScript>
//     )
// }

// export default MapContainer;