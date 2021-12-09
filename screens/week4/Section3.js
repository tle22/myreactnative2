import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section3() {
    return (<View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: "#CC6666", justifyContent: "center", alignItems: "center", margin: 5 }}>
                <Text>9.5</Text>
            </View>
            <View style={{ padding: 5, margin: 5 }}>
                <Text style={{ color: '#CC6666' }}>
                    Excellent
                </Text>
                <Text style={{ fontSize: 10 }}>
                    See 801 reviews
                </Text>
            </View>
        </View>



    </View>
    );
}