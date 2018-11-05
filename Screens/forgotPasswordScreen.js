import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, TouchableHighlight, } from 'react-native'
import { Button } from 'react-native';
import firebase from './firebase'




class forgotPasswordScreen extends React.Component{
    state = {
        email:''
    }

handleTheEmail = (inputText) => { this.setState({ email: inputText })};
    
    render(){
        navigateTo = ()=>{
            // alert('pressed')
            this.props.navigation.push('LoginScreen')
        }

        // Retrieve password function //
        retrievePassword = () =>
        {   
            var auth = firebase.auth();
            var emailAddress = this.state.email;

            if(emailAddress === ''){alert('Please fill empty fields')}
            else{
                auth.sendPasswordResetEmail(emailAddress).then( ()=> {
                    this.props.navigation.push('LoginScreen')
                    alert('Email sent, follow instructions on the email');
                }).catch(function(error) {
                alert(error.code)
                })
            }
        }
        return (
            <View>   
            <View>
                <Text style ={forgorPasswordStyles.forgorPasswordText} >Lets retrieve your password</Text>
                <TextInput style = {forgorPasswordStyles.forgotPasswordInput}
                    placeholder = "Enter email here"
                    autoCapitalize = 'none'
                    placeholderTextColor = 'gray' 
                    onChangeText ={this.handleTheEmail}
                    >
                </TextInput>
                <TouchableOpacity style={forgorPasswordStyles.forgorPasswordSubmitButton}  >
                <Button title='Retrieve my password' onPress={retrievePassword}>  </Button>
                </TouchableOpacity>
            </View>

            <View>
            <Text style={forgorPasswordStyles.orText}> Or </Text>
            </View>
                    
                <View>

                <TouchableOpacity style = {forgorPasswordStyles.logInButton}>
                <Button 
                    onPress={navigateTo}
                    title='Back to login'></Button>
              </TouchableOpacity>


                     <TouchableOpacity style={forgorPasswordStyles.createNewAccount}>
                         <Button title='Create new acount' onPress={ navigateTo } ></Button >
                     </TouchableOpacity>
                    </View>
                </View>
        )
    }
}

export default forgotPasswordScreen;

// Style //
forgorPasswordStyles = StyleSheet.create({
    forgotPasswordInput:{
        top:250,
        margin: 10,
        height: 40,
        borderBottomColor: '#0080FF',
        borderBottomWidth: 1,   
    },
    forgorPasswordText:{
        color:'#0080FF',
        fontSize:20,
        fontWeight:'bold',
        top:100,
        left:70
    },
    forgorPasswordSubmitButton:{
        borderRadius:10,
        borderWidth: 1,
        borderColor:'#0080FF',
        color:'#0080FF',
        fontSize:15,
        fontWeight:'bold',
        textAlign:'bottom',
        top:290,
        width:250,
        textAlign:'center',
        left:80
    },

    orText:{
        top:480,
        color:'#0080FF',
        fontSize:20,
        fontWeight:'bold',
        left:180
    },
    logInButton:{
        borderRadius:10,
        borderWidth: 1,
        borderColor:'#0080FF',
        color: '#0080FF',
        top:390,
        margin: 5,
        height: 40,
        color: '#0080FF',
        textAlign:'center',
        // fontWeight:'bold',
        fontSize:15
    },
    createNewAccount:{
     borderRadius:10,
     borderWidth: 1,
     borderColor:'#0080FF',
     color:'#0080FF',
     top:450,
     fontSize:15,
     textAlign:'center',
    //  padding: 10,
     margin: 5,
     height: 40,
    },


})
