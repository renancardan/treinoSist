import React, { useState, useEffect } from 'react';
import {Dimensions, Image, View, Text, StyleSheet, Button, Modal, TouchableOpacity, ScrollView, TouchableHighlight  } from 'react-native';
import { Ionicons, Feather, AntDesign, FontAwesome6, FontAwesome5, FontAwesome} from '@expo/vector-icons'
import Campo from './CampoQuant';
import Telefone from './NumberTel'
import InputNome from './InputNome';
import InputComent from './InputComent';
import Api from '../Api'
import * as ImagePicker from 'expo-image-picker';
import InputDia from './InputDia';

const { width, height,  } = Dimensions.get('window');
const App = ({Nome, setNome, Tel, setTel, IdRep,  setInfor, Infor, ModalEdit, setModalEdit, AtivoRep, setAtivoRep, ContaAluno, setContaAluno,  DiaPg, setDiaPg, setPorCentPg, PorCentPg}) => {
   
  const [TelMud, setTelMud] = useState(Tel);
    const [MsgErro1, setMsgErro1] = useState("");
    const [MsgSucesso, setMsgSucesso] = useState("");
    const [Carreg, setCarreg] = useState(false);

   
   
   
  
  const AddicionadoRep = ()=>{
     if(Tel.length == 14) { 
    if(Nome ){
     
        setCarreg(true)
        Api.RepEdit(IdRep, TelMud, Nome, Tel, AtivoRep, ContaAluno, Infor, DiaPg, PorCentPg, setMsgErro1, setCarreg, setMsgSucesso)
      
   

    } else {
      setMsgErro1("Preencha o nome do Representante!")
    } 
    } else {
      setMsgErro1("O número de telefone está incompleto!")
    }
    }
    const FecharModal = ()=>{
      setModalEdit(false)
      setMsgErro1("")
      setMsgSucesso("")
     
    } 
    
   
  return (
    
     
      <Modal
        transparent={true}
        visible={ModalEdit}
        animationType="slide"
        onRequestClose={() => FecharModal()}
      >
        <View style={styles.overlay} >
          <View style={styles.menu}>
          {Carreg ?
          <>
           <Image source={require('../assets/Caregar.gif')}  style={styles.ImageVer3 } />
           </>

            :
            <>
          <ScrollView 
           showsVerticalScrollIndicator={false}
          style={styles.Container2}>
         
         
          <TouchableHighlight  onPress={() => FecharModal()}style={styles.Container7}>
            <>
          <View >
          <AntDesign name="closecircleo" size={24} color="red" />
             </View>
          <Text style={styles.menuItem}>Editar Representante</Text>
          <View >
            <></>
             </View>
             </>
          </TouchableHighlight>
          {MsgSucesso ?
          <>
          <View  style={styles.Container12}>
          <Text style={{fontSize:20, color:"green" }}>{MsgSucesso}</Text>
        
          </View>
          
          </>

          :
          <>
          
        
          {MsgErro1 &&
        <View  style={styles.Container12}>
  <Text style={{fontSize:10, color:"red" }}>{MsgErro1}</Text>

          </View>
        }
          <View  style={styles.Container8}>
  <Text style={{fontSize:17}}>Whatsapp:</Text>
  <Telefone
                       
                       placeholder="Digite o Whatsapp" 
                       value={Tel}
                       onChangeText={t=>setTel(t)}
                       autoCapitalize="none"
                       keyboardType={"phone-pad"}
                      
                   /> 
          </View>
          <View  style={styles.Container8}>
  <Text style={{fontSize:17}}>Nome:</Text>
  <InputNome
                       
                       placeholder="Digite o Nome do Dono" 
                       value={Nome}
                       onChangeText={t=>setNome(t)}
                       autoCapitalize="none"
                       keyboardType={"default"}
                      
                   /> 
          </View>
         
          <View  style={styles.Container8}>
         <Text style={{fontSize:17}}>Dia do Pag.:</Text>
           <InputDia
                       
                       placeholder="Digite o Dia do Papamento" 
                       value={DiaPg}
                       onChangeText={t=>setDiaPg(t)}
                       autoCapitalize="none"
                       keyboardType={"numeric"}
                      
                   /> 
          </View>
           
          
        <View  style={styles.Container8}>
         <Text style={{fontSize:17}}>% do Pag.:</Text>
           <InputDia
                       
                       placeholder="Digite o % do Papamento" 
                       value={PorCentPg}
                       onChangeText={t=>setPorCentPg(t)}
                       autoCapitalize="none"
                       keyboardType={"numeric"}
                      
                   /> 
          </View>
          <View  style={styles.Container8}>
          <Text style={{fontSize:17}}>Conta Representante:</Text>
          {AtivoRep ?
          <TouchableHighlight onPress={()=>setAtivoRep(false)} style={styles.Ativador}> 
          <>
            <View style={{width:30, height:30, marginLeft: 0, backgroundColor:"green", borderRadius:30}}>

            </View> 
          
          </>
          </TouchableHighlight>
          :
          <TouchableHighlight onPress={()=>setAtivoRep(true)} style={styles.DesAtivador}> 
          <>
          
           <View style={{width:30, height:30, marginRight: 1, backgroundColor:"red", borderRadius:30}}>

          </View>
          </>
          </TouchableHighlight>
          }
         
         
          </View>
          <View  style={styles.Container8}>
          <Text style={{fontSize:17}}>Conta Aluno:</Text>
          {ContaAluno ?
          <TouchableHighlight onPress={()=>setContaAluno(false)} style={styles.Ativador}> 
          <>
            <View style={{width:30, height:30, marginLeft: 0, backgroundColor:"green", borderRadius:30}}>

            </View> 
          
          </>
          </TouchableHighlight>
          :
          <TouchableHighlight onPress={()=>setContaAluno(true)} style={styles.DesAtivador}> 
          <>
          
           <View style={{width:30, height:30, marginRight: 1, backgroundColor:"red", borderRadius:30}}>

          </View>
          </>
          </TouchableHighlight>
          }
         
         
          </View>
        
         
          
      
  <View style={styles.Container12}>

  <InputComent 
               placeholder="Digite Observação caso Tenha..." 
               value={Infor}
               onChangeText={t=>setInfor(t)}
               autoCapitalize="none"
               keyboardType={"default"}
              
            
            />
          </View>
          {MsgErro1 &&
        <View  style={styles.Container12}>
  <Text style={{fontSize:10, color:"red" }}>{MsgErro1}</Text>

          </View>
        }
   <TouchableHighlight onPress={()=>AddicionadoRep()} style={styles.Container9}>
            <>
         
          <Text style={styles.menuItem2}>Salvar</Text>
          
             </>
          </TouchableHighlight>
          </>

          }
          </ScrollView>
          </>
          }
          </View>
        </View>
      </Modal>
    
  );
};

