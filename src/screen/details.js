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
    TouchableOpacity,

} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default Details = () => {
    return (

        <NavigationContainer>
            <StatusBar barStyle="light-content" />
            <ImageBackground style={styles.ImageBackground} >
                <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{flex: 1}}>

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
                            <View style={styles.statusIcon}>
                                <View style={styles.iconDetails}>
                                    <Image source={require('../images/signal_icon.png')} style={styles.imageIcon} />
                                    <Text style={styles.textIcon}>Trạng thái</Text>
                                </View>
                                <Text style={styles.statusNumber}>Number</Text>
                            </View>
                            <View style={styles.statusIcon}>
                                <View style={styles.iconDetails}>
                                    <Image source={require('../images/heart_icon_color.png')} style={styles.imageIcon} />
                                    <Text style={styles.textIcon}>Theo dõi</Text>
                                </View>
                                <Text style={styles.statusNumber}>Number</Text>
                            </View>
                            <View style={styles.statusIcon}>
                                <View style={styles.iconDetails}>
                                    <Image source={require('../images/eye_icon_color.png')} style={styles.imageIcon} />
                                    <Text style={styles.textIcon}>Lượt xem</Text>
                                </View>
                                <Text style={styles.statusNumber}>Number</Text>
                            </View>
                        </View>
                        {/* Nút xem truyện và theo dõi truyện */}
                        <View style={styles.spaceButton}>
                            <TouchableOpacity style={styles.configButton}>
                                <Text style={{ color: 'white', fontSize: 20 }}>
                                    Đọc truyện
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                width: '50%',
                                height: '10%',
                                flexDirection: 'row',
                                backgroundColor: '#DA2323',
                                justifyContent: 'center',
                                alignItems: 'center',
                                resizeMode: 'stretch',
                                borderRadius: 100,
                            }}>
                                <Text style={{ color: 'white', fontSize: 20 }}>
                                    Theo dõi
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.descriptionContainer}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Mô tả</Text>
                            <Text style={{fontSize: 16}}>
                                Mô tả truyện: Đây là nơi để bạn mô tả nội dung chi tiết của truyện.
                                Bạn có thể thêm các đoạn văn mô tả ở đây.
                            </Text>
                        </View>

                        <View style={styles.chapterListContainer}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Danh sách chương:</Text>
                            <ScrollView style={{ Height: '100%',}}>
                                {Array.from({ length: 100 }, (_, index) => (
                                    <TouchableOpacity key={index} style={styles.chapterItem}>
                                        <Text style={{fontSize: 16}}>Chương {index + 1}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>
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
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        resizeMode: 'cover',
        alignContent: 'space-around',
        // borderWidth: 0.5,
        // borderColor: 'black',
    },

    imageStory: {
        top: 0,
        height: '60%',
        width: '100%',
        resizeMode: 'contain',
        position: 'absolute',
        
    },


    authorName: {
        color: 'black',
        fontWeight: 'bold',
        position: 'absolute',
        // marginTop: 0.15 * windowHeight,
        bottom: 120,
    },

    storyName: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        position: 'absolute',
        bottom: 50,
        // borderWidth: 0.5,
        // borderColor: 'black',
    },

    statusBarStory: {
        height: '5%',
        width: '100%',
        // marginTop: 0.05 * windowHeight,
        flexDirection: 'row',
        justifyContent: "space-around",
        // borderWidth: 0.5,
        // borderColor: 'black',
    },

    statusIcon: {
        height: '100%',
        width: '32%',
        flexDirection: 'column',
        resizeMode: 'stretch',
        alignContent: 'center',
        borderWidth: 0.5,
        borderColor: 'black',

    },

    iconDetails: {
        height: '60%',
        width: '100%',
        resizeMode: 'stretch',
        flexDirection: 'row',
        top: 0,
        alignItems: 'center',
        // borderWidth: 0.5,
        // borderColor: 'black',
    },

    imageIcon: {
        top: 0,
        height: '100%',
        width: '25%',
        position: 'absolute',
        resizeMode: 'contain',
        // borderWidth: 0.5,
        // borderColor: 'black',
    },

    textIcon: {
        right: 10,
        fontSize: 16,
        position: 'absolute',
        fontWeight: 'bold',
    },

    statusNumber: {
        fontWeight: 'bold',
        textAlign: 'center',
    },

    spaceButton: {
        marginTop: 20,
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    configButton: {
        width: '50%',
        height: '10%',
        backgroundColor: '#2ADC4D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        
    },

    descriptionContainer: {
        height: '5%',
        width: '100%',
        borderWidth: 0.5,
        borderColor: 'black',
      },
      
    chapterListContainer: {
        height: '',
        width: '100%',
        flex: 1,
        marginTop: 20,
        borderWidth: 0.5,
        borderColor: 'black',
    },
});