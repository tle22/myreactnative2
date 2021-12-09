import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section7() {
    return (<View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ margin: 10 }}>
            <View>
                <Text>Room Type</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Image style={{ width: 75, height: 100, borderRadius: 20 }} source={require("../../assets/week3/room-8.jpg")} />
                <View style={{ padding: 5 }}>
                    <Text>Standard Twin Room</Text>

                    <Text style={{ marginTop: 30, color: "rouge" }}>$399.99</Text>
                    <Text style={{ fontSize: 10, color: 'teal' }}>Hurry Up! Thsi your last room</Text>
                </View>
            </View>
        </View>



    </View>
    );
}