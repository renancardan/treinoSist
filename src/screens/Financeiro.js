import React, { Component, useEffect, useContext, useState  } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView, Dimensions, TouchableHighlight, Modal, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../contexts/UserContext';
import * as Animatable from 'react-native-animatable';
import moment from 'moment';


import Topo from '../components/Topo1';
import Caixa1 from '../components/Caixa1';


const { width } = Dimensions.get('window');
import Api from '../Api';
//import CityLogo from '../../assets/logomarca.svg';

export default () => {

    const navigation = useNavigation();
    const [IdEmp, setIdEmp] = useState()
    
   
    useEffect(()=>{
      VerDados()
    }, []);


    const VerDados = async ()=>{
      var Id = await AsyncStorage.getItem('Id');
      var Conta = await AsyncStorage.getItem('Conta');
      console.log(Id)
      console.log(Conta)
     }
    const PegarProdutos = ()=>{
    
    }

 
   
  
    
    return (
      <View style={styles.Container0}>
       
      <ScrollView 
      style={styles.Container} 
      //Tirando a Barra de Rolagem  
      showsVerticalScrollIndicator={false}
     > 
  
 
      {/* Menu Fim*/}
    <View  style={styles.viewCentral}>
      
         
          
          <Topo 
          
          />
            
          {/* <Banner
          Status={Status}
          DadoEmp={DadoEmp}
          setModalVisible={setModalVisibleInfo}
          /> */}
          {/* <Titulo
          DadoEmp={DadoEmp}
          /> */}
          {/* <Pesquisa 
          setPesquisa={setPesq}
          Pesquisa={Pesq}
          /> */}
          {/* <MenuHori 
           VerMenu2={VerMenu2} 
           VerMenu={VerMenu} 
           setVerMenu={setVerMenu} 
           FechaMenu={FechaMenu} 
           Cat={Cat} 
           MudarSec={MudarSec} 
          /> */}
          
    </View>
    <View style={styles.Container1}>
    <Caixa1
          
          />
         <Caixa1
             
             />
              <Caixa1
             
             />
              <Caixa1
             
             />
              <Caixa1
             
             />
              <Caixa1
             
             />
              <Caixa1
             
             />
              <Caixa1
             
             />
              <Caixa1
             
             />
              <Caixa1
             
             />
              </View>
              <View style={styles.Container1}>
        <Caixa1
          
          />
         <Caixa1
             
             />
              <Caixa1
             
             />
              <Caixa1
             
             />
              <Caixa1
             
             />
              <Caixa1
             
             />
              <Caixa1
             
             />
              <Caixa1
             
             />
              <Caixa1
             
             />
              <Caixa1
             
             />
              </View>
 
      </ScrollView>
      </View>
    )
  }


const styles = StyleSheet.create({
  Container0:{
   width:"100%",
   height:"100%"
   },
  Container:{
    opacity: 1,
    backgroundColor:"#FFF",
    paddingBottom:100, 
   },
   Container1:{
    marginLeft:15,
    marginRight:15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
   backgroundColor:"red"
   },

   Menus:{
    width:"40%",
    position: 'absolute',
    top:0,
    left: 0,
    right: 10,
    height: "100%",
    backgroundColor: "#FFF",
    zIndex: 2,
     
   },
   MenusFund:{
    width:"100%",
    position: 'absolute',
    top:0,
    left: 0,
    right: 10,
    height: "100%",
    opacity: 0.5,
    backgroundColor: "#000",
    zIndex: 1,
     
   },
   menuText: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    fontFamily:"arial"
    
  },
  LinhaTop: {
    width: '50%',
   
    borderTopWidth: 2,
    borderTopColor: 'black',
    borderTopStyle: 'solid',
  },
  menuItem: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
    fontFamily:"arial"
  },
  menuItem1: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    fontFamily:"arial",
    fontWeight:"bold",
  },
   Sec0: {
    zIndex: 99,
  },
   Container1:{
    marginLeft:15,
    marginRight:15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    
    width:"100%",
   
   },
   item: {
    flexBasis: 'auto', 
    margin: 5,
    padding: 10,
    backgroundColor: 'lightblue',
  },
   viewCentral:{
    width:"100%",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    marginTop: 38

   },  
   ImageVer3:{
    width:100,
    height:100,
    

   
  },
 
});