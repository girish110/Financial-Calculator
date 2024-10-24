import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Linking } from 'react-native';

export default function AboutApp() {
    return (

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

    )
}

const styles = StyleSheet.create({

    about: {
        // alignSelf: 'center',
        padding: 30,
    },
    text: {
        fontSize: 20,
        paddingTop: 20,
        margin: 'auto',
    }

}
);
