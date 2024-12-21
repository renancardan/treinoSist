import React, { useState, useEffect } from 'react';
import {Dimensions, Image, View, Text, StyleSheet, Button, Modal, TouchableOpacity, ScrollView, TouchableHighlight  } from 'react-native';
import { Ionicons, Feather, AntDesign, FontAwesome6, FontAwesome5, FontAwesome} from '@expo/vector-icons'
import Campo from './CampoQuant';
import Telefone from './NumberTel'
import InputNome from './InputNome';
import InputComent from './InputComent';
import Api from '../Api'
import * as ImagePicker from 'expo-image-picker';

const { width, height,  } = Dimensions.get('window');
const App = ({setVerMoldCadEmp, VerMoldCadEmp, }) => {
   
    const [Nome, setNome] = useState("");
    const [Tel, setTel] = useState("");
    const [NomeEmp, setNomeEmp] = useState("");
    const [Email, setEmail] = useState("");
    const [Rua, setRua] = useState("");
    const [Numero, setNumero] = useState("");
    const [Bairro, setBairro] = useState("");
    const [Complemento, setComplemento] = useState("");
    const [Cidade, setCidade] = useState("");
    const [Estado, setEstado] = useState("");
    const [ValorMen, setValorMen] = useState("");
    const [ValorApp, setValorApp] = useState("");
    const [DiaMes, setDiaMes] = useState("");
    const [Coment, setComent] = useState("");
    const [Img, setImg] = useState("");
    const [IrImg, setIrImg] = useState(false);
    const [MsgErro1, setMsgErro1] = useState("");
    const [MsgSucesso, setMsgSucesso] = useState("");
    const [Carreg, setCarreg] = useState(false);

    const openImagePickerAsync = async () => {
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      setImg(pickerResult.uri);
      setIrImg(true)
      console.log(pickerResult.uri.split(','))
    }
   
    const ExcluirImg = ()=>{
      setImg("")
      setIrImg(false)
    }
  
  const AddicionadoEmp = ()=>{
     if(Tel.length == 14) { 
    if(Nome ){
      if(NomeEmp ){
        setCarreg(true)
        Api.EmppAdd(Nome, NomeEmp, Email, Tel, Rua, Numero, Bairro, Complemento, Cidade, Estado, Coment, ValorMen, ValorApp, DiaMes, Img, IrImg, setMsgErro1, setCarreg, setMsgSucesso)
      
    } else {
        setMsgErro1("Preencha o Nome da empresa!")
      } 

    } else {
      setMsgErro1("Preencha o nome do dono da empresa!")
    } 
    } else {
      setMsgErro1("O número de telefone está incompleto!")
    }
    }
     
    
   
  return (
    
     
      <Modal
        transparent={true}
        visible={VerMoldCadEmp}
        animationType="slide"
        onRequestClose={() =>setVerMoldCadEmp(false)}
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
             <TouchableHighlight  onPress={() => setVerMoldCadEmp(false)}style={styles.Container7}>
            <>
          <View >
          <AntDesign name="closecircleo" size={24} color="red" />
             </View>
          <Text style={styles.menuItem}>Cadastrar Empresa</Text>
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
          <Text style={{fontSize:17}}>Nome Emp.:</Text>
        <InputNome
                       
                       placeholder="Digite o Nome da Empresa" 
                       value={NomeEmp}
                       onChangeText={t=>setNomeEmp(t)}
                       autoCapitalize="none"
                       keyboardType={"default"}
                      
                   /> 
          </View>
          <View  style={styles.Container8}>
          <Text style={{fontSize:17}}>Email:</Text>
        <InputNome
                       
                       placeholder="Digite o Nome da Empresa" 
                       value={Email}
                       onChangeText={t=>setEmail(t)}
                       autoCapitalize="none"
                       keyboardType={"default"}
                      
                   /> 
          </View>
          <View  style={styles.Container8}>
        <Text style={{fontSize:17}}>Rua:</Text>
        <InputNome
                            
                            placeholder="Digite Nome da Rua" 
                            value={Rua}
                            onChangeText={t=>setRua(t)}
                            autoCapitalize="none"
                            keyboardType={"default"}
                            
                        /> 
                </View>
                <View  style={styles.Container8}>
  <Text style={{fontSize:17}}>Numero:</Text>
  <InputNome
                       
                       placeholder="Digite Numero" 
                       value={Numero}
                       onChangeText={t=>setNumero(t)}
                       autoCapitalize="none"
                       keyboardType={"default"}
                      
                   /> 
          </View>
          <View  style={styles.Container8}>
  <Text style={{fontSize:17}}>Bairro:</Text>
  <InputNome
                       
                       placeholder="Digite Nome do Bairro" 
                       value={Bairro}
                       onChangeText={t=>setBairro(t)}
                       autoCapitalize="none"
                       keyboardType={"default"}
                      
                   /> 
          </View>
          <View  style={styles.Container8}>
  <Text style={{fontSize:17}}>Complemeto:</Text>
  <InputNome
                       
                       placeholder="Digite Complemento" 
                       value={Complemento}
                       onChangeText={t=>setComplemento(t)}
                       autoCapitalize="none"
                       keyboardType={"default"}
                      
                   /> 
          </View>
          <View  style={styles.Container8}>
  <Text style={{fontSize:17}}>Cidade:</Text>
  <InputNome
                       
                       placeholder="Digite Nome da Cidade" 
                       value={Cidade}
                       onChangeText={t=>setCidade(t)}
                       autoCapitalize="none"
                       keyboardType={"default"}
                      
                   /> 
          </View>
          <View  style={styles.Container8}>
  <Text style={{fontSize:17}}>Estado:</Text>
  <InputNome
                       
                       placeholder="Digite Nome do Estado" 
                       value={Estado}
                       onChangeText={t=>setEstado(t)}
                       autoCapitalize="none"
                       keyboardType={"default"}
                      
                   /> 
          </View>
          <View  style={styles.Container8}>
         <Text style={{fontSize:17}}>Mesalidade:</Text>
           <InputNome
                       
                       placeholder="Digite o Valor da Mensalidade" 
                       value={ValorMen}
                       onChangeText={t=>setValorMen(t)}
                       autoCapitalize="none"
                       keyboardType={"default"}
                      
                   /> 
          </View>
          <View  style={styles.Container8}>
         <Text style={{fontSize:17}}>Valor App:</Text>
           <InputNome
                       
                       placeholder="Digite o Valor da Mensalidade" 
                       value={ValorApp}
                       onChangeText={t=>setValorApp(t)}
                       autoCapitalize="none"
                       keyboardType={"default"}
                      
                   /> 
          </View>
          <View  style={styles.Container8}>
         <Text style={{fontSize:17}}>Dia do Mês:</Text>
           <InputNome
                       
                       placeholder="Digite o Dia da Mensalidade" 
                       value={DiaMes}
                       onChangeText={t=>setDiaMes(t)}
                       autoCapitalize="none"
                       keyboardType={"default"}
                      
                   /> 
          </View>
          <View style={styles.Container12}>
          {Img !== ""?
                     <>
                     
                     <Image  source={{uri:Img }}  style={{ width:200, height:200 }} />
                      <TouchableHighlight style={{width:250, height:50, backgroundColor:"red", borderRadius:5, margin:20, flex:1, justifyContent:"center", alignItems:"center" }} onPress={()=>ExcluirImg()}>
                              <Text  style={{ margin:10, fontWeight:"bold",  fontSize:16, color:"#FFF"  }}>Excluir</Text>
                        </TouchableHighlight>
                       
                     </>
                     :
                      <>
                      <View style={{ width:300, height:200, flex:1, display:"flex", margin:10, justifyContent:"center", alignItems:"center", }}>
                      <FontAwesome name="camera" size={100} color="black" />
                      </View>
                      <TouchableHighlight style={{width:250, height:50, backgroundColor:"#00A859", borderRadius:5, margin:20, flex:1, justifyContent:"center", alignItems:"center" }} onPress={()=>openImagePickerAsync()}>
                              <Text  style={{ margin:10, fontWeight:"bold",  fontSize:16, color:"#FFF"  }}>Procurar Imagem</Text>
                        </TouchableHighlight>
                     </>
                     }
                     </View>
  <View style={styles.Container12}>

  <InputComent 
               placeholder="Digite Observação caso Tenha..." 
               value={Coment}
               onChangeText={t=>setComent(t)}
               autoCapitalize="none"
               keyboardType={"default"}
              
            
            />
          </View>
          {MsgErro1 &&
        <View  style={styles.Container12}>
  <Text style={{fontSize:10, color:"red" }}>{MsgErro1}</Text>

          </View>
        }
   <TouchableHighlight onPress={()=>AddicionadoEmp()} style={styles.Container9}>
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
});

export default App;