import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>
                        Confirm</PrimaryButton>
                </View>
            </View>
        </View>
        //     <View style={styles.buttonsSection}>
        //         <View style={styles.buttonsContainer}>
        //             <PrimaryButton>Reset</PrimaryButton>
        //         </View>
        //         <View style={styles.buttonsContainer}>
        //             <PrimaryButton>
        //                 Confirm</PrimaryButton>
        //         </View>
        //     </View>
        // </View>
    )
}

export default StartGameScreen;


const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#35001a',
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
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 30,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: "row",
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

