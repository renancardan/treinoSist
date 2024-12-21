import React from 'react';
import { TextInput,  Text, View, StyleSheet, Button, TouchableHighlight, Image, FlatList } from 'react-native'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'


export default ({ Item  }) => {
  


   return (
     
      <TouchableHighlight style={styles.CaixaItem}>
      <> 
      <View style={styles.Container1}>
      <Text style={styles.Txt1}>{Item.Nome}</Text>
         <Text style={styles.Txt2}>{Item.Tel}</Text>
         <Text style={styles.Txt3}>{Item.DataVenc}</Text>
      </View>
    <View style={styles.Container2}>
    <View  style={{width:50, margin:5, borderRadius:5, height:20, alignItems:"center", justifyContent:"center"}}> 
         <Text style={{color:"#000",  }}>T: {Item.QTrenadores}</Text>
     </View> 
     <View  style={{width:50, margin:5, borderRadius:5, height:20, alignItems:"center", justifyContent:"center"}}> 
         <Text style={{color:"#000", }}>A: {Item.QAlunos}</Text>
     </View>
    </View>
      
     

      
      
        
      </>
   </TouchableHighlight>
       
   );
}

const styles = StyleSheet.create({
    Container1:{
      width:150,
      height:80,
      backgroundColor:"blue",
      paddingLeft:10
     },
     Container2:{
      width:50,
      height:80,
      backgroundColor:"yellow",
      display:"flex",
      alignItems:"flex-end",
     paddingRight:10,
      
     },
  
     CaixaItem:{
      width:200,
      height:80,
      flex:1,
      borderRadius:"0.75rem",
      marginRight:10,
      backgroundColor:"#ccc",
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
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
      color:"#000",
      fontWeight:500,
      fontSize:"15",
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