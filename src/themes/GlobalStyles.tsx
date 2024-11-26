import { StyleSheet } from 'react-native';
import { Color } from './Color';

export const GlobalStyles = StyleSheet.create( {
    body: {
        backgroundColor: '#FFFFFF',
        color: '#000000',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        width:80,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 300,
        borderColor: 'black',
        borderWidth: 2,
    },
    boton0: {
        width:180,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 300,
        borderColor: 'black',
        borderWidth: 2,
    },
    pantallaPrincipal: {
        fontSize: 70,
        textAlign: 'right',
        fontWeight:400,
        width: '90%',
    },
    pantallaSecundaria: {
        fontSize: 40,
        textAlign: 'right',
        width: '90%',
    },

});