import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const FormSubmitButton = ( title:any) => {
  /*const backgroundColor = submitting
    ? 'rgba(27,27,51,0.4)'
    : 'rgba(27,27,51,1)';*/

  return (
    <TouchableOpacity
      //nPress={!submitting ? onPress : null}
      //style={[styles.container, { backgroundColor }]}
    >
      <Text style={{ fontSize: 18, color: '#' }}>{title}</Text>
    </TouchableOpacity>
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