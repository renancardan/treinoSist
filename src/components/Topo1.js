import React from 'react';
import { TextInput,  Text, View, StyleSheet, Button, TouchableHighlight, Dimensions } from 'react-native'
import { Ionicons, Feather, AntDesign, Entypo} from '@expo/vector-icons'


const { width } = Dimensions.get('window');
export default ({ }) => {
 
    return (
   
        <View style={styles.Container}>
      <TouchableHighlight  style={styles.Btn}>
      <Entypo name="chevron-left" size={24} color="#FFF" />
      </TouchableHighlight>

      <View style={styles.Viewcent}>
        <Text style={styles.Txt1}>Financeiro</Text>

        <View style={styles.ViewCentInt}>
        
        </View>
      </View>

      <TouchableHighlight  style={styles.Btn}>
      {/* <Entypo name="credit" size={24} color="#FFF" /> */}
     <>
     </>
      </TouchableHighlight >
  </View>
       
       
    );
}

const styles = StyleSheet.create({
    Container:{
      width:"100%",
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      backgroundColor:"#000"
     },
     viewCentral:{
      width:"100%",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      marginTop: 38
  
     },
     Btn:{
        width: "2.5rem",
        height: "2.5rem",
        backgroundColor:"#000",
        borderRadius: 9999,
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
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
        fontSize: 20,
        lineHeight: "1.25rem",
        color:"#FFF"
     },
     Txt2:{
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
        fontWeight: "700" 
     }

     
  
     
  });