import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import InputStyle from './style/InputStyle';
const FormInput = (props:any) => {
    const { placeholder, label, error } = props;
    return (
      <>
        <View
          style={InputStyle.form}
        >
          <TextInput style={{ fontWeight: 'bold',paddingTop:2,paddingBottom:2}}>{label}</TextInput>
          {error ? (
            <Text style={{ color: 'red', fontSize: 15 }}>{error}</Text>
          ) : null}
        </View>
        <TextInput {...props} placeholder={placeholder} style={InputStyle.input} />
      </>
    );
};
  
  
  export default FormInput;