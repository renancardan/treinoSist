import React from 'react';
import { TextInput,  Text, View, StyleSheet, Button, TouchableHighlight, Image, FlatList } from 'react-native'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'


export default ({   }) => {
  

   
   return (
     
            <TouchableHighlight style={styles.Btn}>
               <>
              
                  <Text style={styles.Txt1}>Texto 1 </Text>
                  <Text style={styles.Txt2}>Texto 2</Text>
                  <Text style={styles.Txt3}>Texto 3</Text>
               </>
            </TouchableHighlight>
       
   );
}

const styles = StyleSheet.create({
    Container:{
      width:"100%",
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
     },
   Img:{
     width:"11rem",
     height:"9rem",
     borderRadius:"0.75rem"
  
     },
     Btn:{
      margin:20, 
      margin: '1%',
      flexDirection: 'column',
      borderRadius: 10,
      position: 'relative',
      backgroundColor:"#ccc",
      width:320,
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
       color:"green",
       fontWeight:500,
       fontSize:"1.125rem",
       lineHeight:"1.75rem",
     },
     Txt2:{
      marginTop: "0.25rem",
      color:"#000"
     },
     Txt3:{
      color:"#999",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
     }

     
  
     
  });