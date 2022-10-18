import { Text, View, StyleSheet } from 'react-native';
import Title from '../components/Title';

function GameScreen(props) {
    return (
        <View style={style.screen}>
            <Title>Opponent's Guess</Title>
        </View>

    );
}

export default GameScreen;

const style = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop: 35,
    },
});