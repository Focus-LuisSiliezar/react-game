import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={style.listItem}>
            <Text style={style.itemStyle}># {roundNumber}</Text>
            <Text style={style.itemStyle}>Opponent's guess {guess}</Text>
        </View>
    )
}
export default GuessLogItem;

const style = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12, 
        marginVertical: 8,
        backgroundColor: Colors.secondary,
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',
        elevation: 4, 
    },
    itemStyle:{
        fontFamily: 'OpenSans-Regular',
    }
    ,
});