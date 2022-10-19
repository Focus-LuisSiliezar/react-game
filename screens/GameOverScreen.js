import { Image, Dimensions, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";


function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    return (
        <View style={style.rootContainer}>
            <Title>Game over!</Title>
            <View style={style.imageContainer}>
                <Image style={style.image} source={require('../assets/images/success.png')} />
            </View>
            <View>
                <Text style={style.summaryText}>Your phone needed
                    <Text style={style.highlight}> {roundsNumber} </Text>
                    rounds to guess the number {''}
                    <Text style={style.highlight}>{userNumber}</Text>
                </Text>
            </View>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}

const deviceWidth = Dimensions.get("window").width;
export default GameOverScreen;
const style = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,

        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        borderRadius: deviceWidth < 380 ? 75 : 150,
        height: deviceWidth < 380 ? 150 : 300,
        width: deviceWidth < 380 ? 150 : 300,
        borderWidth: 3,
        borderColor: Colors.primaryBG,
        overflow: "hidden",
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 21,
        textAlign: "center",
        marginBottom: 24,
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'OpenSans-Bold',

    }
});
