import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section1() {
    return (
        <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flexDirection: "row" }}>
                <Image style={{ flex: 1, padding: 10, resizeMode: "cover", aspectRatio: 5 / 2 }}
                    source={require("../../assets/week3/room-6.jpg")} />
            </View>
        </View>

    );
}