import React from 'react';
import { Button, Text, TextInput, View, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmitButton';
import { useState } from 'react';
import { useEffect } from 'react';




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


 const Form = () => {
  
  const [data, setData] = useState<any>([]);
  const [searchText, setSearchText] = useState("");
  const userInfo = {
    fullname: '',
    email: '',
    password: '',
   
  };
  useEffect(() => {
    fetch('https://64d748602a017531bc1319dc.mockapi.io/api/users')
      .then(response => response.json())
      .then(json => {
        console.log(typeof json)
        console.log( json[0])
        setData(json);
      })
      .catch(error => console.error(error));
  }, []);
  
  const handlePost = (values:any) => {
   
   /*fetch('https://64d748602a017531bc1319dc.mockapi.io/api/users', {
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
  .catch(error => console.error(error));*/
  };


  const handleDelete = (itemId:any) => {
    fetch(`https://64d748602a017531bc1319dc.mockapi.io/api/users/${itemId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(json => {
        setData(data.filter((item: any) => item.id !== itemId));
      })
      .catch(error => console.error(error));
  };

const handleEdit = (item:any) => {

}

const handleSearch = () => {
  if (searchText === '') {
    fetch(`https://64d748602a017531bc1319dc.mockapi.io/api/users`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error(error));
  } else {
  const filteredData = data.filter((item: any) =>
    item.fullname.toLowerCase().includes(searchText.toLowerCase())
  );
  setData(filteredData);}
}

  return (
    <>
  <View style={styles.mainblock}>
  <Text style={styles.title}>REGISTRATION</Text>
  
  <View style = {styles.viewStyleForLine}></View>
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
             <Text style={styles.errorstyle}>{errors.fullname}</Text>
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
             <Text style={styles.errorstyle}>{errors.email}</Text>
           )}
                <FormInput
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  autoCapitalize='none'
                  secureTextEntry
                  label='Password'
                  placeholder='********'
                />
                 {touched.password && errors.password &&  (
             <Text style={styles.errorstyle}>{errors.password}</Text>
           ) }
              <View style = {styles.viewStyleForLine}></View>
              <Text style={styles.check}>By clicking Register, <Text style={styles.link}>you agree on our Privacy Policy.</Text> </Text>
             <FormSubmitButton onPress={handlePost(values)}/>
                
          </View>
          
        
      </View>
    )}
  </Formik>
  </View>  
  
  <TextInput
        style={styles.searchInput}
        onChangeText={text => setSearchText(text)}
        value={searchText}
        placeholder="Search..."
        onSubmitEditing={handleSearch}
      />
  <ScrollView>
                {data.map((item:any,index:any)=>{
                    return(
                        <View style={styles.item_course}  key={index}>
                            <View>
                                <Text style={styles.txt_name}>{index+1}. {item.id}</Text>
                                <Text style={styles.txt_item}>{item.fullname}</Text>
                                <Text style={styles.txt_item}>{item.email}</Text>
                                <Text style={styles.txt_item}>{item.password}</Text>
                                
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={()=>handleDelete(item.id)}
                                >
                                    <Text style={styles.txt_del}>Delete</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={()=>handleEdit(item)}
                                >
                                    <Text style={styles.txt_edit}>Edit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })}
  </ScrollView>
  </>
  )
 };

const styles = StyleSheet.create({
  mainblock:{
   minHeight: 470, 
    padding:11,
    margin: 5,
    borderRadius: 15, 
    backgroundColor: '#ebebeb',
    alignItems: "center",
    justifyContent: "center",
    },
  title:{
      fontSize:29,
      fontWeight:"bold",
      alignItems: "center",
      justifyContent: "center",
      color:' rgb(119, 119, 252)'
  },
  check:{
    margin:10
  },
  link:{
    color:'blue',

  },
  viewStyleForLine:{
    borderBottomColor: "black", 
    borderBottomWidth: StyleSheet.hairlineWidth, 
    alignSelf:'stretch',
    width: "97%",
    margin:6
  },
  errorstyle: {
    color:'red'
  },
  item_course : {
    padding :11,
    borderBottomWidth: 1,
    borderBottomColor : "#e2e2e2",
    flexDirection : "row",
    justifyContent:"space-between",
},
txt_name : {
    fontSize : 18,
    marginTop : 5,
    fontWeight : "bold"
},
txt_item : {
    fontSize : 14,
    marginTop : 5
},
txt_enabled : {
    fontSize : 14,
    marginTop : 5,
    color:"green",
    fontWeight : "bold"
},
txt_disabled : {
    fontSize : 14,
    marginTop : 5,
    color:"yellow",
    fontWeight : "bold"
},
txt_del:{
    fontSize : 14,
    marginTop : 5,
    color:"red",
    fontWeight : "bold"
},
txt_edit:{
    fontSize : 14,
    marginTop : 5,
    color:"blue",
    fontWeight : "bold"
},
searchInput: {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  marginBottom: 10,
  paddingHorizontal: 10,
  marginTop:15
},

});

export default Form;