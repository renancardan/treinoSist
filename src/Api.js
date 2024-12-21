import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';
import 'firebase/firebase-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import firebaseConfig from './services/firebase';

const firebaseApp =  firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage = firebaseApp.storage();
var URL = "https://api.z-api.io/instances/3A9D95BC49F730DF458B76215AA2744C/token/A2A3E65C2FE0E21916E8A2AE"
var SITEOFICIAL = "https://treinoSitem.com"
var SITETREINO = "https://treinoSitem.com"
export default {
  DadosEmp: async (IdEmp, setNome, setTel, setNomeEmp, setEmail, setRua, setNumero, setBairro, setComplemento, setCidade, setEstado, setValorMen, setValorApp, setDiaMes, setComent, setImg, setIrImg,) => {
    console.log(IdEmp)
    await firestore.collection("users").doc(IdEmp)  
    .get().then(async(doc) => {
    setNome(doc.data().Nome)
    setTel(doc.data().Telefone)
    setNomeEmp(doc.data().NomeEmp)
    setEmail(doc.data().Email)
    setRua(doc.data().Rua)
    setNumero(doc.data().Numero)
    setBairro(doc.data().Bairro)
    setComplemento(doc.data().Complemento)
    setCidade(doc.data().Cidade)
    setEstado(doc.data().Estado)
    setValorMen(doc.data().Bairro)
    setValorApp(doc.data().Bairro)
    setDiaMes(doc.data().DiaMes)
    setComent(doc.data().Coment)
    setImg(doc.data().LogoMarca)
    })

   },
  VendoDado: async (Abert, setAbert) => {
    await firestore.collection("users").doc("EdAizXk1YwGwA0keUbwT")  
    .get().then(async(doc) => {
    
 
    })

   },
   ListasCategorias: async (IdEmp, setCategorias ) => {
    
    await firestore.collection("Categorias")
    .where("Conta", "==", "Emp",)
    .onSnapshot(async (querySnapshot) => {
      var res1 = [] 
      querySnapshot.forEach((doc) => { 
        res1.push({
          id:doc.id,
          Ativo:doc.data().Ativo,
          Nome:doc.data().Nome,
          
        })
      })
      console.log(" entrou em categoria")
      console.log(res1)
      setCategorias(res1)
    })
   },
   ListasEmp: async (IdEmp, setEmpList ) => {
    
 
    // await firestore.collection("users")
    // .where("IdAdm", "==", IdEmp,)
    // .onSnapshot(async (querySnapshot) => {
    //   var res = [] 
    //   querySnapshot.forEach((doc) => { 
    //     res.push({
    //       id:doc.id,
    //       Nome:doc.data().Nome,
    //       Tel:doc.data().Telefone,
    //       Infor:doc.data().Comentario,
    //       QEmpresas:0,
    //       QAlunos:0, 
    //       AtivoRep:doc.data().AtivoRep,
    //       AtivoAlu:doc.data().AtivoAlu,
    //       AtivoEmp:doc.data().AtivoEmp,
    //       AtivoTre:doc.data().AtivoTre,
    //       ContaAluno:doc.data().ContaAluno,
    //       DiaPg:doc.data().DiaPg,
    //       DataPg:doc.data().DataPg,
    //       PorCentPg:doc.data().PorCentPg,
    //     })
    //   })
  
    //   setRepList(res)
    // })

    await firestore.collection("users")
    .where("Conta", "==", "Emp",)
    .onSnapshot(async (querySnapshot) => {
      var res1 = [] 
      querySnapshot.forEach((doc) => { 
        res1.push({
          id:doc.id,
          NomeEmp:doc.data().NomeEmp,
          Tel:doc.data().Telefone,
          DataVenc:doc.data().DataPg,
          QTrenadores:0,
          QAlunos:0,
          Ativo:doc.data().Ativo,
          Nome:doc.data().Nome,
          Email:doc.data().Email,
          Rua:doc.data().Rua,
          Numero:doc.data().Numero,
          Bairro:doc.data().Bairro,
          Complemento:doc.data().Complemento,
          Cidade:doc.data().Cidade,
          Estado:doc.data().Estado,
          ValorMen:doc.data().ValorMen,
          ValorApp:doc.data().ValorApp,
          DiaMes:doc.data().DiaMes,
          Coment:doc.data().Coment,
          Img:doc.data().LogoMarca,
        })
      })
      console.log(res1)
      setEmpList(res1)
    })
   },
  EntrandoSenha: async (Tel, Senha,   setMsgErro1, setCarreg, IndoPraHome) => {
    //IndoPraHome()
    var Id = "";
    var Conta = "";
    var Cod = parseInt(Senha)
    await firestore.collection("users")
    .where("Telefone", "==", Tel)
    .where("Senha", "==", Cod)
    .get().then(async(querySnapshot) => {
     
      if(querySnapshot.size !== 0){
         IndoPraHome()
        querySnapshot.forEach(async(doc) => {
           Id = doc.id
           Conta = doc.data().Conta          
           console.log(doc.id) 
        
        })
        console.log(Conta) 
        await AsyncStorage.setItem('Conta', Conta); 
        await AsyncStorage.setItem('Id', Id); 
        setCarreg(false)
        setMsgErro1(false)
      } else {
        setCarreg(false)
        setMsgErro1(true)
      }
        });
  },

 EntrandoWhats: async (Tel, setVerCod, setMsgErro1, setCarreg) => {
  var last = Math.floor((Math.random() * (9999 - 1000)) + 1000);
  await firestore.collection("users")
  .where("Telefone", "==", Tel)
  .get().then( async (querySnapshot) => {
    console.log(querySnapshot.size);
if(querySnapshot.size !== 0){
querySnapshot.forEach(async (doc) => {
   firestore.collection("users")
            .doc(doc.id)
            .update({
              Senha: last,
          }) .then( async() => {
            var ver = Tel.replace("(", "55");
            var par1 = ver.replace(")", "");
            var par3 = par1.replace("-", "");
            var data={
              "phone": par3,
              "message": "Código de entrada: "+last,
            }   
            const req = await fetch(URL+"/send-messages", 
            {
                  method: 'POST',
                  headers:{
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data),
                });
              
                const json = await req.json(); 
               setVerCod(true)
               setCarreg(false) 
                
                
          })
          .catch((error) => {
          
            
          });

  })
} else {
  setMsgErro1(true)
  setCarreg(false) 
}

})
   
  },

  EmppAdd: async (Nome, NomeEmp, Email, Tel, Rua, Numero, Bairro, Complemento, Cidade, Estado, Coment, ValorMen, ValorApp, DiaMes, Img, IrImg, setMsgErro1, setCarreg, setMsgSucesso ) => {
    var Id = await AsyncStorage.getItem('Id');
    var DiaPag = 0
    var currentDate = ""
    var now =new Date();
    var Dia = 0;
    var Mes = 0 ;
    var Ano = 0
    if(DiaMes){
     
        Dia = parseInt(DiaMes)
      if(now.getMonth() === 11){
         Mes = 1;
        Ano = now.getFullYear()+1;
      } else {
         Mes = (now.getMonth()+2);
        Ano = now.getFullYear();
      }
      Dia = Dia < 10 ? '0'+Dia : Dia;
      Mes = Mes < 10 ? '0'+Mes : Mes;
      currentDate = Ano+'/'+Mes+'/'+Dia;
      DiaPag = moment(currentDate+" 23:59:00.000").unix()*1000
      console.log(DiaPag)
     
    } else {
      DiaPag = new Date().getTime()
    }
    await firestore.collection("users")
    .where("Telefone", "==", Tel)
    .get().then( async (querySnapshot) => {
     
  if(querySnapshot.size !== 0){
    setCarreg(false)
     setMsgErro1("Já existe uma conta com este número de telefone!")
    
   } else {
    await firestore.collection("users").add({
      Nome:Nome,
      NomeEmp:NomeEmp,
      Telefone:Tel,
      Email:Email,
      Rua:Rua,
      Numero:Numero,
      Bairro:Bairro,
      Complemento:Complemento,
      Cidade:Cidade,
      Estado:Estado,
      Coment:Coment,
      DataCadast:new Date().getTime(),
      DiaMes: DiaMes,
      DataPg:DiaPag,
      IdRep:Id,
      Ativo:true,
      LogoMarca:Img,
      Conta:"Emp",
      ValorMen:ValorMen,
      ValorApp:ValorApp,
   })
   .then(async (docRef) => {
    setCarreg(false)
    setMsgSucesso("Empresa Criado com Sucesso!")
    var ver = Tel.replace("(", "55");
    var par1 = ver.replace(")", "");
    var par3 = par1.replace("-", "");
    var data={
      "phone": par3,
      "message": "Site de Acesso: "+SITEOFICIAL,
    }   
    const req = await fetch(URL+"/send-messages", 
    {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
        });
    }) 

   }

})
    
   

  },
  EmppEditPg: async (IdEmp, DiaMes, setMsgErro1, setCarreg, setMsgSucesso ) => {
    var Id = await AsyncStorage.getItem('Id');
    var DiaPag = 0
    var currentDate = ""
    var now =new Date();
    var Dia = 0;
    var Mes = 0 ;
    var Ano = 0
    if(DiaMes){
     
        Dia = parseInt(DiaMes)
      if(now.getMonth() === 11){
         Mes = 1;
        Ano = now.getFullYear()+1;
      } else {
         Mes = (now.getMonth()+2);
        Ano = now.getFullYear();
      }
      Dia = Dia < 10 ? '0'+Dia : Dia;
      Mes = Mes < 10 ? '0'+Mes : Mes;
      currentDate = Ano+'/'+Mes+'/'+Dia;
      DiaPag = moment(currentDate+" 23:59:00.000").unix()*1000
      console.log(DiaPag)
     
    } else {
      DiaPag = new Date().getTime()
    }
  
    await firestore.collection("users").doc(IdEmp).update({
      DiaMes: DiaMes,
      DataPg:DiaPag,
   })
   .then(async (docRef) => {
    setCarreg(false)
    setMsgSucesso("Empresa Editada com Sucesso!")
    // var ver = Tel.replace("(", "55");
    // var par1 = ver.replace(")", "");
    // var par3 = par1.replace("-", "");
    // var data={
    //   "phone": par3,
    //   "message": "Site de Acesso: "+SITEOFICIAL,
    // }   
    // const req = await fetch(URL+"/send-messages", 
    // {
    //       method: 'POST',
    //       headers:{
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(data),
    //     });
    }) 

 
    
   

  },
  EmppEdit: async (IdEmp, Nome, NomeEmp, Email, Tel, Rua, Numero, Bairro, Complemento, Cidade, Estado, Coment, ValorMen, ValorApp, DiaMes, Img, IrImg, Ativo, setMsgErro1, setCarreg, setMsgSucesso ) => {
    var Id = await AsyncStorage.getItem('Id');
    var DiaPag = 0
    var currentDate = ""
    var now =new Date();
    var Dia = 0;
    var Mes = 0 ;
    var Ano = 0
   
  
    await firestore.collection("users").doc(IdEmp).update({
      Nome:Nome,
      NomeEmp:NomeEmp,
      Email:Email,
      Rua:Rua,
      Numero:Numero,
      Bairro:Bairro,
      Complemento:Complemento,
      Cidade:Cidade,
      Estado:Estado,
      Coment:Coment,
      LogoMarca:Img,
      Conta:"Emp",
      ValorMen:ValorMen,
      ValorApp:ValorApp,
      Ativo:Ativo,
   })
   .then(async (docRef) => {
    setCarreg(false)
    setMsgSucesso("Empresa Editada com Sucesso!")
    // var ver = Tel.replace("(", "55");
    // var par1 = ver.replace(")", "");
    // var par3 = par1.replace("-", "");
    // var data={
    //   "phone": par3,
    //   "message": "Site de Acesso: "+SITEOFICIAL,
    // }   
    // const req = await fetch(URL+"/send-messages", 
    // {
    //       method: 'POST',
    //       headers:{
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(data),
    //     });
    }) 

 
    
   

  },
  EmppEditTel: async (IdEmp, Nome, NomeEmp, Email, Tel, Rua, Numero, Bairro, Complemento, Cidade, Estado, Coment, ValorMen, ValorApp, DiaMes, Img, IrImg, setMsgErro1, setCarreg, setMsgSucesso ) => {
    var Id = await AsyncStorage.getItem('Id');
    var DiaPag = 0
    var currentDate = ""
    var now =new Date();
    var Dia = 0;
    var Mes = 0 ;
    var Ano = 0
    if(DiaMes){
     
        Dia = parseInt(DiaMes)
      if(now.getMonth() === 11){
         Mes = 1;
        Ano = now.getFullYear()+1;
      } else {
         Mes = (now.getMonth()+2);
        Ano = now.getFullYear();
      }
      Dia = Dia < 10 ? '0'+Dia : Dia;
      Mes = Mes < 10 ? '0'+Mes : Mes;
      currentDate = Ano+'/'+Mes+'/'+Dia;
      DiaPag = moment(currentDate+" 23:59:00.000").unix()*1000
      console.log(DiaPag)
     
    } else {
      DiaPag = new Date().getTime()
    }
    await firestore.collection("users")
    .where("Telefone", "==", Tel)
    .get().then( async (querySnapshot) => {
     
  if(querySnapshot.size !== 0){
    setCarreg(false)
     setMsgErro1("Já existe uma conta com este número de telefone!")
    
   } else {
    await firestore.collection("users").add({
      Nome:Nome,
      NomeEmp:NomeEmp,
      Telefone:Tel,
      Email:Email,
      Rua:Rua,
      Numero:Numero,
      Bairro:Bairro,
      Complemento:Complemento,
      Cidade:Cidade,
      Estado:Estado,
      Coment:Coment,
      DataCadast:new Date().getTime(),
      DiaMes: DiaMes,
      DataPg:DiaPag,
      IdRep:Id,
      Ativo:true,
      LogoMarca:Img,
      Conta:"Emp",
      ValorMen:ValorMen,
      ValorApp:ValorApp,
   })
   .then(async (docRef) => {
    setCarreg(false)
    setMsgSucesso("Empresa Criado com Sucesso!")
    var ver = Tel.replace("(", "55");
    var par1 = ver.replace(")", "");
    var par3 = par1.replace("-", "");
    var data={
      "phone": par3,
      "message": "Site de Acesso: "+SITEOFICIAL,
    }   
    const req = await fetch(URL+"/send-messages", 
    {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
        });
    }) 

   }

})
    
   

  },
  RepAdd: async (Nome, Tel, Coment, DiaMes, PorCentPg, setMsgErro1, setCarreg, setMsgSucesso) => {
    var Id = await AsyncStorage.getItem('Id');
    var DiaPag = 0
    var currentDate = ""
    var now =new Date();
    var Dia = 0;
    var Mes = 0 ;
    var Ano = 0
    if(DiaMes){
     
          Dia = parseInt(DiaMes)
      if(now.getMonth() === 11){
         Mes = 1;
        Ano = now.getFullYear()+1;
      } else {
         Mes = (now.getMonth()+2);
        Ano = now.getFullYear();
      }
      Dia = Dia < 10 ? '0'+Dia : Dia;
      Mes = Mes < 10 ? '0'+Mes : Mes;
      currentDate = Ano+'/'+Mes+'/'+Dia;
      DiaPag = moment(currentDate+" 23:59:00.000").unix()*1000
  
    } else {
      DiaPag = new Date().getTime()
    }

    await firestore.collection("users")
    .where("Telefone", "==", Tel)
    .get().then( async (querySnapshot) => {
     
  if(querySnapshot.size !== 0){
    setCarreg(false)
     setMsgErro1("Já existe uma conta com este número de telefone!")
    
   } else {
    await firestore.collection("users").add({
      Nome:Nome,
      NomeEmp:Nome,
      Telefone:Tel,
      DataCadast:new Date().getTime(),
      Comentario:Coment,
      Conta:{Adm:false, Rep:false, Emp:true, Tre:true, Alu:true},
      Status:"Rep",
      IdAdm:Id,
      IdRep:"",
      IdEmp:"",
      IdTre:"",
      IdAlu:"",
      AtivoRep:true,
      AtivoEmp:false,
      AtivoTre:false,
      AtivoAlu:false,
      ContaAluno:false,
      DiaPg:DiaMes,
      DataPg:DiaPag,
      PorCentPg:PorCentPg
   })
   .then(async(docRef) => {
    setCarreg(false)
    setMsgSucesso("Representante Criado com Sucesso!")
    var ver = Tel.replace("(", "55");
    var par1 = ver.replace(")", "");
    var par3 = par1.replace("-", "");
    var data={
      "phone": par3,
      "message": "Site de Acesso: "+SITEOFICIAL,
    }   
    const req = await fetch(URL+"/send-messages", 
    {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
        });
    }) 

   }

})
    
   

  },
  RepEdit: async (IdRep,TelMud, Nome, Tel, AtivoRep, ContaAluno, Infor, DiaPg, PorCentPg, setMsgErro1, setCarreg, setMsgSucesso) => {
    var Id = await AsyncStorage.getItem('Id');
    var DiaPag = 0
    var currentDate = ""
    var now =new Date();
    var Dia = 0;
    var Mes = 0 ;
    var Ano = 0
    if(DiaPg){
     
          Dia = parseInt(DiaPg)
      if(now.getMonth() === 11){
         Mes = 1;
        Ano = now.getFullYear()+1;
      } else {
         Mes = (now.getMonth()+2);
        Ano = now.getFullYear();
      }
      Dia = Dia < 10 ? '0'+Dia : Dia;
      Mes = Mes < 10 ? '0'+Mes : Mes;
      currentDate = Ano+'/'+Mes+'/'+Dia;
      DiaPag = moment(currentDate+" 23:59:00.000").unix()*1000
  
    } else {
      DiaPag = new Date().getTime()
    }

    if(Tel === TelMud){
      await firestore.collection("users").doc(IdRep)
      .update({
       Nome:Nome,
       Telefone:Tel,
       Coment:Infor,
       AtivoRep:AtivoRep,
       DiaPg:DiaPg,
       DataPg:DiaPag,
       ContaAluno:ContaAluno,
      
    })
    .then((docRef) => {
     setCarreg(false)
     setMsgSucesso("Representante Editado com Sucesso!")
     }).catch((error) => {
      setCarreg(false)
      setMsgSucesso("Representante Não Foi Editado Ocorreu Algum Erro!")           
     }); 

    } else {

    
    await firestore.collection("users")
    .where("Telefone", "==", Tel)
    .get().then( async (querySnapshot) => {
     
  if(querySnapshot.size !== 0){
    setCarreg(false)
     setMsgErro1("Já existe uma conta com este número de telefone!")
    
   } else {
    await firestore.collection("users").doc(IdRep)
     .update({
      Nome:Nome,
      Telefone:Tel,
      Coment:Infor,
      AtivoRep:AtivoRep,
      DiaPg:DiaPg,
      DataPg:DiaPag,
      ContaAluno:ContaAluno,
     
   })
   .then((docRef) => {
    setCarreg(false)
    setMsgSucesso("Representante Criado com Sucesso!")
    }).catch((error) => {
      setCarreg(false)
      setMsgSucesso("Representante Não Foi Editado Ocorreu Algum Erro!")           
     }); 

   }

    })
   }
   

  },

}