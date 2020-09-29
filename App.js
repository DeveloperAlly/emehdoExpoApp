import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, View, ImageBackground } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './pages/home/homePage';
import ServicesPage from './pages/services/servicesPage'
import PaymentsPage from './pages/payments/PaymentsPage'
import HelpPage from './pages/help/HelpPage';
import ShopPage from './pages/shop/ShopPage';
import MapPage from './pages/payments/Map';

//Home screens
import ConfirmDetailsPage from './pages/home/homescreens/confirmDetailsPage';
import IsHardwareReadyPage from './pages/home/homescreens/isHardwareReadyPage';
import VerifyConnectionPage from './pages/home/homescreens/verifyConnectionPage';
import TakePhotoPage from './pages/home/homescreens/takePhotoPage';
import ShareLocationPage from './pages/home/homescreens/shareLocationPage';
import ImagePreview from './pages/home/homescreens/imagePreview';

const NestedStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const TabsNavigation = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          backBehavior='none'
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                style={{ width: 24, height: 24 }}
                source={require('./assets/icons/ic_bottom_nav_explore_default.png')}
              />
            ),
            tabBarLabel: 'Home',
            activeTintColor: '#101010'
          }}
        />
        <Tab.Screen
          name="Services"
          component={ServicesNavigator}
          backBehavior='none'
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                style={{ width: 24, height: 24 }}
                source={require('./assets/icons/ic_bottom_nav_services_default.png')}
              />
            ),
            tabBarLabel: 'Services',
          }}
        />
        <Tab.Screen
          name="Payments"
          component={MapPage}
          backBehavior='none'
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                style={{ width: 24, height: 24 }}
                source={require('./assets/icons/ic_bottom_nav_payments_default.png')}
              />
            ),
            tabBarLabel: 'Payments',
          }}
        />
        <Tab.Screen
          name="Get Help"
          component={HelpPage}
          backBehavior='none'
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                style={{ width: 24, height: 24 }}
                source={require('./assets/icons/ic_bottom_nav_get_help_default.png')}
              />
            ),
            tabBarLabel: 'Get Help',
          }}
        />
        <Tab.Screen
          name="Shop"
          component={ShopPage}
          backBehavior='none'
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                style={{ width: 24, height: 24 }}
                source={require('./assets/icons/ic_bottom_nav_shop_default.png')}
              />
            ),
            tabBarLabel: 'Shop',
          }}
        />
      </Tab.Navigator>
    )
  }

  const HomeNavigator = () => {
    return (
      <NestedStack.Navigator>
        <NestedStack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <NestedStack.Screen name="ConfirmDetails" component={ConfirmDetailsPage} options={{ headerShown: false }} />
        <NestedStack.Screen name="IsHardwareReady" component={IsHardwareReadyPage} options={{ headerShown: false }} />
        <NestedStack.Screen name="VerifyConnection" component={VerifyConnectionPage} options={{ headerShown: false }} />
        <NestedStack.Screen name="TakePhoto" component={TakePhotoPage} options={{ headerShown: false }} />
        <NestedStack.Screen name="ImagePreview" component={ImagePreview} options={{ headerShown: false }} />
        <NestedStack.Screen name="ShareLocation" component={ShareLocationPage} options={{ headerShown: false }} />
      </NestedStack.Navigator>
    )
  }

  const ServicesNavigator = () => {
    return (
      <NestedStack.Navigator>
        <NestedStack.Screen name="Services" component={ServicesPage} options={{ headerShown: false }} />
      </NestedStack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

    // < Routes />
    // <HomePage />
    // <View style={styles.container}>
    // <ImageBackground
    //   style={{ height: '100%', width: '100%' }}
    //   source={require('./assets/pageImages/screen1.png')}
    // >
    // <View style={styles.container}>
    // {/* <Text>Open up App.js to start working on your app!</Text> */ }
    // {/* <StatusBar style="auto" /> */ }
    // </View>
    // </ImageBackground>
    // </View>