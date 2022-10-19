import { View, Text, StyleSheet , Dimensions } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
    return (
        <View style={style.container}>
            <Text style={style.numberText} >{children}</Text>
        </View>
    );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const style = StyleSheet.create({
    container:{
        borderWidth: 3,
        borderRadius: 8,
        borderColor: Colors.secondary,
        padding: deviceWidth < 380 ? 12 :24,
        margin:  deviceWidth < 380 ? 12 :24,
        alignItems: "center",
        justifyContent:"center",
    },
    numberText:{
        color: Colors.secondary,
        fontSize:  deviceWidth < 380 ? 26 :32, 
        fontFamily: 'OpenSans-Regular',
    }
});