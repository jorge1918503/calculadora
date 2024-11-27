import { StyleSheet } from 'react-native';
import { Color } from './Color';

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.fondo,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },
    fila: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom: 16,
        paddingHorizontal: 10,
        width: '100%',
    },
    boton: {
        width: 80,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 400,
        backgroundColor: Color.botonNumeros,
        borderColor: Color.negro,
        color: Color.negro,
        borderWidth: 2,
        borderRadius: 40,
    },
    boton0: {
        width: 160,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 400,
        backgroundColor: Color.botonNumeros,
        borderColor: Color.negro,
        color: Color.negro,
        borderWidth: 2,
        borderRadius: 40,
    },
    botonOperador: {
        width: 80,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 400,
        backgroundColor: Color.botonOperadores,
        borderColor: Color.negro,
        borderWidth: 2,
        borderRadius: 40,
    },
    botonOtros: {
        width: 80,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 400,
        backgroundColor: Color.botonoOtros,
        borderColor: Color.negro,
        borderWidth: 2,
        borderRadius: 40,
    },
    pantallaPrincipal: {
        color: Color.numeros,
        fontSize: 70,
        textAlign: 'right',
        fontWeight: 500,
        width: '90%',
    },
    pantallaSecundaria: {
        color: Color.numeros,
        fontSize: 40,
        textAlign: 'right',
        width: '90%',
    },
    voltorb:{
        width: 250,
        height: 250,
    }

});