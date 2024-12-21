import React, { Component, useEffect, useContext, useState  } from 'react'
import {Linking, Image, TextInput,  Text, View, StyleSheet, Button, TouchableHighlight, Dimensions, ScrollView } from 'react-native'
import { Ionicons, Feather, AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';
import Api from '../Api';


const { width } = Dimensions.get('window');
const isTablet = width >= 768;
export default ({DadoEmp }) => {
   const [Abert, setAbert] = useState();
  
    return (
       <View  style={styles.Container} >
         <View  style={{flexDirection:"row", display:"flex"}}>
            
            <Animatable.Image
            animation="bounceIn"
            duration={10000}
            style={styles.img1}
           
            source={require("../assets/TreinoSistem.png")}
          /> 

          
          <View style={{ display:"flex", alignItems:"flex-start"}}>        
         <TouchableHighlight style={styles.Btn}>
         <Text style={styles.Txt2}>Treino Sistem</Text>
         </TouchableHighlight>
        
         
         </View>  
         </View>            
      <View  style={{flexDirection:"row", display:"flex",  marginTop:-75, marginRight:20}}>
     
      </View>        
    
   
  
          </View>
       
    );
}

const styles = StyleSheet.create({
   img1: {
      width:  100 ,
      height:  100 ,
     marginTop:-100,
     marginRight:10,
     borderRadius:10
    
   },
    Container:{
      width:"100%",
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      marginTop:20,
      marginBottom:20,
      marginLeft:20,
    
     },
     viewCentral:{
      width:"100%",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      marginTop: 38
  
     },
     Btn:{
        height: "2.5rem",
        
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
        marginTop:-40
     } ,
     Btn1:{
      marginTop:10,
      marginLeft:10
   } ,
     
     Viewcent:{
        flexDirection: "column",
        display:"flex",
        alignItems:"center",
        justifyContent: "center",
     },
     ViewCentInt:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "center",
        gap: "0.25rem",
     },
     Txt1:{
        textAlign: "center",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        color:"#000"
     },
     Txt2:{
        fontSize: 20,
        lineHeight: "1.75rem",
        fontWeight: "700" 
     }

     
  
     
  });