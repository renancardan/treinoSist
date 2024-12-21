import React from 'react';
import { TextInput,  Text, View, StyleSheet, Button, TouchableHighlight, Image, FlatList } from 'react-native'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'


export default ({ EmpList, setVerMoldCadEmp}) => {
 
 
   return (
      <FlatList
         data={EmpList}
         horizontal={false}
         contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16, marginLeft:15,  }}
         showsHorizontalScrollIndicator={false}
         ListHeaderComponent={() => (
            <TouchableHighlight onPress={()=>setVerMoldCadEmp(true)} style={styles.Btn1}>
             <AntDesign name="plus" size={50} color="black" />
         </TouchableHighlight>
          )}
         renderItem={({ item }) => (
            <TouchableHighlight key={item.id} style={styles.Btn}>
               <> 
               <View style={styles.Container1}>
               <Text style={styles.Txt1}>{item.Nome}</Text>
                  <Text style={styles.Txt2}>{item.Tel}</Text>
                  <Text style={styles.Txt3}>{item.DataVenc}</Text>
               </View>
             <View style={styles.Container2}>
             <View  style={{width:50, margin:5, borderRadius:5, height:20, alignItems:"center", justifyContent:"center"}}> 
                  <Text style={{color:"#000",  }}>T: {item.QTrenadores}</Text>
              </View> 
              <View  style={{width:50, margin:5, borderRadius:5, height:20, alignItems:"center", justifyContent:"center"}}> 
                  <Text style={{color:"#000", }}>A: {item.QAlunos}</Text>
              </View>
             </View>
               
              

               
               
                 
               </>
            </TouchableHighlight>
         )}
         keyExtractor={item => item.id.toString()} // add this line to ensure unique keys
      />
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
     Container1:{
      width:150,
      height:80,
      //backgroundColor:"blue",
      paddingLeft:10
     },
     Container2:{
      width:50,
      height:80,
      //backgroundColor:"yellow",
      display:"flex",
      alignItems:"flex-end",
     paddingRight:10,
      
     },
   Img:{
     width:"11rem",
     height:"9rem",
     borderRadius:"0.75rem"
  
     },
     Btn:{
        flex:1,
        flexDirection:"column",
        borderRadius:"0.75rem",
        position:"relative",
        marginRight:10,
        backgroundColor:"#ccc",
        width:200,
        height:80,
        display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
     } ,
     Btn1:{
      flex:1,
      flexDirection:"column",
      borderRadius:"0.75rem",
      position:"relative",
      marginRight:10,
      backgroundColor:"#ccc",
      width:80,
      height:80,
      display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
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