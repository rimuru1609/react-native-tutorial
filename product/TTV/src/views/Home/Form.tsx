import React from 'react';
import { Button, Text, TextInput, View, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormInput from './FormInput';
import { useState } from 'react';
import { useEffect } from 'react';
import FormStyle from './style/FormStyle';


const validationSchema = Yup.object({
  fullname: Yup.string()
    .trim()
    .min(3, 'Invalid name!')
    .required('Name is required!'),
  email: Yup.string().email('Invalid email!').required('Email is required!'),
  password: Yup.string()
    .trim()
    .min(8, 'Password is too short!')
    .required('Password is required!').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,'dap ung'),
  
});

 const Form = ({ navigation }:any) => {
  const [data, setData] = useState<any>([]);
  const [searchText, setSearchText] = useState("");
  const userInfo = {
    fullname: '',
    email: '',
    password: '',
  };
  const handlePost = (values:any) => {
  fetch('https://64d748602a017531bc1319dc.mockapi.io/api/users', {
    method: 'POST',
    body: JSON.stringify(
      {
        fullname:values.fullname,
        email:values.email,
        password:values.password
      }
    ),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(response => response.json())
  .then(json => {
    setData([...data, json]);
  })
  .catch(error => console.error(error));
  };

  return (
    <>
  <View style={FormStyle.mainblock}>
  <Text style={FormStyle.title}>REGISTRATION</Text>
  
  <View style = {FormStyle.viewStyleForLine}></View>
  <Formik
    initialValues={userInfo}
    validationSchema={validationSchema}
    onSubmit={handlePost}
  >
    {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
      
      <View>
        
        <View>
            <FormInput
                  value={values.fullname}
                  
                  onChangeText={handleChange('fullname')}
                  onBlur={handleBlur('fullname')}
                  label='Full Name'
                  placeholder='John Smith'
                />
                {touched.fullname && errors.fullname && (
             <Text style={FormStyle.errorstyle} testID="dateError">{errors.fullname}</Text>
           ) }
                <FormInput
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  autoCapitalize='none'
                  label='Email'
                  placeholder='example@email.com'
                />
                 {touched.email && errors.email && (
             <Text style={FormStyle.errorstyle} testID="dateError">{errors.email}</Text>
           )}
                <FormInput
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  autoCapitalize='none'
                  secureTextEntry
                  label='Password'
                  placeholder='hanh021296@'
                />
                 {touched.password && errors.password &&  (
             <Text style={FormStyle.errorstyle} testID="dateError">{errors.password}</Text>
           ) }
              <View style = {FormStyle.viewStyleForLine}></View>
              <Text style={FormStyle.check}>By clicking Register, <Text style={FormStyle.link}>you agree on our Privacy Policy.</Text> </Text>
              <Button testID="addDataButton" title="Add Data" onPress={()=>handlePost(values)}/>
              
              
              <TouchableOpacity
            style={FormStyle.buttonStyle}
            onPress={() =>navigation.navigate('Search')}>
            <Text style={FormStyle.buttonText}> GO TO SEARCH BAR </Text>
          </TouchableOpacity>
      
          </View>
          
        
      </View>
    )}
  </Formik>
  </View>  
  
  </>
  )
 };



export default Form;