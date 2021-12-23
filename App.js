import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/Welcome';
import Ex9 from './screens/week2/Ex9';
import Travel from './screens/week3/Travel';
import Health from './screens/week5/Health';
import HomeIconMenu from './components/week6/HomeIconMenu';
import Home from './screens/week6/Home';
import TourItem from './components/week6/TourItem';

export default function App() {
  return (
    <Home />
    // < TourItem />
  );
}


