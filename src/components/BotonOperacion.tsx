import { Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../themes/GlobalStyles";
import * as Haptics from 'expo-haptics';

interface Props {
    label: string,
    onPress?: () => void;
}

export const BotonOperacion = ({ label, onPress }: Props) => {
    const getStyle = (label: string) => {
        switch (true) {
            case label === '0':
                return GlobalStyles.boton0;
            case !isNaN(Number(label)): // cast a number para que si es un número funcione isNaN
                return GlobalStyles.boton;
            case label === '/':
            case label === 'x':
            case label === '-':
            case label === '+':
            case label === '=':
                return GlobalStyles.botonOperador;
            default:
                return GlobalStyles.botonOtros;    
        }
    };

    const vibrarYonPress = () => {
        if (onPress) {
            onPress();
            Haptics.selectionAsync();
            console.log('vibro');
        }

    }

    return (
        <Pressable>
            <Text
                style={[getStyle(label), styles.separacion]}
                onPress={vibrarYonPress}>
                {label}
            </Text>
        </Pressable>
    )
};

export const styles = StyleSheet.create( {
    separacion: {
        margin: 0,
    },
});
