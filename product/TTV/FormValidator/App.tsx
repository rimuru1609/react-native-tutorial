
import { useState } from 'react';
import React from 'react';
import type {PropsWithChildren} from 'react';
import FormInput from './Validator/FormInput';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




const userInfo = {
  fullname: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const [error, setError] = useState('');

  const { fullname, email, password, confirmPassword } = userInfo;

function App() {
 

  return (
    
      
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <Header />
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
              <FormInput
                value={confirmPassword}
                //error={touched.confirmPassword && errors.confirmPassword}
                //onChangeText={handleChange('confirmPassword')}
                //onBlur={handleBlur('confirmPassword')}
                autoCapitalize='none'
                secureTextEntry
                label='Confirm Password'
                placeholder='********'
              />
        </View>
      </ScrollView>
  
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

export default App;
