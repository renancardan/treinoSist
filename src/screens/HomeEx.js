import React, { Component, useEffect, useContext, useState  } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView, Dimensions, TouchableHighlight, Modal, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../contexts/UserContext';
import * as Animatable from 'react-native-animatable';
import moment from 'moment';

import MenuHori from '../components/MenuHori';
import ModalInfo from '../components/ModalInfo';
import Topo from '../components/Topo';
import Banner from '../components/Banner';
import Pesquisa from '../components/Pesquisa';
import Secao from '../components/Secao';
import Catalago from '../components/Catalago';
import Item from '../components/Item';
import Secao1 from '../components/Secao1';
import Mod1 from '../components/Modal';
import Menu from '../components/Menu';
import Carrinho from '../components/Carrinho';
import ModalCar from "../components/ModalCar"
import Titulo from '../components/Titulo';

const { width } = Dimensions.get('window');
import Api from '../Api';
//import CityLogo from '../../assets/logomarca.svg';

export default () => {

    const navigation = useNavigation();
    const [IdEmp, setIdEmp] = useState()
    const [DadoEmp, setDadoEmp] = useState({})
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleCar, setModalVisibleCar] = useState(false);
    const [modalVisibleInfo, setModalVisibleInfo] = useState(false);
    const [DiasAbert, setDiasAbert] = useState([])
    const [ItemMod, setItemMod] = useState({})
    const [QuantItem, setQuantItem] = useState(1)
    const [VerCar, setVerCar] = useState(false)
    const [VerCar2, setVerCar2] = useState(false)
    const [VerSec, setVerSec] = useState([])
    const [VerMenu, setVerMenu] = useState(false)
    const [VerMenu2, setVerMenu2] = useState(false)
    const [VerTotal, setVerTotal] = useState(0)
    const [QuantTotal, setQuantTotal] = useState(0)
    const [Pesq, setPesq] = useState("");
    const [ListPesq, setListPesq] = useState("");
    const [Cat, setCat] = useState([
      {
        Secao:"Inicio"
      },
      {
        Secao:"Empresas"
      },
      {
        Secao:"Treinadores"
      },
      {
        Secao:"Clientes"
      },
    ])
    const [Itens, setItens] = useState([
      {
        id:1,
        Preco:20,
        Nome:"Renan",
        Descricao:"Passada" 
      },
      {
        id:2,
        Preco:20,
        Nome:"Renan",
        Descricao:"Passada" 
      },
      {
        id:3,
        Preco:20,
        Nome:"Renan",
        Descricao:"Passada" 
      },
      {
        id:4,
        Preco:20,
        Nome:"Renan",
        Descricao:"Passada" 
      },
      {
        id:5,
        Preco:20,
        Nome:"Renan",
        Descricao:"Passada" 
      },
      {
        id:6,
        Preco:20,
        Nome:"Renan",
        Descricao:"Passada" 
      },
      {
        id:7,
        Preco:20,
        Nome:"Renan",
        Descricao:"Passada" 
      },
      {
        id:8,
        Preco:20,
        Nome:"Renan",
        Descricao:"Passada" 
      },
      {
        id:9,
        Preco:20,
        Nome:"Renan",
        Descricao:"Passada" 
      },
      {
        id:10,
        Preco:20,
        Nome:"Renan",
        Descricao:"Passada" 
      },
      {
        id:11,
        Preco:20,
        Nome:"Renan",
        Descricao:"Passada" 
      },
    ]);
    const [Mostcar, setMostcar] = useState(false);
    const [Status, setStatus] = useState(false);
   
    useEffect(()=>{
      VerDados()
    }, []);

    useEffect(()=>{   
    
    }, []);
  
    useEffect(()=>{
   
     }, []);

    useEffect(() => {
      
       }, [])
    
    useEffect(()=>{
     
    }, []);

    const VerDados = async ()=>{
      var Id = await AsyncStorage.getItem('Id');
      var Conta = await AsyncStorage.getItem('Conta');
      console.log(Id)
      console.log(Conta)
     }
    const PegarProdutos = ()=>{
      Api.Produtos(IdEmp, setCat, setDadoEmp)
    }

  const PesquisandoItem = ()=>{
     var ItensPes = []
    for(let i in Cat){
      for(let j in Cat[i].Itens){
        if(Cat[i].Itens[j].Nome.toLowerCase().includes(Pesq.toLowerCase())){
          ItensPes.push(Cat[i].Itens[j])
        }

      }
    }
    setListPesq(ItensPes)

   }  
const FechaMenu = ()=>{
  setVerMenu(false)
}



const FechaCarrinho= ()=>{
  console.log("Abriur")
  setVerCar(!VerCar)
  setVerCar2(true)
}
const MudarSec = (item)=>{
  setPesq("")
  setListPesq([])
  setVerSec(item)
  setVerMenu(false)
}

