import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section6() {
    return (<View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ margin: 10 }}>
            <Text>
                Location
            </Text>
            <Text style={{ fontSize: 10 }}>
                218 austen mountain.consectetur
                aipiscing sed do eiusmod tempor incidiclint ut labore et
            </Text>
            <Image style={{ height: 125 }} source={require("../../assets/week3/map.jpg")} />
        </View>



    </View>
    );
}