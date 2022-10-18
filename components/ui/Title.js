import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function Title({children}){
    return <Text style={style.title}>{children}</Text>

}
export default Title;


const style = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
    }
});