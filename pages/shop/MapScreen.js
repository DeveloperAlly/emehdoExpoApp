import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Dimensions, Text, View, TouchableOpacity } from 'react-native';
// import MapView, { Marker, Overlay, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Constants from 'expo-constants';
import MapViewAndroid from './MapViewAndroid';

/** THIS WORKS ON ANDROID / MOBILE ONLY */
const MapScreen = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords);
            // setRegion({ ...region, latitude: location.coords.latitude, longitude: location.coords.longitude })
        })();
    }, []);


    return (
        <>
            {Platform.OS === 'ios'
                ? <MapViewAndroid myLocation={location} navigation={navigation} />
                : Platform.OS === 'android'
                    ? <MapViewAndroid myLocation={location} navigation={navigation} />
                    : <Text>WEB</Text>}
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

export default MapScreen;


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