import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section8() {
    return (<View style={{ flex: 1, flexDirection: "column" }}>

        <View style={{ margin: 10, flexDirection: "row", justifyContent: "space-between", borderWidth: 0.5, padding: 5 }}>
            <View>
                <Text style={{ fontSize: 8 }}>
                    Price
                </Text>
                <Text style={{ color: '#CC6666' }}>
                    399.99
                </Text>
                <Text style={{ fontSize: 8 }}>
                    AVG/NIGHT
                </Text>
            </View>
            <View >
                <Button title='Book Now' />
            </View>
        </View>


    </View>
    );
}