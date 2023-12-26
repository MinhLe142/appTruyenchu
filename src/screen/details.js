import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    StyleSheet,
    ScrollView,
    FlatList,
    ImageBackground,
    SafeAreaView,
    Dimensions,

} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default Details = () => {
    return (
        <NavigationContainer>
            <ImageBackground style={styles.ImageBackground} >

                <StatusBar barStyle="light-content" />
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ height: '100%', width: '100%' }}>
                        {/* bia truyen va ten tac gia */}
                        <View style={styles.coverStory} >
                            {/* Bia truyen */}
                            <Image source={require('../images/Batdautukiemma.png')} style={styles.imageStory} >
                            </Image>
                            {/* ten tac gia */}
                            <Text style={styles.authorName}>
                                Author: Author Name
                            </Text>
                            <Text style={styles.storyName}>
                                Story's Name
                            </Text>
                        </View>
                        {/* Thanh hien thi trang thai */}
                        <View style={styles.statusBarStory}>

                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    ImageBackground: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',

    },
    
    coverStory: {
        marginTop: 0.1 * windowHeight,
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        resizeMode: 'cover',
        alignContent: 'space-around',
        
    },

    imageStory: {
        top: 0,
        height: '80%',
        width: '100%',
        resizeMode: 'contain',
        position: 'absolute',
    },

    statusBarStory: {
        height: '5%',
        width: '100%',
        marginTop: 0.05 * windowHeight,
        flexDirection: 'row',
        borderColor: "black",
        borderWidth: 2,
    },

    authorName: {
        color: 'black', 
        fontWeight: 'bold',
        position: 'absolute', 
        marginTop: 0.15 * windowHeight,
        bottom: 40,
    },

    storyName: {
        color: 'black',
        fontWeight: 'bold', 
        fontSize: 20,
        position: 'absolute',
        bottom: 0,
    },
});