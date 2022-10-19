import { useState, useEffect } from 'react';
import { Dimensions, View, StyleSheet, VirtualizedList, Alert, FlatList } from 'react-native';
import Card from '../components/game/Card';
import NumberContainer from '../components/game/NumberContainer';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import { Feather } from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';
function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min) + min);
    if (rndNum == exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(
        1,
        100,
        userNumber
    );
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setguessRounds] = useState([initialGuess]);
    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);


    function nextGuessHandler(direction) {
        if ((direction == 'lower' && currentGuess < userNumber) || (direction == 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert('No cheating...', 'Cheating is wrong', [{
                text: 'I wont do it again',
                style: 'cancel',
            }]);
        }

        if (direction == 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        setCurrentGuess(newRndNumber);
        setguessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    }
    const guessRoundsListLenght = guessRounds.length;
    return (
        <View style={style.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <View style={style.container}>
                    <InstructionText style={style.instructionText}>Higher or lower?</InstructionText>
                    <View style={style.buttons}>
                        <View style={style.buttonContainer}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                                <Feather name='plus' size={25} color='white' />
                            </PrimaryButton>
                        </View>
                        <View style={style.buttonContainer}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                                <Feather name='minus' size={25} color='white' />
                            </PrimaryButton>
                        </View>
                    </View>
                </View>
            </Card>
            <View style={style.listContainer}>
                <FlatList
                 data={guessRounds}
                 renderItem={(itemData) =><GuessLogItem  roundNumber={guessRoundsListLenght - itemData.index} guess={itemData.item}/>} 
                 keyExtractor={(item) => item}
                 />
            </View>
        </View>

    );
}

export default GameScreen;
const deviceWidth = Dimensions.get('window').width;
const style = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop:  deviceWidth < 380 ? 18 :36,
        alignItems: 'center'
    },
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    // PASSING STYLE AS A PROP
    instructionText: {
        marginBottom: 12,
    },
    buttons: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    listContainer:{
        flex: 1,
    }
});