const SomarItens = ()=>{
  var TotVal = 0
   var Quant = 0 
  for(let i in Itens){
    TotVal = TotVal + Itens[i].Preco*Itens[i].Quant;
    Quant = Quant+Itens[i].Quant;
  }
  setVerTotal(TotVal)
  setQuantTotal(Quant)
  setVerCar(true)
  setVerCar2(true)
}

    




   
  
    
    return (
      <View style={styles.Container0}>
        <Carrinho 
          VerTotal ={VerTotal}
          VerCar2={VerCar2} 
          VerCar={VerCar} 
          setVerCar={setVerCar} 
          FechaCarrinho={FechaCarrinho} 
          Cat={Cat} 
          MudarSec={MudarSec}  
          setModalVisible={setModalVisibleCar}
          />
      <ScrollView 
      style={styles.Container} 
      //Tirando a Barra de Rolagem  
      showsVerticalScrollIndicator={false}
     > 
   {/* Menu Inicio*/}
          <Menu 
          VerMenu2={VerMenu2} 
          VerMenu={VerMenu} 
          setVerMenu={setVerMenu} 
          FechaMenu={FechaMenu} 
          Cat={Cat} 
          MudarSec={MudarSec} 
          />  
 
      {/* Menu Fim*/}
    <View  style={styles.viewCentral}>
          <Mod1
          Status={Status}
          setModalVisibleCar={setModalVisibleCar}
          setItens={setItens}
          Itens={Itens}
          setQuantItem={setQuantItem}
          QuantItem={QuantItem}
          ItemMod={ItemMod}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
          />
          <ModalCar
          DadoEmp={DadoEmp}
          VerTotal={VerTotal}
          Itens={Itens}
          setItens={setItens}
          setModalVisible={setModalVisibleCar}
          modalVisible={modalVisibleCar}
          /> 
            <ModalInfo
          DadoEmp={DadoEmp}
          DiasAbert={DiasAbert}
          VerTotal={VerTotal}
          Itens={Itens}
          setItens={setItens}
          setModalVisible={setModalVisibleInfo}
          modalVisible={modalVisibleInfo}
          /> 
          <Topo 
            DadoEmp={DadoEmp}
           setMostcar={setMostcar}
          QuantTotal={QuantTotal}
          VerCar={VerCar}
          FechaCarrinho={FechaCarrinho}
          setVerMenu2={setVerMenu2}
          VerMenu={VerMenu}
          setVerMenu={setVerMenu}
          setModalVisible={setModalVisible}
          />
            
          <Banner
          Status={Status}
          DadoEmp={DadoEmp}
          setModalVisible={setModalVisibleInfo}
          />
          <Titulo
          DadoEmp={DadoEmp}
          />
          <Pesquisa 
          setPesquisa={setPesq}
          Pesquisa={Pesq}
          />
          <MenuHori 
           VerMenu2={VerMenu2} 
           VerMenu={VerMenu} 
           setVerMenu={setVerMenu} 
           FechaMenu={FechaMenu} 
           Cat={Cat} 
           MudarSec={MudarSec} 
          />
    </View>
    {Pesq.length > 0 ?
    <>
    {ListPesq.length > 0?
    <>
       <View style={styles.Container1}>
    {ListPesq.map((item, key)=>(
           <>
        
         <Item 
         setMostcar={setMostcar}
         setItemMod={setItemMod} 
         setModalVisible={setModalVisible}
         style={styles.item}
         Item={item}
         />
           
           </>
          ))}
          </View>
    </>
    :
    <>
     <Text style={{color:"red", marginLeft:40, marginTop: 10, fontSize:20}}>Nenhum item encontrado.</Text>
    </>

    }
    
    </>

    :
    <>
    {VerSec.length === 0?
      <>
       {  Cat.length > 0  ?
          <>
          {Cat.map((item, key)=>(
           <>
          <Secao
          setPesq={setPesq}
          setListPesq={setListPesq}
          style={styles.Sec0}
          Item={item}
          setVerSec = {setVerSec}
          Nome={item.Secao}
          />
          <Catalago
          setMostcar={setMostcar}
          setItemMod={setItemMod} 
          setModalVisible={setModalVisible}
          Itens={Itens}
          />
           
           </>
          ))}
          </>
          :
          <>
          <View style={{marginLeft:150, marginTop:100}}>
                <Image source={require('../assets/caregar.gif')}  style={styles.ImageVer3 } />
               
                </View>
          </>}
      
      </>

      :
      <>
      <View style={styles.Container1}>
      <Secao1
          Nome={VerSec.Secao}
          setVerSec = {setVerSec}
          />
  {VerSec.Itens.map((item, key)=>(
           <>
         <Item 
          setMostcar={setMostcar}
          setItemMod={setItemMod} 
         setModalVisible={setModalVisible}
         style={styles.item}
         Item={item}
         />
           
           </>
          ))}
      </View>
      
      </>

      }
    
    </>

    }
      
     
 
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