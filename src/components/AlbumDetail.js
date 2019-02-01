import React from 'react';
import {View,Text,Image,Linking} from 'react-native';
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button';

const AlbumDetails = (props) =>{
    return(
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image
                    style={styles.thumbnailStyle}
                    source={{uri: props.album.thumbnail_image}}/>
                </View>
                <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle}>
                    {props.album.title} 
                </Text>
                <Text>
                    {props.album.artist}
                </Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                style={styles.imageStyle}
                source={{uri: props.album.image}}/>
            </CardSection>

            <CardSection>
                <Button onPress={Linking.openURL(props.album.url)}>
                 Buy Now 
                 </Button>
            </CardSection>
        </Card>
    );
};

const styles={
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around',  
    },
    thumbnailStyle:{
        height:50,
        width:50,
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
    },
    headerTextStyle:{
        fontSize:18,
    },
    imageStyle:{
        height:300,
        flex:1,
        width:null,
    }
}
//always specify height and width for image tag
// card humara banaya hua component h ..... toe uske andar jo cmpoent pass hue hain .... unhe we have to handle as ts children ...toe in components ko uske andar as a props pass karna padega
export default AlbumDetails;