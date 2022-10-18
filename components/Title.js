import { Text, StyleSheet } from 'react-native';

function Title({children}){
    return <Text style={style.title}>{children}</Text>

}
export default Title;


const style = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12,
    }
});