const styles = StyleSheet.create({
   Ativador:{
        marginLeft:5,
        width:60,
        display:"flex",
        flexDirection:"row",
        borderWidth: 1,
        borderColor:"#999",
        borderRadius: 9999,
        alignItems:"center",
        justifyContent:"flex-start",
        gap:"0.5rem",
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor: "transparent",
        height: 30,
      },
      DesAtivador:{
        marginLeft:5,
        width:60,
        display:"flex",
        flexDirection:"row",
        borderWidth: 1,
        borderColor:"#999",
        borderRadius: 9999,
        alignItems:"center",
        justifyContent:"flex-end",
        gap:"0.5rem",
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor: "transparent",
        height: 30,
      },
    Escolha1:{
        width:20,
        height:20,
        borderRadius:10,
        
        marginRight:5,
        marginLeft:5,
        backgroundColor:"#4f66ff"
        },
    Escolha:{
        width:20,
        height:20,
        borderRadius:10,
        borderColor:"#9d9fa7",
        borderWidth:1,
        borderStyle:"solid",
        marginRight:5,
        marginLeft:10
        },
    MaisMenos:{
        marginLeft:4,
        },
      Input1:{
      width:10,
      },
      Input:{
        width:95,
        display:"flex",
        flexDirection:"row",
        borderWidth: 1,
        borderColor:"#999",
        borderRadius: 9999,
        alignItems:"center",
        justifyContent:"space-between",
        gap:"0.5rem",
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor: "transparent",
        height: 30,
      },
    Img:{
        width: 40,
        height:40,
        borderRadius:2
     
        },
    Container2:{
        opacity: 1,
        width:"100%", 
       },
 Container5:{
        opacity: 1,
        backgroundColor:"#FFF",
        paddingBottom:10,
        width:"100%",
        padding:5,
        borderRadius:10,
        marginBottom:10,
        justifyContent: "center",
        alignItems:"center",
       },
       Container7:{
        opacity: 1,
        backgroundColor:"#FFF",
        paddingBottom:10,
        width:"100%",
        padding:5,
        borderRadius:10,
        marginBottom:10,
        justifyContent: "space-between",
        alignItems:"center",
        flexDirection:"row"
       },
       Container9:{
        opacity: 1,
        backgroundColor:"#0c9139",
        paddingBottom:10,
        width:"100%",
        padding:5,
        borderRadius:10,
        marginBottom:10,
        justifyContent: "center",
        alignItems:"center",
        flexDirection:"row"
       },
       Container8:{
        backgroundColor:"#FFF",
        paddingBottom:10,
        width:"100%",
        paddingLeft:10,
        paddingTop:5,
        borderRadius:10,
        marginBottom:10,
        justifyContent: "flex-start",
        alignItems:"center",
        flexDirection:"row",
        
       },
       Container18:{
        backgroundColor:"#FFF",
        paddingBottom:10,
        width:"100%",
        paddingLeft:10,
        paddingTop:5,
        borderRadius:10,
        marginBottom:10,
        justifyContent: "flex-start",
        alignItems:"center",
        flexDirection:"row",
        paddingRight:10
        
       },
       Container11:{
        backgroundColor:"#FFF",
        justifyContent: "flex-start",
        alignItems:"center",
        flexDirection:"row",
        marginBottom:5,
      
       },
       Container10:{
        backgroundColor:"#FFF",
        paddingBottom:10,
        width:"100%",
        paddingLeft:10,
        paddingTop:5,
        borderRadius:10,
        marginBottom:10,
        alignItems: "flex-start",
        flexDirection:"column",
      
       },
       Container12:{
        width:"100%", 
      
        marginBottom:10, 
        backgroundColor:"#FFF",
        padding:10,
        borderRadius:10,
        marginBottom:10,
        alignItems:"center",
        flexDirection:"row",
      
       },
    Prod:{
        width: 40,
        height: 40,
        borderRadius: 9999,
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
     } ,
     Prod3:{
        width: 140,
        
        display:"flex",
      
        alignItems:"flex-start",
        paddingLeft:5,
     
     } ,
     Prod4:{
        width: 100,
        
    
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
        display:"flex",
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-start"
     } ,
     Prod2:{
        width: 130,
        height: "2.5rem",

        display:"flex",
        justifyContent: "center",
        alignItems:"center",
        flexDirection:"row"

     } ,
     LinhaTop: {
        width: '70%',
       
        borderTopWidth: 1,
        borderTopColor: '#dbdedc',
        borderTopStyle: 'solid',
      },
    Container1:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",

        marginBottom:5
       },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    width: 340,
    height:500,
    backgroundColor: '#d1d5d3',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  menuItem: {
    fontSize: 18,
    fontWeight:"bold",
    textAlign: 'center',
    marginLeft:-20,
  },
  menuItem1: {
    fontSize: 11,
    
  },
  Text12: {
    fontSize:15, 
    marginLeft:5
  },
  Text11: {
    fontSize:13, 
    marginLeft:2
  },
  menuItem2: {
    fontSize: 18,
    fontWeight:"bold",
    textAlign: 'center',
    color:"#fff"
  },
  ImageVer3:{
    width:50,
    height:50,
  }, 
});

export default App;