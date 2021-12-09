import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section2 () {
    return (<View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ flexDirection: "column", alignItems: "center", backgroundColor: "snow", padding: 20, marginTop: -20, margin: 10, borderRadius: 10 }}>
            <Text style={{ fontSize: 20 }}>Hilton San Fransico</Text>
            <View style={{ flexDirection: "row" }} >
                <FontAwesome name="star" size={20} color="yellow" />
                <FontAwesome name="star" size={20} color="yellow" />
                <FontAwesome name="star" size={20} color="yellow" />
                <FontAwesome name="star" size={20} color="yellow" />
                <FontAwesome name="star-half" size={20} color="yellow" />
            </View>
            <Text style={{ fontSize: 10 }}>Facilities provide may range from a modest quality mattressin
                a small room to large suiles</Text>
        </View>



    </View>
    );
}