import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
    // {children} is to get the props directly instead of props.childer just put the curly brackets
    function onPressHandler() {
        console.log('Pressed');
    }
    return (
        <View
            style={styles.buttonOuterContainer}
        >
            <Pressable
                onPress={onPressHandler}
                android_ripple={{ color: '#85174e' }}
                style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
            >
                <Text
                    style={styles.buttonText}
                >
                    {children}
                </Text>
            </Pressable>
        </View>
    )

}
export default PrimaryButton;


const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",

    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }
})