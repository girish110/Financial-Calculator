import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Slider from '@react-native-community/slider';

const SWPCalculator = () => {
  const [totalInvestment, setTotalInvestment] = useState(500000); // Default values
  const [withdrawalPerMonth, setWithdrawalPerMonth] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(6); // Annual percentage
  const [timePeriod, setTimePeriod] = useState(5); // in years
  const [finalPortfolioValue, setFinalPortfolioValue] = useState(0); // Final portfolio value

  const calculateSWP = () => {
    const monthlyRate = expectedReturn / 12 / 100; // Convert annual rate to monthly
    const months = timePeriod * 12; // Convert years to months
    let balance = totalInvestment;
    let totalWithdrawals = 0;
    let interestEarned = 0;

    for (let i = 0; i < months; i++) {
      const interest = balance * monthlyRate; // Monthly interest
      interestEarned += interest;
      balance += interest; // Add interest to the balance
      if (balance < withdrawalPerMonth) {
        break; // Stop if the balance is less than the withdrawal
      }
      balance -= withdrawalPerMonth; // Subtract the monthly withdrawal
      totalWithdrawals += withdrawalPerMonth;
    }

    const finalPortfolioValue = totalInvestment*expectedReturn - totalWithdrawals; // Add total withdrawals and interest earned
    return { totalInvestment, totalWithdrawals, finalPortfolioValue };
  };

  const handleButton = () => {
    Linking.openURL('https://zerodha.com/').catch((err) => console.error('Failed to open URL:', err));
  };
  // Update portfolio value whenever input values change
  useEffect(() => {
    const result = calculateSWP();
    setFinalPortfolioValue(result.finalPortfolioValue); // Update the final portfolio value
  }, [totalInvestment, withdrawalPerMonth, expectedReturn, timePeriod]);

  return (
    <ScrollView style={{ height: 200 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputGroup}>
          {/* Total Investment Slider */}
          <View style={styles.row}>
            <Text style={styles.input}>Total Investment</Text>
            <Text style={styles.inputAmount}>₹ {totalInvestment.toLocaleString('en-IN')}</Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={100000}
            maximumValue={10000000}
            step={10000}
            value={totalInvestment}
            onValueChange={(value) => setTotalInvestment(value)}
          />
        </View>

        {/* Withdrawal Per Month Slider */}
        <View style={styles.inputGroup}>
          <View style={styles.row}>
            <Text style={styles.input}>Withdrawal Per Month</Text>
            <Text style={styles.inputAmount}>₹ {withdrawalPerMonth.toLocaleString('en-IN')}</Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={1000}
            maximumValue={50000}
            step={1000}
            value={withdrawalPerMonth}
            onValueChange={(value) => setWithdrawalPerMonth(value)}
          />
        </View>

        {/* Expected Return Rate Slider */}
        <View style={styles.inputGroup}>
          <View style={styles.row}>
            <Text style={styles.input}>Expected Return Rate (p.a)</Text>
            <Text style={styles.inputAmount}>{expectedReturn.toFixed(1)}%</Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={20}
            step={0.5}
            value={expectedReturn}
            onValueChange={(value) => setExpectedReturn(value)}
          />
        </View>

        {/* Time Period Slider */}
        <View style={styles.inputGroup}>
          <View style={styles.row}>
            <Text style={styles.input}>Time Period (Years)</Text>
            <Text style={styles.inputAmount}>{timePeriod} Yr</Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={30}
            step={1}
            value={timePeriod}
            onValueChange={(value) => setTimePeriod(value)}
          />
        </View>

        {/* Results */}
        <View style={styles.results}>
          <View style={styles.resultsRow}>
            <Text style={styles.resultText}>Total Investment: ₹ {totalInvestment.toLocaleString('en-IN')}</Text>
            <Text style={styles.resultText}>Total monthly withdrawal: ₹ {withdrawalPerMonth.toLocaleString('en-IN')}</Text>
            <Text style={styles.resultText}>Final Portfolio Value: ₹ {finalPortfolioValue.toLocaleString('en-IN')}</Text>
          </View>
        </View>
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
  inputGroup: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    fontSize: 15,
  },
  inputAmount: {
    fontSize: 18,
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
    height: 40,
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
  resultText: {
    marginBottom: 6,
    fontWeight: 'bold',
    fontSize: 16,
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

export default SWPCalculator;
