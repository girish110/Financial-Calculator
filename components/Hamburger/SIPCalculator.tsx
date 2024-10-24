// App.js

import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000); // Default values
  const [expectedReturn, setExpectedReturn] = useState(5);
  const [timePeriod, setTimePeriod] = useState(1);




  // const calculateSIP = () => {
  //   const monthlyRate = expectedReturn / 12 / 100;
  //   const months = timePeriod * 12;
  //   const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  //   const totalInvested = monthlyInvestment * months;
  //   const estimatedReturns = futureValue - totalInvested;

  //   return { totalInvested, estimatedReturns, futureValue };
  // };

  const calculateSIP = () => {
    const monthlyRate = expectedReturn === 0 ? 0 : expectedReturn / 12 / 100;
    const months = timePeriod * 12;
  
    // Future value calculation (avoid dividing by 0)
    const futureValue = monthlyRate === 0
      ? monthlyInvestment * months // No return scenario
      : monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    
    const totalInvested = monthlyInvestment * months;
    const estimatedReturns = futureValue - totalInvested;
  
    return { totalInvested, estimatedReturns, futureValue };
  };

  const result = calculateSIP();

  const data = [
    {
      name: 'Invested Amount',
      population: result.totalInvested,
      color: 'green',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: 'Returns',
      population: result.estimatedReturns,
      color: 'yellow',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
  ];

  const handleButton = () => {
    Linking.openURL('https://zerodha.com/').catch((err) => console.error('Failed to open URL:', err));
  };
  
  return (
    <ScrollView style={{height: 200}}>
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.title}>SIP Calculator</Text> */}

      {/* Monthly Investment Input */}
      <View style={styles.inputGroup}>
        <View style={styles.row}>
          <Text style={styles.input}>Monthly Investment </Text>
          <View style={styles.space}>
            {/* <Text style={styles.inputAmount}></Text> */}
            <Text style={styles.inputAmount}>₹   {monthlyInvestment}</Text>
          </View>
        </View>
        <Slider
          style={styles.slider}
          minimumValue={1000}
          maximumValue={100000}
          step={1000}
          value={monthlyInvestment}
          onValueChange={(value) => setMonthlyInvestment(value)}
          // minimumTrackTintColor="green"
          // maximumTrackTintColor="grey"
          // thumbTintColor="green"
        />
      </View>

      {/* Expected Return Rate Input */}
      <View style={styles.inputGroup}>
        <View style={styles.row}>
          <Text style={styles.input}>Expected Return Rate (p.a)</Text>
          <View style={styles.space}>
            <Text style={styles.inputAmount}>{expectedReturn.toFixed(1)}%</Text>
          </View>
        </View>

        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={30}
          step={0.5}
          value={expectedReturn}
          onValueChange={(value) => setExpectedReturn(value)}
        />
      </View>

      {/* Time Period Input */}
      <View style={styles.inputGroup}>
        <View style={styles.row}>
          <Text style={styles.input}>Time Period</Text>
          <View style={styles.space}>
            <Text style={styles.inputAmount}> {timePeriod}Yr</Text>
          </View>
        </View>

        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={60}
          step={1}
          value={timePeriod}
          onValueChange={(value) => setTimePeriod(value)}
        />
      </View>

      {/* Results */}
      <View style={styles.results}>
        <View style={styles.resultsContainer}>
          <View style={styles.resultsRow}>
            <Text style={{marginBottom: 6}}>Invested Amount </Text>
            <Text style={{marginBottom: 6}}>Estimated Returns </Text>
            <Text>Total Value </Text>

          </View>
          <View>
            <Text style={{marginBottom: 6, fontWeight: 'bold'}}> ₹ {result.totalInvested.toLocaleString('en-IN')}</Text>
            <Text style={{marginBottom: 6, fontWeight: 'bold'}}> ₹ {Math.floor(result.estimatedReturns).toLocaleString('en-IN')}</Text>
            <Text style={{fontWeight: 'bold'}}> ₹ {Math.floor(result.futureValue).toLocaleString('en-IN')}</Text>
          </View>
        </View>

        <View style={styles.piechart}>
          <PieChart
            data={data}
            width={screenWidth - 65}
            height={140}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              color: (opacity = 2) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"-10"}
            absolute={false}
          />
        </View>
      </View>

      {/* Invest Now Button */}
      <TouchableOpacity style={styles.button} onPress= {handleButton}>
        <Text style={styles.buttonText}>Invest Now</Text>
      </TouchableOpacity>
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#FFDBFD',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 0,
    marginBottom: 50,
  },
  inputGroup: {
    marginBottom: 20,
  },
  input: {
    fontSize: 15,
  },
  inputAmount: {
    fontSize: 18,
    // marginBottom: 3,
    backgroundColor: '#D4C4FF',
    color: 'purple',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
  },
  slider: {
    width: '100%',
    textShadowRadius: 60,
    height: 40,
    // backgroundColor: '#9E98FF',
    fontSize: 50,
  },
  results: {
    marginVertical: 5,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 0.2,
  },
  resultsRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  resultsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  space: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 0,
  },
  piechart: {
    alignItems: 'center',
    marginTop: 30,
    marginRight: 20,
  },
  button: {
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: 'purple', // background color of the button
    padding: 15, // padding to add space inside the button
    alignItems: 'center', // to center the text horizontally
    overflow: 'hidden', // ensures rounded corners apply correctly
  },
  buttonText: {
    color: 'white', // text color (important for visibility on the purple button)
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SIPCalculator;
