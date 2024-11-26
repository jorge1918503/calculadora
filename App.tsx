import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';
import { GlobalStyles } from './src/themes/GlobalStyles';

export default function App() {

  const {formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito,
         operacionDividir, operacionMultiplicar, operacionRestar, operacionSumar,resultado  } = useCalculadora();

  return (
  
    <View style={GlobalStyles.container}>    
      <Pantalla numberOfLines={1} adjustsFontSizeToFit pantalla="pantallaPrincipal">{formula}</Pantalla>

      {formula === numeroAnterior ? (
        <Pantalla numberOfLines={1} adjustsFontSizeToFit pantalla="pantallaSecundaria"> </Pantalla>
      ) : (
        <Pantalla numberOfLines={1} adjustsFontSizeToFit pantalla="pantallaSecundaria">{numeroAnterior}</Pantalla>
      )}
      
     

      
      <StatusBar style="auto" />

    <View style={GlobalStyles.fila}>
      <BotonOperacion label='C' onPress={clean}></BotonOperacion>
      <BotonOperacion label='+/-' onPress={cambiarSigno}></BotonOperacion>
      <BotonOperacion label='del' onPress={borrarDigito}></BotonOperacion>
      <BotonOperacion label='/' onPress={operacionDividir}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='7' onPress={() =>construirNumero('7')}></BotonOperacion>
      <BotonOperacion label='8' onPress={() =>construirNumero('8')}></BotonOperacion>
      <BotonOperacion label='9' onPress={() =>construirNumero('9')}></BotonOperacion>
      <BotonOperacion label='x' onPress={operacionMultiplicar}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='4' onPress={() =>construirNumero('4')}></BotonOperacion>
      <BotonOperacion label='5' onPress={() =>construirNumero('5')}></BotonOperacion>
      <BotonOperacion label='6' onPress={() =>construirNumero('6')}></BotonOperacion>
      <BotonOperacion label='-' onPress={operacionRestar}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='1' onPress={() =>construirNumero('1')}></BotonOperacion>
      <BotonOperacion label='2' onPress={() =>construirNumero('2')}></BotonOperacion>
      <BotonOperacion label='3' onPress={() =>construirNumero('3')}></BotonOperacion>
      <BotonOperacion label='+' onPress={operacionSumar}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='0' onPress={() =>construirNumero('0')}></BotonOperacion>
      <BotonOperacion label='.' onPress={() =>construirNumero('.')}></BotonOperacion>
      <BotonOperacion label='=' onPress={resultado}></BotonOperacion>
    </View>
    </View>


  );
}

