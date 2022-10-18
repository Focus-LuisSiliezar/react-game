import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
    return (
        <View style={style.container}>
            <Text style={style.numberText} >{children}</Text>
        </View>
    );
}

export default NumberContainer;

const style = StyleSheet.create({
    container:{
        borderWidth: 3,
        borderRadius: 8,
        borderColor: Colors.secondary,
        padding: 24,
        marginTop: 12,
        marginBottom: 24,
        marginHorizontal: 30,
        alignItems: "center",
        justifyContent:"center",
    },
    numberText:{
        color: Colors.secondary,
        fontSize: 36, 
        fontWeight: "bold",
    }
});