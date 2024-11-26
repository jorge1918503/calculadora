import { Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../themes/GlobalStyles";

interface Props {
    label: string,
    onPress?: () => void;
}

export const BotonOperacion = ({label, onPress}:Props) => {
    return (
        <Pressable>
            <Text 
                style={label === '0' ? GlobalStyles.boton0 : GlobalStyles.boton}
                onPress={onPress}>{label}</Text>
        </Pressable>
    )
};
