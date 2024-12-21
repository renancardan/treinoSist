import React, { Component, useEffect, useContext, useState  } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView, Dimensions, TouchableHighlight, Modal, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../contexts/UserContext';
import * as Animatable from 'react-native-animatable';
import moment from 'moment';
import Api from '../Api';
import MenuHori from '../components/MenuHori';
import Menu from '../components/Menu';
import Topo from '../components/Topo';
import Banner from '../components/Banner';
import Pesquisa from '../components/Pesquisa';
import Secao from '../components/Secao';
import ListEmpresa from '../components/ListEmpresa';
import Titulo from '../components/Titulo';
import ModalCadEmp from '../components/ModalCadEmp';
import ModalCadRep from '../components/ModalCadRep';
import ModalCadCategori from '../components/ModalCadCategori'
import ModalEidtEmp from "../components/ModalEditEmp";
import ItemEmp from '../components/ItemEmp';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'

const { width } = Dimensions.get('window');

//import CityLogo from '../../assets/logomarca.svg';

export default () => {

    const navigation = useNavigation();
    const [VerMoldEditEmp, setVerMoldEditEmp] = useState(false);
    const [VerMoldCadEmp, setVerMoldCadEmp] = useState(false);
    const [VerMoldCadRep, setVerMoldCadRep] = useState(false);
    const [VerMoldCadCategori, setVerMoldCadCategori] = useState(false);
    const [IdEmp, setIdEmp] = useState();
    const [Acesso, setAcesso] = useState("");
    const [VerMenu, setVerMenu] = useState(false)
    const [VerMenu2, setVerMenu2] = useState(false)
    const [MenuAtivo, setMenuAtivo] = useState("")
    const [Menus, setMenus] = useState([
     
      // {
      //   Menu:"Represantantes",
      //   Ativo:false
      //  }, 
      // {
      //   Menu:"Empresa",
      //   Ativo:false
      //  }, 
      //  {
      //   Menu:"Treinadores",
      //   Ativo:false
      //  },
      //  {
      //   Menu:"Alunos",
      //   Ativo:false
      // },
      // {
      //   Menu:"Categorias",
      //   Ativo:false
      //  }, 
      //  {
      //   Menu:"Exercicios",
      //   Ativo:false
      //  }, 

    ]);
    const [EmpList, setEmpList] = useState([]);
   const [RepList, setRepList] = useState([]);
   const [Categorias, setCategorias] = useState([]);
   const [IdEmpresa, setIdEmpresa] = useState("");

   useEffect(()=>{
   
    console.log(MenuAtivo) 
  }, [MenuAtivo]);
    useEffect(()=>{
      CriarMenu()
      console.log(Acesso) 
    }, [Acesso]);
    useEffect(()=>{
      VerDados()
    }, []);
    useEffect(()=>{
      if(IdEmp){
      PegarLista()
      }
     
    }, [IdEmp, MenuAtivo]);

    const CriarMenu = ()=>{
       if(Acesso === "Adm"){
        setMenuAtivo("Empresa")
        setMenus([
          {
            Menu:"Empresa",
            Ativo:true
           },
           {
            Menu:"Alunos",
            Ativo:false
          },
          {
            Menu:"Categorias",
            Ativo:false
           }, 
           {
            Menu:"Exercicios",
            Ativo:false
           },
        ])
       } else if(Acesso === "Emp"){
        setMenuAtivo("Alunos")
        setMenus([
           {
            Menu:"Alunos",
            Ativo:true
          },
        
        ])
       }
    }

    const VerDados = async ()=>{
      var Id = await AsyncStorage.getItem('Id');
      var Conta = await AsyncStorage.getItem('Conta');
      console.log(Conta) 
      setIdEmp(Id)
      setAcesso(Conta)
     }
    const PegarLista = ()=>{
      if(MenuAtivo === "Empresa" ){
         Api.ListasEmp(IdEmp, setEmpList)
      } else if(MenuAtivo === "Categorias" ) {
        Api.ListasCategorias(IdEmp, setCategorias)
      }  else if(MenuAtivo === "Alunos" ) {
        
      }  else if(MenuAtivo === "Exercicios" ) {
        
      }
      
    }

    const FechaMenu = ()=>{
      setVerMenu(false)
    }
 
   
    const MudarSec = (item)=>{
      setVerMenu(false)
    }

    const IrPgRep = (item)=>{
      navigation.navigate("Representante", item);
    }

    const IrEmp = (item)=>{
      navigation.navigate("Empresa", item);
    }

    const AbriEditEmp = (Id)=>{
       setVerMoldEditEmp(true)
       setIdEmpresa(Id)
    }
    
    return (
      <View style={styles.Container0}>
       
      <ScrollView 
      style={styles.Container} 
      //Tirando a Barra de Rolagem  
      showsVerticalScrollIndicator={false}
     > 
  
      <Menu 
      VerMenu2={VerMenu2} 
      VerMenu={VerMenu} 
      setVerMenu={setVerMenu} 
      FechaMenu={FechaMenu} 
      Cat={Menus} 
      MudarSec={MudarSec} 
      /> 

     
  
 
      {/* Menu Fim*/}
    <View  style={styles.viewCentral}>
    <ModalEidtEmp 
         setVerMoldEditEmp={setVerMoldEditEmp}
         VerMoldEditEmp={VerMoldEditEmp}
         IdEmp={IdEmpresa}
         />
     
         <ModalCadEmp 
         setVerMoldCadEmp={setVerMoldCadEmp}
          VerMoldCadEmp={VerMoldCadEmp}
         />
           <ModalCadRep 
         setVerMoldCadRep={setVerMoldCadRep}
          VerMoldCadRep={VerMoldCadRep}
         />
          <ModalCadCategori
         setVerMoldCadCategori={setVerMoldCadCategori}
         VerMoldCadCategori={VerMoldCadCategori}
         />
          <Topo 
          setVerMenu={setVerMenu}
          setVerMenu2={setVerMenu2}
          />
            
          <Banner
         
          />
          <Titulo
         
          />
          {/* <Pesquisa 
          setPesquisa={setPesq}
          Pesquisa={Pesq}
          /> */}
         
            <MenuHori
           setMenuAtivo={setMenuAtivo}
           MenuAtivo={MenuAtivo}  
           Menus={Menus} 
          />

         
          
        </View>
       
      {MenuAtivo ===  "Empresa" &&
 <View style={styles.Container1}>
  
 <TouchableHighlight onPress={()=>setVerMoldCadEmp(true)} style={styles.Caixa3}>
        <AntDesign name="plus" size={50} color="black" />
    </TouchableHighlight>
{EmpList.length === 0 ?
<>
<Image source={require('../assets/Caregar.gif')}  style={styles.ImageVer3 } />
</>

:
<>
{EmpList.map((item, key)=>(
      <>
   <TouchableHighlight onPress={()=>IrEmp(item)} style={styles.CaixaItem} >
   <>
   <View style={styles.caixa1}>
   <Text style={styles.Txt1}>{item.NomeEmp}</Text>
    <Text style={styles.Txt2}>{item.Tel}</Text>
    <Text style={styles.Txt3}>Data Pg.: {moment(item.DataVenc).format('DD-MM-YYYY')}</Text>
   </View>
   <View style={styles.caixa2}>
   <View  style={{width:50, margin:5, borderRadius:5, height:20, alignItems:"center", justifyContent:"center"}}> 
    <Text style={{color:"#000",  }}>A: {item.QAlunos}</Text>
</View>
  {item.Ativo ?
    <View  style={{width:50, margin:5, borderRadius:5, height:20, alignItems:"center", justifyContent:"center"}}> 
      <Text style={{color:"#000", }}>Ati.</Text>
  </View>
  :
    <View  style={{width:50, margin:5, borderRadius:5, height:20, alignItems:"center", justifyContent:"center"}}> 
        <Text style={{color:"#000", }}>Des</Text>
    </View>
  } 

   </View>
   </>
   </TouchableHighlight>
      
      </>
     ))}
   </>

}
 </View>
      }
     {MenuAtivo === "Categorias" &&
 <View style={styles.Container1}>
  
 <TouchableHighlight onPress={()=>setVerMoldCadCategori(true)} style={styles.Caixa3}>
        <AntDesign name="plus" size={50} color="black" />
    </TouchableHighlight>
    {Categorias.length === 0 ?
<>
<Image source={require('../assets/Caregar.gif')}  style={styles.ImageVer3 } />
</>

:
<>
{Categorias.map((item, key)=>(
      <>
   <TouchableHighlight onPress={()=>IrPgRep(item)} style={styles.CaixaItem} >
   <>
   <View style={styles.caixa1}>
   <Text style={styles.Txt1}>{item.Nome}</Text>
    
   </View>
   <View style={styles.caixa2}>
   {item.Ativo?
    <View  style={{width:50, margin:5, borderRadius:5, height:20, alignItems:"center", justifyContent:"center"}}> 
      <Text style={{color:"#000", }}>Ativo</Text>
  </View>
  :
    <View  style={{width:50, margin:5, borderRadius:5, height:20, alignItems:"center", justifyContent:"center"}}> 
        <Text style={{color:"#000", }}>Desativo</Text>
    </View>
  } 
  

   </View>
   </>
   </TouchableHighlight>
      
      </>
     ))}
     </>

    }
 </View>
      }
 
      </ScrollView>
      </View>
    )
  }


