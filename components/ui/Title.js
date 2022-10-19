import { Text, StyleSheet, Dimensions } from 'react-native';

function Title({ children }) {
    return <Text style={style.title}>{children}</Text>

}
export default Title;

 const deviceWidth = Dimensions.get('window').width;
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
        marginBottom:  deviceWidth < 380 ? 12 :24,
    }
});