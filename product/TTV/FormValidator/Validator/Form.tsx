import { useState } from 'react';
import React from 'react';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmitButton';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
  const userInfo = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [error, setError] = useState("");
  
const { fullname, email, password, confirmPassword } = userInfo;
  
  function Form() {
   

    return (
        <>
         
          <View>
            <FormInput
                  value={fullname}
                  //error={touched.fullname && errors.fullname}
                  //onChangeText={handleChange('fullname')}
                  //onBlur={handleBlur('fullname')}
                  label='Full Name'
                  placeholder='John Smith'
                />
                <FormInput
                  value={email}
                  //error={touched.email && errors.email}
                  //onChangeText={handleChange('email')}
                  //onBlur={handleBlur('email')}
                  autoCapitalize='none'
                  label='Email'
                  placeholder='example@email.com'
                />
                <FormInput
                  value={password}
                  //error={touched.password && errors.password}
                  //onChangeText={handleChange('password')}
                  //onBlur={handleBlur('password')}
                  autoCapitalize='none'
                  secureTextEntry
                  label='Password'
                  placeholder='********'
                />
                <FormSubmitButton
                //submitting={isSubmitting}
                //onPress={handleSubmit}
                title='Sign up'
              />
                
          </View>
          </>
    
    );
  }
  
  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
  
  export default Form;
  