import React from 'react';
import {Text ,TouchableOpacity} from 'react-native';

const Button = ({onPress}) =>{
    return(
        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={onPress}
        >
             <Text
             style={styles.textStyle}>
                 {children}
             </Text>
        </TouchableOpacity>
    );
};

const styles={
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRradius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5,

    },
    textStyle:{
        alignSelf:'center',
        color:'#007aff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10, 
    }
}

//touchableHghlight and TouchableOpacity are the buttons in react-native


export default Button;