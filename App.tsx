import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import SIPCalculator from './components/Hambuger/SIPCalculator';
import SWPCalculator from './components/Hambuger/SWPCalculator';
import LumpsumCalculator from './components/Hambuger/LumpsumCalculator';
import AboutApp from './components/Hambuger/AboutApp';
//const screenWidth = Dimensions.get('window').width;


// Create Drawer Navigator
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
        <Text style={styles.drawerMenu}> X </Text>
      </TouchableOpacity>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
const HomeScreen = () => (

  <ScrollView style={{ flex: 2, height: 50, paddingBottom: 200 }}>
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.question}>What is a SIP Calculator?</Text>
        <Text style={styles.home}>
          A SIP calculator is a simple tool that allows individuals to get an idea of the returns on their mutual fund investments made through SIP. SIP investments in mutual funds have become one of the most popular investment options for millennials lately.
          These mutual fund sip calculators are designed to give potential investors an estimate on their mutual fund investments. However, the actual returns offered by a mutual fund scheme varies depending on various factors. The SIP calculator does not provide clarification for the exit load and expense ratio (if any).
          This calculator will calculate the wealth gain and expected returns for your monthly SIP investment. Indeed, you get a rough estimate on the maturity amount for any of your monthly SIP, based on a projected annual return rate.</Text>
      </View>

      <View>
        <Text style={styles.question}>What is a SWP Calculator?</Text>
        <Text style={styles.home}>
          The Systematic Withdrawal Plan or SWP offers investors a regular income and returns money that is left in the scheme.
          You may withdraw a fixed or a variable amount on a pre-decided date every month, quarter, or year. You may customise cash flows to withdraw, either a fixed amount or the capital gains on the investment.
          For example, you have 8,000 units in a mutual fund scheme. You have specified a set of instructions to the mutual fund house where you seek to withdraw Rs 5,000 every month through the Systematic Withdrawal Plan.
          On January 01, 2020, the NAV of the scheme was Rs 10. You would get an equivalent number of mutual fund units = Rs 5,000/10 = 500 units. The mutual fund house would redeem 500 units and give you an amount of Rs 5,000.
          You still have 7,500 units left in the mutual fund scheme. Now on February 01, 2020, the NAV of the mutual fund scheme increased to Rs 15. The equivalent units of the mutual fund scheme are Rs 5,000/ Rs 15 = 333 units.
          The mutual fund house would redeem 333 units and give you Rs 5,000 for the month of February. You are left with 7500 units – 333 units or 7167 units. You may continue the calculations in a similar manner for the following months.
        </Text>
      </View>

    </SafeAreaView>
  </ScrollView>
);


// Navigation setup
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Your Finance"
        drawerContent={(props) => <CustomDrawerContent {...props} />} >
        {/* <Drawer.Screen name="" component={HomeScreen} /> */}
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Finance Overview',  // Customize the top header label
            headerTitleStyle: {
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            drawerLabel: ({ focused }) => (
              <Text style={{ fontSize: 18, color: focused ? 'purple' : "grey", fontWeight: 'bold' }}>
                Home
              </Text>
            ),
          }}
        />
        <Drawer.Screen
          name="SIP Calculator"
          component={SIPCalculator}
          options={{
            title: 'SIP Calculator',  // Customize the top header label
            headerTitleStyle: {
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            drawerLabel: ({ focused }) => (
              <Text style={{ fontSize: 18, color: focused ? 'purple' : 'grey', fontWeight: 'bold' }}>
                SIP Calculator
              </Text>
            ),
          }} />

        <Drawer.Screen
          name="SWP Calculator"
          component={SWPCalculator}
          options={{
            title: 'SWP Calculator',  // Customize the top header label
            headerTitleStyle: {
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            drawerLabel: ({ focused }) => (
              <Text style={{ fontSize: 18, color: focused ? 'purple' : 'grey', fontWeight: 'bold' }}>
                SWP Calculator
              </Text>
            ),
          }} />

        <Drawer.Screen
          name="Lumpsum Calculator"
          component={LumpsumCalculator}
          options={{
            title: 'Lumpsum Calculator',  // Customize the top header label
            headerTitleStyle: {
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            drawerLabel: ({ focused }) => (
              <Text style={{ fontSize: 18, color: focused ? 'purple' : 'grey', fontWeight: 'bold' }}>
                Lumpsum Calculator
              </Text>
            ),
          }} />

        <Drawer.Screen
          name="About app"
          component={AboutApp}
          options={{
            title: 'About app',  // Customize the top header label
            headerTitleStyle: {
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            drawerLabel: ({ focused }) => (
              <Text style={{ fontSize: 18, color: focused ? 'purple' : 'grey', fontWeight: 'bold' }}>
                About app
              </Text>
            ),
          }} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDBFD',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: 'purple',
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  home: {
    fontSize: 17,
    alignContent: 'center',
    alignSelf: 'center',
    // padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  question: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 30,
    color: 'purple',
  },
  drawerContainer: {
    paddingTop: 10,
  },
  drawerMenu: {
    paddingLeft: 20,
    fontWeight: 'bold',
    fontSize: 22,
    paddingBottom: 20,
    color: 'black',
  },

});
