import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

/** THIS WORKS ON ANDROID / MOBILE ONLY */
export default function MapScreen() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [region, setRegion] = useState({
        latitude: 51.5078788,
        longitude: -0.0877321,
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

    return (
        location ?
            <MapView
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
                googleMapsApiKey='AIzaSyDHIHypl6Oa6a6JjG_8nYs2uFU5X3egH_I'
                showsUserLocation
                region={region}
                onRegionChangeComplete={region => setRegion(region)}
            >
                <Marker coordinate={location || region} />
                {/* <Marker draggable
                coordinate={this.state.x}
                onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
            /> */}
            </MapView>
            :
            <Text> Loading... </Text>
    )

}


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