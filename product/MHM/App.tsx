import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [currentValue, setCurrentValue] = useState<string>('');
  const [operator, setOperator] = useState<string>('');

  const handleOperatorPress = (op: string): void => {
    if (currentValue !== '') {
      const result = calculate(parseFloat(currentValue), parseFloat(displayValue), operator);
      setDisplayValue(result.toString());
      setCurrentValue(result.toString());
    } else {
      setCurrentValue(displayValue);
    }
    setOperator(op);
    setDisplayValue('0');
  };

  const handleNumberPress = (number: string): void => {
    if (displayValue === '0') {
      setDisplayValue(number);
    } else {
      setDisplayValue(displayValue + number);
    }
  };

  const handleEqualsPress = (): void => {
    if (currentValue !== '' && operator !== '') {
      const result = calculate(parseFloat(currentValue), parseFloat(displayValue), operator);
      setDisplayValue(result.toString());
      setCurrentValue('');
      setOperator('');
    }
  };

  const handleClearPress = (): void => {
    setDisplayValue('0');
    setCurrentValue('');
    setOperator('');
  };

  const calculate = (value1: number, value2: number, op: string): number => {
    switch (op) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
      default:
        return value2;
    }
  };



  return (
    <View style={styles.container}>
      <Text style={styles.display}>{displayValue}</Text>
      <View style={styles.buttons}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNumberPress('7')} style={styles.button}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberPress('8')} style={styles.button}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberPress('9')} style={styles.button}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleClearPress} style={styles.button}>
            <Text style={styles.buttonText}>R</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNumberPress('4')} style={styles.button}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberPress('5')} style={styles.button}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberPress('6')} style={styles.button}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperatorPress('+')} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNumberPress('1')} style={styles.button}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberPress('2')} style={styles.button}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberPress('3')} style={styles.button}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperatorPress('-')} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNumberPress('0')} style={styles.button}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEqualsPress} style={styles.button}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperatorPress('*')} style={styles.button}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperatorPress('/')} style={styles.button}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#161616',
  },
  display: {
    fontSize: 48,
    marginBottom: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: '#404040',
    borderRadius: 10,
    backgroundColor: '#202020',
    color: '#ffffff',
    textAlign: 'right',
    width: '100%',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  buttons: {
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    borderRadius: 10,
    backgroundColor: '#404040',
  },
  buttonText: {
    fontSize: 24,
    color: '#ffffff',
  },
});