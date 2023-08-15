import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';

const FormSubmitButton = (onPress :any) => {
  
  return (
    
    <Button title="Add Data" onPress={onPress}/>

  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  
});

export default FormSubmitButton;