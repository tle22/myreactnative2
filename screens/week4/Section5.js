import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section5() {
    return (<View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 0.5, margin: 10, padding: 5 }}>
            <View style={{ flexDirection: "column" }}>
                <FontAwesome name="wifi" size={20} color="teal" />
                <Text>wifi</Text></View>
            <View style={{ flexDirection: "column" }}>
                <FontAwesome name='coffee' size={20} color="teal" />
                <Text>coffee</Text></View>
            <View style={{ flexDirection: "column" }}>
                <FontAwesome name='bath' size={20} color="teal" />
                <Text>bath</Text></View>
            <View style={{ flexDirection: "column" }}>
                <FontAwesome name='car' size={20} color="teal" />
                <Text>car</Text></View>
            <View style={{ flexDirection: "column" }}>
                <FontAwesome name='paw' size={20} color="teal" />
                <Text>paw</Text></View>
        </View>



    </View>
    );
}