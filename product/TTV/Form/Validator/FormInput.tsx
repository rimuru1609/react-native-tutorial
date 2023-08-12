import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const FormInput = (props:any) => {
    const { placeholder, label, error } = props;
    return (
      <>
        <View
          style={styles.form}
        >
          <TextInput style={{ fontWeight: 'bold',paddingTop:2,paddingBottom:2}}>{label}</TextInput>
          {error ? (
            <Text style={{ color: 'red', fontSize: 15 }}>{error}</Text>
          ) : null}
        </View>
        <TextInput {...props} placeholder={placeholder} style={styles.input} />
      </>
    );
  };
  
  const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: '#1b1b33',
      height: 37,
      borderRadius: 10,
      fontSize: 16,
      paddingLeft: 10,
      marginBottom: 10,
  
    },
    form:{
      flexDirection:"row",

    }
  });
  
  export default FormInput;