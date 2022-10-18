import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import Card from "../components/game/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function StartGameScreen({ onPickedNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            // SHOW ALERT
            Alert.alert('Invalid number', 'Number has to be between 1 and 99', [{ text: 'Okay', style: "destructive", onPress: resetInputHandler }]);
            return;
        }
        onPickedNumber(chosenNumber);
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess my number</Title>
            <Card>
                <InstructionText>Enter a number</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>
                            Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default StartGameScreen;


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center",
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 30,
        borderBottomColor: Colors.secondary,
        borderBottomWidth: 2,
        color: Colors.secondary,
        marginVertical: 8,
        fontFamily: 'OpenSans-Bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: "row",
        marginVertical: 20,
    },
    buttonContainer: {
        flex: 1,
    }



    // buttonsSection: {
    //     width: '100%',
    //     flexDirection: "row",
    //     marginTop: 10,
    // },
    // buttonsContainer: {
    //     width: '50%',
    // }
});

