import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TouchableOpacity, Linking, ScrollView, Image } from 'react-native';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import SIPCalculator from './components/Hamburger/SIPCalculator';
import SWPCalculator from './components/Hamburger/SWPCalculator';
import LumpsumCalculator from './components/Hamburger/LumpsumCalculator';
import AboutApp from './components/Hamburger/AboutApp';
//const screenWidth = Dimensions.get('window').width;


// Create Drawer Navigator
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
        <Text style={styles.drawerClose}> X </Text>
      </TouchableOpacity>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
const HomeScreen = () => (

  <ScrollView style={{ flex: 2, height: 50, paddingBottom: 200 }}>
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.question}>➔   What is a SIP Calculator?</Text>
        <Text style={styles.home}>
          A SIP calculator is a simple tool that allows individuals to get an idea of the returns on their mutual fund investments made through SIP. SIP investments in mutual funds have become one of the most popular investment options for millennials lately.
          These mutual fund sip calculators are designed to give potential investors an estimate on their mutual fund investments. However, the actual returns offered by a mutual fund scheme varies depending on various factors. The SIP calculator does not provide clarification for the exit load and expense ratio (if any).
          This calculator will calculate the wealth gain and expected returns for your monthly SIP investment. Indeed, you get a rough estimate on the maturity amount for any of your monthly SIP, based on a projected annual return rate.</Text>
      </View>

      <View>
        <Text style={styles.question}>➔   What is a SWP Calculator?</Text>
        <Text style={styles.home}>
          The Systematic Withdrawal Plan or SWP offers investors a regular income and returns money that is left in the scheme.
          You may withdraw a fixed or a variable amount on a pre-decided date every month, quarter, or year. You may customise cash flows to withdraw, either a fixed amount or the capital gains on the investment.
          For example, you have 8,000 units in a mutual fund scheme. You have specified a set of instructions to the mutual fund house where you seek to withdraw Rs 5,000 every month through the Systematic Withdrawal Plan.
          On January 01, 2020, the NAV of the scheme was Rs 10. You would get an equivalent number of mutual fund units = Rs 5,000/10 = 500 units. The mutual fund house would redeem 500 units and give you an amount of Rs 5,000.
        </Text>
      </View>

      <View>
        <Text style={styles.question}>➔   What is a Lumpsum Calculator?</Text>
        <Text style={styles.home}>
        A lumpsum investment is when the depositor invests a significant sum of money on a particular mutual fund scheme. 
        SIP or Systematic Investment Plan, on the other hand, entails the investment of smaller amounts on a monthly basis.
        Both these type of mutual fund investment strategies have their fair share of benefits. 
        Lumpsum investments are particularly preferred by a majority of investors, as there are lesser variables involved and returns are generally on the higher side. 
        To find out the estimated returns on your lumpsum mutual fund investment, you may use a mutual fund lumpsum calculator available online.
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
            title: 'Your Finance',  // Customize the top header label
            headerTitleStyle: {
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            drawerLabel: ({ focused }) => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View>
                  {/* <Text style={{ fontSize: 22, fontWeight: 'bold', color: focused ? 'purple' : "grey" }}>
                    ⌂
                  </Text> */}
                  <Image
                    source={require('./assets/home_icon1.png')}  // Path to your PNG image
                    style={[styles.iconImage, { tintColor: focused ? '#56399C' : 'grey' }]}  // Optional tint color
                  />
                </View>
                <View>
                  <Text style={{ fontSize: 20, marginLeft: 15, color: focused ? 'purple' : "grey", fontWeight: 'bold' }}>
                    Home
                  </Text>
                </View>
              </View>
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
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View>
                  {/* <Text style={{ fontSize: 22, fontWeight: 'bold', color: focused ? 'purple' : "grey" }}>
                    ⌂
                  </Text> */}
                  <Image
                    source={require('./assets/SIP_icon2.png')}  // Path to your PNG image
                    style={[styles.iconImageSIP, { tintColor: focused ? '#56399C' : 'grey' }]}  // Optional tint color
                  />
                </View>
                <View>
                  <Text style={{ fontSize: 20, marginLeft: 18, color: focused ? 'purple' : 'grey', fontWeight: 'bold' }}>
                    SIP Calculator
                  </Text>
                </View>
              </View>
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
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View>
                  <Image
                    source={require('./assets/SWP_icon.png')}  // Path to your PNG image
                    style={[styles.iconImageSWP, { tintColor: focused ? '#56399C' : 'grey' }]}  // Optional tint color
                  />
                </View>
                <View>
              <Text style={{ fontSize: 20, marginLeft: 18,color: focused ? 'purple' : 'grey', fontWeight: 'bold' }}>
                SWP Calculator
              </Text>
              </View>
              </View>
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
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View>
                  {/* <Text style={{ fontSize: 22, fontWeight: 'bold', color: focused ? 'purple' : "grey" }}>
                    ⌂
                  </Text> */}
                  <Image
                    source={require('./assets/Lumpsum_icon2.png')}  // Path to your PNG image
                    style={[styles.iconImageLumpsum, { tintColor: focused ? '#56399C' : 'grey' }]}  // Optional tint color
                  />
                </View>
                <Text style={{ fontSize: 20, marginLeft: 18, color: focused ? 'purple' : 'grey', fontWeight: 'bold' }}>
                  Lumpsum Calculator
                </Text>
              </View>
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
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View>
                  <Image
                    source={require('./assets/aboutapp_icon.png')}  // Path to your PNG image
                    style={[styles.iconImageSIP, { tintColor: focused ? '#56399C' : 'grey' }]}  // Optional tint color
                  />
                </View>
                <View>
                  <Text style={{ fontSize: 20, marginLeft: 18, color: focused ? 'purple' : 'grey', fontWeight: 'bold' }}>
                    About app
                  </Text>
                </View>
              </View>
            ),
          }} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE0FA',
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
    // alignContent: 'center',
    // alignSelf: 'center',
    // padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: 'justify',          // Justifies text to align both left and right edges
    paddingHorizontal: 30,  
  },
  question: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 30,
    color: 'purple',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  drawerContainer: {
    paddingTop: 10,
  },
  drawerClose: {
    paddingLeft: 15,
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20,
    color: '#A8001A',
  },
  drawer_Container: {
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    // alignContent: 'center',
    // textAlign: 'auto'
  },
  homeIcon: {
    // fontSize: 25,
    width: 23,           // Adjust the width of the image
    height: 23,
    // alignItems: 'center',
    // alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  iconImage: {
    width: 21,           // Adjust the width of the image
    height: 21,          // Adjust the height of the image
    // resizeMode: 'contain',  // Ensures the image fits within the container
    marginRight: 10,     // Add space between the icon and text
    fontWeight: 'bold',
  },
  iconImageSIP: {
    fontWeight: 'bold',
    width: 23,           // Adjust the width of the image
    height: 23,
  },
  iconImageLumpsum: {
    width: 21,           // Adjust the width of the image
    height: 21,
  },
  iconImageSWP: {
    fontWeight: 'bold',
    width: 24,           // Adjust the width of the image
    height: 24,
  }
});
