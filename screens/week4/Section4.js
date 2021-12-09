import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section4() {
    return (<View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ borderWidth: 0.5, margin: 15, padding: 5 }}>
            <Text>
                Hotel Description
            </Text>
            <Text style={{ fontSize: 10 }}>218Austen Mountain, consectetur adipiscing, sed eiusmod tempor
                incididunt ut labore et dolore</Text>
        </View>



    </View>
    );
}