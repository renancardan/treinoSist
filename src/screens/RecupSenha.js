import React, { Component, useEffect, useContext, useState  } from 'react'
import {TouchableHighlight, Text, View, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../contexts/UserContext';
import Api from '../Api';
import InputNome from '../components/InputNome';
import email from 'react-native-email'
//import CityLogo from '../../assets/logomarca.svg';

export default () => {
    const navigation = useNavigation();
    const { dispatch: userDispatch } = useContext(UserContext);
    const { state: userState } = useContext(UserContext);
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
   
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

     const EnviarEmail =  async ()=>{
      const to = ['r.azevedoonline@gmail.com']; // Destinatários do e-mail
    email(to, {
      // Configurações opcionais
      subject: 'Assunto do Email',
      body: 'Aqui está o corpo do e-mail',
      cc: ['renancardan@hotmail.com'], // Cópia
      bcc: ['renancardan@hotmail.com'], // Cópia oculta
    }).catch(console.error);

     }
    
    
    return (
      <View style={styles.Container}>
       
        <Image source={require('../assets/TreinoSistem.png')}  style={styles.ImageVer2 } />
        <TouchableHighlight  style={styles.Container9}>
  <Text style={{fontSize:20, textAlign:"center" }}>Coloque o Email da Sua Conta, para enviarmos sua senha para o Email!</Text>

          </TouchableHighlight>
      
     < View  style={styles.Container8}>
  <Text style={{fontSize:17, fontWeight:"bold"}}>Email:</Text>
  <InputNome
                       
                       placeholder="Digite seu Email" 
                       value={Email}
                       onChangeText={t=>setEmail(t)}
                       autoCapitalize="none"
                       keyboardType={"default"}
                      
                   /> 
          </View>
        
          <TouchableHighlight onPress={()=>EnviarEmail()} style={styles.Container10}>
  <Text style={{fontSize:25, fontWeight:"bold", color:"#FFF"}}>Enviar</Text>

          </TouchableHighlight>
          <TouchableHighlight onPress={()=>checkAuth()}   style={styles.Container9}>
  <Text style={{fontSize:15, color:"blue"}}>Voltar</Text>

          </TouchableHighlight>
          
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
        width:100,
        height:100,
       
    
       
      },  
});