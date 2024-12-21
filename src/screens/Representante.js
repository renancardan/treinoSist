import React, { Component, useEffect, useContext, useState  } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView, Dimensions, TouchableHighlight, Modal, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../contexts/UserContext';
import * as Animatable from 'react-native-animatable';
import moment from 'moment';


import Topo from '../components/TopoRep';
import Caixa1 from '../components/Caixa1';
import ModalEdtRep from '../components/ModalEdtRep'


const { width } = Dimensions.get('window');
import Api from '../Api';
//import CityLogo from '../../assets/logomarca.svg';

export default ({route}) => {
    console.log(route.params.id)
    const navigation = useNavigation();
    const [IdRep, setIdRep] = useState(route.params.id)
    const [Nome, setNome] = useState(route.params.Nome)
    const [Tel, setTel] = useState(route.params.Tel)
    const [Infor, setInfor] = useState(route.params.Infor)
    const [AtivoRep, setAtivoRep] = useState(route.params.AtivoRep)
    const [AtivoAlu, setAtivoAlu] = useState(route.params.AtivoAlu)
    const [ContaAluno, setContaAluno] = useState(route.params.ContaAluno)
    const [DiaPg, setDiaPg] = useState(route.params.DiaPg)
    const [DataPg, setDataPg] = useState(route.params.DataPg)
    const [PorCentPg, setPorCentPg] = useState(route.params.PorCentPg);
   
    const [ModalEdit, setModalEdit] = useState(false)

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

    const Voltar = ()=>{
      navigation.goBack();
    }
   
  const AbrirEdit =()=>{
    setModalEdit(true)
  }
    
    return (
      <View style={styles.Container0}>
       
      <ScrollView 
      style={styles.Container} 
      //Tirando a Barra de Rolagem  
      showsVerticalScrollIndicator={false}
     > 
     <ModalEdtRep 
      Nome={Nome}
      setNome={setNome}
      Tel={Tel}
      setTel={setTel}
      IdRep={IdRep}
      setInfor={setInfor}
      Infor={Infor}
      ModalEdit={ModalEdit}
      setModalEdit={setModalEdit}
      AtivoRep={AtivoRep}
      setAtivoRep={setAtivoRep}
      ContaAluno={ContaAluno}
      setContaAluno={setContaAluno}
      DiaPg={DiaPg}
      setDiaPg={setDiaPg}
      setPorCentPg={setPorCentPg}
      PorCentPg={PorCentPg}
     />
 
      {/* Menu Fim*/}
    <View  style={styles.viewCentral}>
      
         
          
          <Topo 
           Voltar={ Voltar}
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
    <TouchableHighlight style={styles.CaixaText}>
               <>
              
                  <Text style={styles.Txt1}>Nome: </Text>
                  <Text style={styles.Txt2}>{Nome}</Text>
               </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.CaixaText}>
               <>
              
                  <Text style={styles.Txt1}>Telefone: </Text>
                  <Text style={styles.Txt2}>{Tel}</Text>
               </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.CaixaText}>
               <>
              
                  <Text style={styles.Txt1}>Dia do Mês: </Text>
                  <Text style={styles.Txt2}>{DiaPg}</Text>
               </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.CaixaText}>
               <>
              
                  <Text style={styles.Txt1}>%  de Pagamento: </Text>
                  <Text style={styles.Txt2}>{PorCentPg}%</Text>
               </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.CaixaText}>
               <>
              
                  <Text style={styles.Txt1}>Data do Pagamento: </Text>
                  <Text style={styles.Txt2}>{moment(DataPg).format('DD-MM-YYYY')}</Text>
               </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.CaixaText}>
               <>
              
                  <Text style={styles.Txt1}>Comentarios: </Text>
                  <Text style={styles.Txt2}>{Infor}</Text>
               </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.CaixaText}>
               <>
              
                  <Text style={styles.Txt1}>Conta Aluno: </Text>
                  {ContaAluno ?
                    <Text style={styles.Txt3}>ATIVADO</Text>
                  :
                    <Text style={styles.Txt4}>DESATIVADO</Text>
                  }
                  
               </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.CaixaText}>
               <>
              
                  <Text style={styles.Txt1}>Ativo: </Text>
                  {AtivoRep ?
                    <Text style={styles.Txt3}>ATIVADO</Text>
                  :
                    <Text style={styles.Txt4}>DESATIVADO</Text>
                  }
                  
               </>
            </TouchableHighlight>
          
              </View>
              <View style={styles.Container1}>

              <TouchableHighlight onPress={()=>AbrirEdit()} style={styles.Edit}>
              <Text style={styles.Txt5}>Editar</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.Excluir}>
              <Text style={styles.Txt5}>Excluir</Text>
              </TouchableHighlight>
              </View>
 
      </ScrollView>
      </View>
    )
  }


const styles = StyleSheet.create({
  Txt1:{
    color:"#000",
    fontWeight:"bold",
    fontSize:20,
   // backgroundColor:"green"
  },
  Txt2:{
  fontSize:20,
   color:"#000",
 
  },
  Txt3:{
    fontSize:20,
    color:"green",

  },
  Txt4:{
    fontSize:20,
    color:"red",
    
  },
  Txt5:{
    color:"#FFF",
    fontWeight:"bold",
    fontSize:20,
   // backgroundColor:"green"
  },
  CaixaText:{
    margin: '1%',
    position: 'relative',
    //backgroundColor:"#ccc",
    width:300,

    flexWrap:"wrap",
    flexDirection:"row",
    justifyContent:"flex-start",
    
   } ,
  Edit:{
    margin: '1%',
    position: 'relative',
    backgroundColor:"#0c9139",
    width:100,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10
    
   } ,
   Excluir:{
    margin: '1%',
    position: 'relative',
    backgroundColor:"#c32828",
    width:100,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10
    
   } ,
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