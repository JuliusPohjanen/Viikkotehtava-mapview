import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

export default function Settings(props) {
    const [selectedType, setSelectedType] = useState(props.mapType);

    return (
        <View style={styles.settingsArea}>
            <Text style={styles.heading}>Map type</Text>
            <Picker selectedValue={selectedType} onValueChange={(itemValue) => {
                setSelectedType(itemValue);
                props.setMapType(itemValue);
            }}>
                <Picker.Item label="Standard" value="standard" />
                <Picker.Item label="Satellite" value="satellite" />
                <Picker.Item label="Terrain" value="terrain" />
                </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    settingsArea: {
        marginTop: 32,
        marginLeft: 16
    },
    heading: {
        textTransform: 'uppercase',
    }
})