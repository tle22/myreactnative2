import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Signup from '../../components/week3/Signup';
import Section7 from '../week4/Seation7';
import Section1 from '../week4/Section1';
import Resort from '../week4/Resort';
import Section2 from '../week4/Section2';
import Section3 from '../week4/Section3';
import Section4 from '../week4/Section4';
import Section5 from '../week4/Section5';
import Section6 from '../week4/Section6';
import Section8 from '../week4/Section8';

export default function Travel() {
    return (        
        <View style={{ flex: 1, flexDirection: 'column'}}>
          
            <Resort/>
          {/* <Section8/> */}
          
        </View>
    );
}