import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    );
}
export default Card;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: Colors.primaryBG,
        // SHADOW FOR ANDROID
        elevation: 4,
        // SHADOW FOR IOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        // MainAxisAlignment
        justifyContent: "center",
        // CrossAxisAlignment
        alignItems: "center",
    },
});