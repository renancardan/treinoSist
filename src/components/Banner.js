import React, { Component, useEffect, useContext, useState  } from 'react'
import { TextInput,  Text, View, StyleSheet, Button, TouchableHighlight, Image, Dimensions } from 'react-native'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';
import Api from '../Api';
const { width } = Dimensions.get('window');
const isTablet = width >= 768;

export default ({}) => {
  const [Abert, setAbert] = useState("");

  useEffect(()=>{
    VerDados()
  }, []);


  const VerDados = ()=>{
    Api.VendoDado(Abert, setAbert)
  }
    return (
      <View style={styles.Container}>
        <TouchableHighlight style={styles.Btn}>
          <View style={styles.imgContainer}>
          <Image
              style={styles.img}
              source={require("../assets/banner1.png")}
            />
             


            {/* <Animatable.Image
              animation="bounceIn"
              duration={10000}
              style={styles.img1}
              source={require("../assets/Automaserv.png")}
            /> */}
           

          </View>
        </TouchableHighlight>
      </View>
    );
}

const styles = StyleSheet.create({
    Container: {
      width: "100%",
      height: isTablet ? 15 * 16 : 9 * 16,
      borderRadius: "1rem",
      marginTop: "1.25rem",
      marginBottom: "1rem",
    },
    imgContainer: {
      width: "100%",
      height: "100%",
    },
    img: {
      width: "100%",
      height: "100%",
      borderRadius: "1rem",
    },
    img1: {
      width:  120,
      height: 30,
      position: 'absolute',
      top: 20, // ajuste a posição conforme necessário
      right:20, // ajuste a posição conforme necessário
      backgroundColor:"#fff",
      opacity:0.7,
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:10,
      flexDirection:"row"
    },
    Btn: {
      width: "100%",
      height: isTablet ? 15 * 16 : 9 * 16,
      borderRadius: "1rem",
    },
    Viewcent: {
      flexDirection: "column",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    ViewCentInt: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.25rem",
    },
    Txt1: {
      textAlign: "center",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      color: "#000",
    },
    Txt2: {
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
      fontWeight: "700",
    },
});
