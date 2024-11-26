import { Text, type TextProps, StyleSheet } from 'react-native';
import { GlobalStyles } from '../themes/GlobalStyles';

interface Props extends TextProps {
    pantalla: "pantallaPrincipal" | "pantallaSecundaria";
};

export const Pantalla = ({children, pantalla, ...rest}:Props) => {
  return (
    <Text style={pantalla === "pantallaPrincipal" ? GlobalStyles.pantallaPrincipal : GlobalStyles.pantallaSecundaria} {...rest}>
        {children}
    </Text>
  )
}
