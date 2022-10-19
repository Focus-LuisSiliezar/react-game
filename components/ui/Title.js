import { Text, StyleSheet } from 'react-native';

function Title({ children }) {
    return <Text style={style.title}>{children}</Text>

}
export default Title;


const style = StyleSheet.create({
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
        width: 300,
    }
});