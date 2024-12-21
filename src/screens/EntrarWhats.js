import React, { Component, useEffect, useContext, useState  } from 'react'
import {TouchableHighlight, Text, View, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../contexts/UserContext';
import Api from '../Api';
import InputNome from '../components/InputNome';
import Telefone from '../components/NumberTel'
//import CityLogo from '../../assets/logomarca.svg';



export default () => {
    const navigation = useNavigation();
    const { dispatch: userDispatch } = useContext(UserContext);
    const { state: userState } = useContext(UserContext);
  
    const [Tel, setTel] = useState('');
    const [VerCod, setVerCod] = useState(false);
    const [Senha, setSenha] = useState('');
    const [MsgErro1, setMsgErro1] = useState(false);
    const [Carreg, setCarreg] = useState(false);
   // console.log(window.location.href);
  


      
   useEffect(() => {
    
    const timer = setTimeout(() => {
      EntrandoLinks()
    }, 3000);

   
    return () => clearTimeout(timer);
  }, []);
  
    
    useEffect(()=>{
     
     


    }, []);

    const EntrandoLinks = () => {
      const Site = window.location.href;
    const VerSite =  Site.split("/");
    console.log(VerSite)
    if(VerSite[3] === "profile"){
  
    navigation.navigate("Home", {
      id:VerSite[4],
    });
  }

    // } else if(VerSite[3] === "boleto") {
    //   navigation.navigate("Boleto", {
    //     id:VerSite[4],
    //   });

    // } else if(VerSite[3] === "apostas") {
    //   navigation.navigate("LinkApos", {
    //     id:VerSite[4],
    //   });

    // }  else  {
    //   //checkAuth();
    // }  
     
    }


    const checkAuth = async () => {
     
      navigation.reset({
        routes:[{name:"Entrar"}]
    });
     

      }

      const GerarCodigo = async () => {

        if(Tel.length === 14){
          setMsgErro1(false)
          setCarreg(true)
          Api.EntrandoWhats(Tel, setVerCod, setMsgErro1, setCarreg)
      } else {
         setMsgErro1(true)
      }
         
    
        }
          const Voltando = async () => {
           setMsgErro1(false)
            setVerCod(false)
        
              }
             const EntrandoConta = ()=>{
              setMsgErro1(false)
              setCarreg(true)
                Api.EntrandoSenha(Tel, Senha, setMsgErro1, setCarreg, IndoPraHome)
            }
            const IndoPraHome = async () => {
              navigation.reset({
                routes:[{name:"Home"}]
            });
              
            }
    
    return (
      <View style={styles.Container}>
         {/* <ImageBackground source={require("../assets/Fundo.png")} 
          resizeMode="cover" 
          style={styles.imageBack} > */}
        <Image source={require('../assets/TreinosTrans.png')}  style={styles.ImageVer2 } />
        
      {VerCod === false ?
      <>
      {MsgErro1 &&
        <TouchableHighlight  style={styles.Container9}>
  <Text style={{fontSize:10, color:"red" }}>Seu Whatsapp está digitado Errado!</Text>

          </TouchableHighlight>
      }
       
       < View  style={styles.Container8}>
  <Text style={{fontSize:17, fontWeight:"bold"}}>Whats:</Text>
  <Telefone
                       
                       placeholder="Digite seu Whatsapp" 
                       value={Tel}
                       onChangeText={t=>setTel(t)}
                       autoCapitalize="none"
                       keyboardType={"phone-pad"}
                      
                   /> 
          </View>
          {Carreg ?
          <>
           <Image source={require('../assets/Caregar.gif')}  style={styles.ImageVer3 } />
          </>

          :
          <>
           <TouchableHighlight onPress={()=>GerarCodigo()}  style={styles.Container10}>
  <Text style={{fontSize:25, fontWeight:"bold", color:"#FFF"}}>Enviar Codigo</Text>

          </TouchableHighlight>
          
          </>
          }
         
        
      </>

      :
      <>
      <TouchableHighlight  style={styles.Container9}>
  <Text style={{fontSize:10, }}>Seu Codigo Foi Enviado para Seu Whatsapp!</Text>

          </TouchableHighlight>
          {MsgErro1 &&
        <TouchableHighlight  style={styles.Container9}>
  <Text style={{fontSize:10, color:"red" }}>Seu Código está digitado Errado!</Text>

          </TouchableHighlight>
      }
      < View  style={styles.Container8}>
  <Text style={{fontSize:17, fontWeight:"bold"}}>Codigo:</Text>
  <InputNome
                       
                       placeholder="Digite Seu Codigo" 
                       value={Senha}
                       onChangeText={t=>setSenha(t)}
                       autoCapitalize="none"
                       keyboardType={"default"}
                       password={true}
                      
                   /> 
          </View>
          {Carreg ?
          <>
           <Image source={require('../assets/Caregar.gif')}  style={styles.ImageVer3 } />
          </>

          :
          <>
          <TouchableHighlight onPress={()=>EntrandoConta()}  style={styles.Container10}>
  <Text style={{fontSize:25, fontWeight:"bold", color:"#FFF"}}>Entrar</Text>

          </TouchableHighlight>
          <TouchableHighlight onPress={()=>Voltando()}   style={styles.Container9}>
  <Text style={{fontSize:15, color:"blue"}}>Voltar</Text>

          </TouchableHighlight>
          </>
          }
      </>

      }
    
          
    {/* </ImageBackground>   */}
        
     
      </View>
    )
  }


const styles = StyleSheet.create({
  Container8:{
    backgroundColor:"#FFF",
    paddingBottom:10,
    width:250,
    paddingLeft:10,
    paddingTop:5,
    borderRadius:10,
    marginBottom:10,
    justifyContent: "flex-start",
    alignItems:"center",
    flexDirection:"row",
    borderWidth:1,
    borderColor:"#000",
    borderStyle:"solid"
   },
   Container9:{
    backgroundColor:"#fff",
    paddingBottom:5,
    width:300,
    paddingLeft:10,
    paddingTop:5,
    borderRadius:10,
 
    justifyContent: "center",
    alignItems:"center",
    flexDirection:"row",
    
   },
   Container10:{
    backgroundColor:"#000",
    paddingBottom:10,
    width:200,
    paddingLeft:10,
    paddingTop:5,
    borderRadius:10,
    marginBottom:10,
    justifyContent: "center",
    alignItems:"center",
    flexDirection:"row",
    
   },

    image: {
      width:  100,
      height: 100,
       flex: 1 ,
       alignItems:"center",
       justifyContent: "center",
       backgroundColor:"#000",
     
       
    },

    imageBack: {
        width:  "100%",
        height: "120%",
         flex: 1 ,
         alignItems:"center",
         justifyContent: "center",
      },
    ImageVer2:{
        width:200,
        height:200,
        borderRadius:20,
        marginBottom:10
      },  
    
      Container:{
       backgroundColor: "#FFF",
       flex:1,
       justifyContent:"center",
       alignItems:"center",
    
       
      },  
      ContainerImg:{
        width:200,
        height:200,
        backgroundColor: "#000",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
        
       },  
       ImageVer5:{
        width:50,
        height:100,
        marginTop: 10,
     
       
      },  
      ImageVer3:{
        width:50,
        height:50,
       
    
       
      },  
});