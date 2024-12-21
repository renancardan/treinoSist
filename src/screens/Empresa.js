import React, { Component, useEffect, useContext, useState  } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView, Dimensions, TouchableHighlight, Modal, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../contexts/UserContext';
import * as Animatable from 'react-native-animatable';
import moment from 'moment';


import Topo from '../components/TopoRep';
import Caixa1 from '../components/Caixa1';

import ModalEidtEmp from "../components/ModalEditEmp";
import ModalEditEmpPg from "../components/ModalEditEmpPg"

const { width } = Dimensions.get('window');
import Api from '../Api';
//import CityLogo from '../../assets/logomarca.svg';

export default ({route}) => {
    console.log(route.params.id)
    const navigation = useNavigation();
    const [VerMoldEditEmp, setVerMoldEditEmp] = useState(false);
    const [VerMoldEditEmpPg, setVerMoldEditEmpPg] = useState(false);
    const [IdEmp, setIdEmp] = useState(route.params.id)
    const [Nome, setNome] = useState(route.params.Nome)
    const [Tel, setTel] = useState(route.params.Tel)
    const [NomeEmp, setNomeEmp] = useState(route.params.NomeEmp);
    const [Email, setEmail] = useState(route.params.Email);
    const [Rua, setRua] = useState(route.params.Rua);
    const [Numero, setNumero] = useState(route.params.Numero);
    const [Bairro, setBairro] = useState(route.params.Bairro);
    const [Complemento, setComplemento] = useState(route.params.Complemento);
    const [Cidade, setCidade] = useState(route.params.Cidade);
    const [Estado, setEstado] = useState(route.params.Estado);
    const [ValorMen, setValorMen] = useState(route.params.ValorMen);
    const [ValorApp, setValorApp] = useState(route.params.ValorApp);
    const [DiaMes, setDiaMes] = useState(route.params.DiaMes);
    const [Coment, setComent] = useState(route.params.Coment);
    const [Img, setImg] = useState(route.params.Img);
    const [DiaVenc, setDiaVenc] = useState(route.params.DataVenc);
    const [Ativo, setAtivo] = useState(route.params.Ativo);
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
     {/* <ModalEdtRep 
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
     /> */}
 
      {/* Menu Fim*/}
    <View  style={styles.viewCentral}>
      
    <ModalEidtEmp 
         setVerMoldEditEmp={setVerMoldEditEmp}
         VerMoldEditEmp={VerMoldEditEmp}
         IdEmp={IdEmp}
         setNome={setNome}
         Nome={Nome}
         setNomeEmp={setNomeEmp}
         NomeEmp={NomeEmp}
         Email={Email}
         setEmail={setEmail}
         Rua={Rua}
         setRua={setRua}
         setNumero={setNumero}
         Numero={Numero}
         setBairro={setBairro}
         Bairro={Bairro}
         Complemento={Complemento}
         setComplemento={setComplemento}
         Cidade={Cidade}
         setCidade={setCidade}
         Estado={Estado}
         setEstado={setEstado}
         ValorMen={ValorMen}
         setValorMen={setValorMen}
         ValorApp={ValorApp}
         setValorApp={setValorApp}
         DiaMes={DiaMes}
         setDiaMes={setDiaMes}
         Coment={Coment}
         setComent={setComent}
         Img={Img}
         setImg={setImg}
         Ativo={Ativo}
         setAtivo={setAtivo}
         />
         <ModalEditEmpPg 
         setVerMoldEditEmpPg={setVerMoldEditEmpPg}
         VerMoldEditEmpPg={VerMoldEditEmpPg}
         IdEmp={IdEmp}
         DiaMes={DiaMes}
         setDiaMes={setDiaMes}
      
         />  
          <Topo 
           Voltar={ Voltar}
           Titulo={"Empresa"}
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
              
                  <Text style={styles.Txt1}>Nome da Empresa: </Text>
                  <Text style={styles.Txt2}>{NomeEmp}</Text>
               </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.CaixaText}>
               <>
              
                  <Text style={styles.Txt1}>Email: </Text>
                  <Text style={styles.Txt2}>{Email}</Text>
               </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.CaixaText}>
               <>
              
                  <Text style={styles.Txt1}>Rua: </Text>
                  <Text style={styles.Txt2}>{Rua}</Text>
               </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.CaixaText}>
               <>
              
                  <Text style={styles.Txt1}>Numero: </Text>
                  <Text style={styles.Txt2}>{Numero}</Text>
               </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.CaixaText}>
               <>
              
                  <Text style={styles.Txt1}>Bairro: </Text>
                  <Text style={styles.Txt2}>{Bairro}</Text>
               </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.CaixaText}>
               <>
              
                  <Text style={styles.Txt1}>Complemento: </Text>
                  <Text style={styles.Txt2}>{Complemento}</Text>
               </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.CaixaText}>
               <>
              
                  <Text style={styles.Txt1}>Cidade: </Text>
                  <Text style={styles.Txt2}>{Cidade}</Text>
               </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.CaixaText}>
               <>
              
                  <Text style={styles.Txt1}>Estado: </Text>
                  <Text style={styles.Txt2}>{Estado}</Text>
               </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.CaixaText}>
               <>
              
                  <Text style={styles.Txt1}>Mensalidade: </Text>
                  <Text style={styles.Txt2}>{ValorMen}</Text>
               </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.CaixaText}>
               <>
              
                  <Text style={styles.Txt1}>Valor App: </Text>
                  <Text style={styles.Txt2}>{ValorApp}</Text>
               </>
            </TouchableHighlight>
            
            <TouchableHighlight style={styles.CaixaText}>
               <>
              
                  <Text style={styles.Txt1}>Dia do Mês: </Text>
                  <Text style={styles.Txt2}>{DiaMes}</Text>
               </>
            </TouchableHighlight>
          
            <TouchableHighlight style={styles.CaixaText}>
               <>
              
                  <Text style={styles.Txt1}>Data do Pagamento: </Text>
                  <Text style={styles.Txt2}>{moment(DiaVenc).format('DD-MM-YYYY')}</Text>
               </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.CaixaText}>
               <>
              
                  <Text style={styles.Txt1}>Comentarios: </Text>
                  <Text style={styles.Txt2}>{Coment}</Text>
               </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.CaixaText}>
               <>
              
                  <Text style={styles.Txt1}>Conta: </Text>
                  {Ativo ?
                    <Text style={styles.Txt3}>ATIVADO</Text>
                  :
                    <Text style={styles.Txt4}>DESATIVADO</Text>
                  }
                  
               </>
            </TouchableHighlight>
         
          
              </View>
              <View style={styles.Container1}>
              <TouchableHighlight onPress={()=>setVerMoldEditEmpPg(true)} style={styles.Pagar}>
              <Text style={styles.Txt5}>Pagar</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={()=>setVerMoldEditEmpPg(true)} style={styles.Edit}>
              <Text style={styles.Txt5}>Editar Data Pg</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={()=>setVerMoldEditEmp(true)} style={styles.Edit}>
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
   Pagar:{
      margin: '1%',
      position: 'relative',
      backgroundColor:"#4FC2E3",
      padding:10,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:10
      
     } ,
  Edit:{
    margin: '1%',
    position: 'relative',
    backgroundColor:"#0c9139",
    padding:10,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10
    
   } ,
   Excluir:{
    margin: '1%',
    position: 'relative',
    backgroundColor:"#c32828",
    padding:10,
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