import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import Navigation from './Navigation';

export default function App() {
  AntDesign.loadFont();
  Ionicons.loadFont();
  MaterialIcons.loadFont();
  MaterialCIcons.loadFont();
  Feather.loadFont();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}
