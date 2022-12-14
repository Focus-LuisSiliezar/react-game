import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
    // {children} is to get the props directly instead of props.childer just put the curly brackets

    return (
        <View
            style={styles.buttonOuterContainer}
        >
            <Pressable
                onPress={onPress}
                android_ripple={{ color: Colors.primaryRipple }}
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
        backgroundColor: Colors.primary,
        paddingVertical: 8,
        paddingHorizontal: 12,
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