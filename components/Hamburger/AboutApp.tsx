import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Linking } from 'react-native';

export default function AboutApp() {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.about}>
            <Text style={styles.text}>
                This is a financial calcualtor app, which helps calculate
                investment goals and plannning for people. It provides various
                types of calculators like, 
                <Text style={{ fontWeight: 'bold' }}>
                    SIP calculator,SWP calculator and Lumpsum calculator. 
                </Text>

            </Text>
        </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    about: {
        // alignSelf: 'center',
        padding: 10,
    },
    text: {
        fontSize: 20,
        paddingTop: 20,
        margin: 'auto',
    },
    container: {
        flex: 1,
    padding: 30,
    backgroundColor: '#DED0DC',
    }

}
);
