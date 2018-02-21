import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, TouchableHighlight } from 'react-native'
import { Button } from 'react-native';
import firebase from './firebase'


class LoginScreen extends Component{
    state = {
        email: '',
        password: ''}

     handleEmail = (text) => {
        this.setState({ email: text })}

     handlePassword = (text) => {
        this.setState({ password: text })}
        
    // Login stage //    
    login = (email, pass) => {
        if(email === '' || pass === ''){
                alert('Please fill empty fields')}
        else{
            firebase.auth().signInWithEmailAndPassword(email, pass).then((user) =>{
                this.props.navigation.push('HomeScreen');
                alert('Welcome ' + user.email )
                })
                .catch((error)=> {
                    alert(error.code);
            })}
        };

    // Signup stage //
     signup = (email, pass) =>{
         if(email === '' || pass === ''){
            alert('Please fill empty fields')
         }
         else{
            firebase.auth().createUserWithEmailAndPassword(email, pass).then((user) =>{
                this.props.navigation.push('HomeScreen')
                alert('Thank you ' + email +  ' for joining cine gears')
            }).catch(function(error){    
                alert(error.code)
            })
         }

    }
     // Render stage //
     render(){
        navigateToPasswordRetrievePage = () =>
            {
                this.props.navigation.push('forgotPasswordScreen')
            }
     return (
        <View>
          <View>
          <Text 
          style={styles.wirelessPrime}
          >WIRELESS PRIME </Text>
          <Text style={styles.userLogin}>USER LOGIN </Text>
          <TextInput 
                 style = {styles.emailInput}
                 underlineColorAndroid = "transparent"
                 placeholder = " Email"
                 placeholderTextColor = "gray"
                 autoCapitalize = "none"
                 onChangeText = {this.handleEmail}/>
              
              <TextInput 
              style = {styles.passwordInput}
                 underlineColorAndroid = "transparent"
                 placeholder = " PASSWORD"
                 secureTextEntry={true}
                 placeholderTextColor = "gray"
                 autoCapitalize = "none"
                 onChangeText = {this.handlePassword}/>
                </View>
            
            <View >

                    
            <TouchableOpacity style = {styles.logInButton}>
                <Button 
                onPress={()=>this.login(this.state.email, this.state.password)}
                title='LOG IN'> </Button>
            </TouchableOpacity>
            
            <TouchableOpacity style = {styles.signUpButton} >
                <Button
                onPress={ () => this.signup(this.state.email, this.state.password) }
                title="SIGN UP" >  </Button>
              </TouchableOpacity>

            <TouchableOpacity
                    style={styles.resetPasswordButton}>
                    <Button onPress={navigateToPasswordRetrievePage} title="Forgot password?">
                    </Button>
            </TouchableOpacity>                
                
                </View>
           </View>
        )
     }
}


export default LoginScreen;

// Create the inputs styling //
const styles = StyleSheet.create({
    wirelessPrime:{
        top:80,
        justifyContent:"center",
        color:'black',
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
       },
       userLogin:{
           top:90,
           color:'#0080FF',
           textAlign:'center',
           fontSize:20
       },
    emailInput:{
       top:230,
       margin: 5,
       height: 40,
       borderBottomColor: '#0080FF',
       borderBottomWidth: 1,   
    },
    passwordInput:{
        top:250,
        margin: 5,
        height: 40,
        borderBottomColor: '#0080FF',
        borderBottomWidth: 1,  
    },
    logInButton:{
        top:300,
        borderRadius:10,
       borderWidth: 1,
       borderColor:'#0080FF',
       
       margin: 5,
       height: 40,
       textAlign:'center',
       fontWeight:'bold',
       fontSize:15
    },
    signUpButton:{
        borderRadius:10,
        borderWidth: 1,
        borderColor:'#0080FF',
        color:'#0080FF',
        top:300,
        fontWeight:'bold',
        fontSize:15,
        textAlign:'center',
        // padding: 10,
        margin: 5,
        height: 40,
       },
    resetPasswordButton:
    {
        left:125,
        top:320,
        // borderColor:'red'
    },
 })
