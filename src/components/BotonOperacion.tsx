import { Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../themes/GlobalStyles";

interface Props {
    label: string,
    onPress?: () => void;
}

export const BotonOperacion = ({ label, onPress }: Props) => {
    const getStyle = (label: string) => {
        switch (true) {
            case label === '0':
                return GlobalStyles.boton0;
            case !isNaN(Number(label)): // cast a number para que si es un numero funcion el isNaN
                return GlobalStyles.boton;
            case label === '/':
                return GlobalStyles.botonOperador;
            case label === 'x':
                return GlobalStyles.botonOperador;
            case label === '-':
                return GlobalStyles.botonOperador;
            case label === '+':
                return GlobalStyles.botonOperador;
            case label === '=':
                return GlobalStyles.botonOperador;
            default:
                return GlobalStyles.botonResto;    
        }
    };
    return (
        <Pressable>
            <Text
                style={[getStyle(label), styles.separacion]}
                onPress={onPress}>{label}</Text>
        </Pressable>
    )
};

export const styles = StyleSheet.create( {
    separacion: {
        margin: 0,
    },
});
