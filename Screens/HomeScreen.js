import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, } from 'react-native'
import { Button } from 'react-native';

import firebase from './firebase'

var orderRef = firebase.database().ref();

class HomeScreen extends React.Component{
    render(){

        logOut = () =>{
            firebase.auth().signOut()
            this.props.navigation.push('LoginScreen')
        }
        
        // logOutAllPhoneApp = ()=>
        // {
        //     orderRef.on('child_added', function(data) {
        //         if(data.val() === "Sign phone app out"){
        //             logOut()
        //             alert('Signed out by the (ADMINISTRATOR)')
        //         orderRef.set({
        //             noteAttached:'Succefully logged out'
        //         })                    
        //         }
        //         else{
        //             null
        //         }
        //     });
        // }
        // logOutAllPhoneApp();

        

        // Posting data to the front page when child_added fired //
        orderRef.on('child_added', function(storedNote){
            var newelyAdded = storedNote.val();
            var storedNotsId = storedNote.key
            alert(newelyAdded.emailAttached + newelyAdded.noteAttached + storedNotsId) 
            })
            



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