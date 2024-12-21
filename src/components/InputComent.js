import React from 'react';
//import styled from 'styled-components/native';
import  {  TextInputMask  }  from  'react-native-masked-text';
import { StyleSheet, View, Image } from 'react-native';
//52 -criando o os inputs padronizados para usar em varios lugares
// const InputArea = styled.View`
//     width: 100%;
//     height: 60px;
//     background-color: #fff;
//     flex-direction: row;
//     border-radius: 20px;
//     padding-left: 15px;
//     align-items: center;
//     margin-bottom: 15px;
// `;
// const Input = styled.TextInput`
//     flex: 1;
//     font-size: 16px;
//     color: #999;
//     margin-left: 10px;
// `;

export default ({IconSvg, placeholder, value, onChangeText, password, autoCapitalize, keyboardType,}) => {
    const Styles = StyleSheet.create ({
        masked :{
            flex: 1,
            fontSize: 15,
            color: '#000',
            marginLeft: 10,
            height:70,
            borderColor: "#fff",
            outlineStyle: 'none',
            borderColor:"#ccc",
            borderWidth:1,
            borderStyle:"solid",
            width:320,
           borderRadius:10,
           padding:10
        },
      
        image: {
            width:  20,
            height: 20,
             flex: 1 ,
             alignItems:"center",
             justifyContent: "center",
             
          },
    });

   
      

    return (
     
      
        <TextInputMask
        type={'custom'}
        options={{
          mask: '************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************', // ajuste o comprimento da máscara conforme necessário
        }}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                placeholder={placeholder}
                placeholderTextColor="#ccc"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
                style = {Styles.masked}
                multiline
                ma
            />
    
    );
}