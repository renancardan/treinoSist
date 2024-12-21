import React, { Component, useEffect, useContext, useState  } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../contexts/UserContext';
import Api from '../Api';
//import CityLogo from '../../assets/logomarca.svg';

export default () => {
    const navigation = useNavigation();
    const { dispatch: userDispatch } = useContext(UserContext);
    const { state: userState } = useContext(UserContext);
    const [Cidade, setCidade] = useState('');
    const [Estado, setEstado] = useState('');
    const [Area, setArea] = useState(null);
    const [Regiao, setRegiao] = useState('')
    const [Id, setId] = useState('');
    const [Nome, setNome] = useState('');
    const [Emp, setEmp] = useState('');
    const [IrHome, setIrHome] = useState(false);
    const [IrLogin, setIrLogin] = useState(false);
    const [IdArea, setIdArea] = useState("");
    const [Lat, setLat] = useState("");
    const [Lng, setLng] = useState("");
   // console.log(window.location.href);
  


      
   useEffect(() => {
    
    VerDados()
  }, []);
  
    
    // useEffect(()=>{
    //   checkAuth();
    // }, []);

 const VerDados = async ()=>{
      var Id = await AsyncStorage.getItem('Id');
      var Conta = await AsyncStorage.getItem('Conta');
      console.log(Id)
      console.log(Conta)
      if(Id && Conta ){
        navigation.reset({
          routes:[{name:"Home"}]
      });
      } else {
        navigation.reset({
          routes:[{name:"EntrarWhats"}]
      });
      }
      console.log(Conta)
     }
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


    
    
    return (
      <View style={styles.Container}>
        
        <Image source={require('../assets/TreinoSistem.png')}  style={styles.ImageVer2 } />
        
      <Image source={require('../assets/Caregar.gif')}  style={styles.ImageVer3 } />
         
      </View>
    )
  }


const styles = StyleSheet.create({

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
        borderRadius:20
       
      },  
    
      Container:{
       backgroundColor: "#FFF",
       flex:1,
       justifyContent:"center",
       alignItems:"center",
       paddingBottom: 100,
       
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