const styles = StyleSheet.create({
  Caixa4:{
    width:200,
    height:20,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#ccc",
    borderRadius:10,
    marginLeft:10,
    marginRight:10,
    marginTop:10,
   } ,
  Caixa3:{
  width:200,
  height:80,
  alignItems:"center",
  justifyContent:"center",
  backgroundColor:"#ccc",
  borderRadius:10,
  marginLeft:10,
  marginRight:10,
  marginTop:10,
 } ,
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
   },
  CaixaItem:{
   width:200,
   height:80, 
   backgroundColor:"#ccc",
   marginRight:10,
   borderRadius:10,
   marginTop:10,
   display:"flex",
   flexDirection:"row",
   alignItems:"center",
   justifyContent:"space-between",
    },
    caixa1:{
      width:150,
      height:80,
      //backgroundColor:"blue",
      paddingLeft:10
    },
    caixa2:{
      width:50,
      height:80,
      //backgroundColor:"yellow",
      display:"flex",
      alignItems:"flex-end",
     paddingRight:10,
    },
  Container1:{
    marginLeft:15,
    marginRight:15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop:20,
    width:"100%",
    justifyContent:"center",
    alignItems:"center"
    
   },
  Btn:{
    width:200,
    height:80,
    flex:1,
    borderRadius:"0.75rem",
    position:"relative",
    marginRight:10,
    backgroundColor:"#ccc",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
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
    width:50,
    height:50,
    

   
  },
 
});