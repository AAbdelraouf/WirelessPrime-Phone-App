import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, } from 'react-native'
import { Button } from 'react-native';

import firebase from './firebase'

var orderRef = firebase.database().ref();


class HomeScreen extends React.Component{
    render(){


        // class App extends React.Component {

        //     constructor() {
        //       super();
        //       this.state = {
        //         loading: true,
        //         authenticated: false,
        //       };
        //     }
          
        //     componentDidMount() {
        //       firebase.auth().onAuthStateChanged((user) => {
        //         if (user) {
        //           this.setState({ loading: false, authenticated: true });
        //         } else {
        //           this.setState({ loading: false, authenticated: false });
        //         }
        //       });
        //     }
          
        //     render() {
        //       if (this.state.loading) return null; // Render loading/splash screen etc
          
        //       if (!this.state.authenticated) {
        //         this.props.navigation.push('LoginScreen')
        //       }
          
        //       this.props.navigation.push('HomeScreen')
        //     }
        //   }


    // Logout function //
        logOut = () =>{firebase.auth().signOut()
        this.props.navigation.push('LoginScreen')};
        
        // Log out phone app from the user control web page //
        logOutAllPhoneApp = ()=> {
            orderRef.on('child_added', function(data) {
                var newelyAddedChild = data.val();
                var attachedEmail = data.key
                    if(newelyAddedChild === 'ahmed@gmail.com'){
                    logOut()
                    alert('Signed out by the (ADMINISTRATOR)')
                    
                    // Send message back to firebase database //
                    orderRef.set({
                        noteAttached:'Succefully logged out'
                    })                    
                    }
                    else{
                        null
                    }
                });
        }
        logOutAllPhoneApp();

        return(
            <View>
                {/* First View  */}
                <View style={screensStyles.firstScreen}>
                <Text style={screensStyles.firstScreenText}> 1 </Text>
                </View>
                
                {/* Second Screen */}
                <View style={screensStyles.firstScreen}>
                <Text style={screensStyles.firstScreenText}> 2 </Text>
                </View>

                {/* Thrid Screen */}
                <View style={screensStyles.firstScreen}>
                <Text style={screensStyles.firstScreenText}> 3 </Text>
                </View>

                <View >   
                    <Text 
                    style={screensStyles.logOutButton}
                    onPress={ logOut }
                    > Log out</Text>
                </View>
                
                </View>
        )
    }
}

export default HomeScreen;

screensStyles = StyleSheet.create({
    firstScreen: {
        marginTop:5,
        height:200,
        top:40,
        // borderRadius: 4,
        borderWidth: 1,
        borderColor: '#0080FF',
        // backgroundColor:'red'
      },
    firstScreenText:{
        color:'white',
        fontSize:20,
        backgroundColor:'#0080FF',
        width:30,
        // height:10,
    },
    logOutButton:{
        width:100,
        paddingLeft:8,
        paddingTop:3,
        height:35,
        borderRadius:10,
        borderWidth: 1,
        borderColor:'#0080FF',
        color:'#0080FF',
        fontWeight:'bold',
        fontSize:20,
        top:70,
        left:150,
        color:'#0080FF'
    }
})