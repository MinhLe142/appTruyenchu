import React, { Component, useState} from "react";
import {  
    SafeAreaView, 
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground,
    useColorScheme,
    StatusBar,
    Dimensions,
    TextInput,
    Image,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default Login = () => {

    const [getPasswordVisible, setPasswordVisible] = useState(false);
    return (
        <ImageBackground style = {{height: '100%', width: '100%'}} source={require('../images/background.jpg')} resizeMode='strecth'>
            <StatusBar barStyle="light-content"/>
            <SafeAreaView style={{flex: 1}}>
                <View style={{height: '100%', width: '100%'} }>
                    {/* Tai khoan va mat khau */}
                    <View style={{height: '100%', height: '20%',  marginTop: 0.3 * windowHeight, alignItems: 'center'}}>
                        {/* tai khoan */}
                        <View style={{width: '70%', height: '30%' ,flexDirection: "row", alignItems: 'center', justifyContent: 'space-around'}}>
                            <Text style={{color: "white"}}>Tài khoản</Text>
                            <TextInput style={{width: '70%',height: '100%', borderBottomColor:"white", borderBottomWidth: 1,textAlign: "right", color: "white"}} 
                             autoCapitalize="none"    
                            />
                        </View>
                        {/* Mat khau */}
                        <View style={{width: '70%', height: '30%' ,flexDirection: "row", alignItems: 'center', justifyContent: 'space-around', marginTop: 10}}>
                            <Text style={{color: "white"}}>Mật khẩu</Text>
                            <TextInput style={{width: '70%',height: '100%', borderBottomColor:"white", borderBottomWidth: 1,textAlign: "right", color: "white", paddingRight: 30}} 
                             autoCapitalize="none"
                             secureTextEntry={getPasswordVisible? false: true}
                            />
                            <TouchableOpacity style={{height: '100%',width: 30 , position: "absolute", right: 0}}
                            onPress={() => {
                                setPasswordVisible(!getPasswordVisible);
                            }}
                            >
                                {!getPasswordVisible?
                                <Image source={require('../images/invisible-active.png')} style={{height: '100%', width: '100%', resizeMode: 'contain'}} /> 
                                :
                                <Image source={require('../images/invisible-unactive.png')} style={{height: '100%', width: '100%', resizeMode: 'contain'}}/>
                            } 
                            </TouchableOpacity>
                        </View>

                    </View>
                    {/* dang nhap va dang ky */}
                    <View style={{width: '100%', height: '20%', marginTop: 0.15 * windowHeight, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity style={{width:'60%', height: '30%', backgroundColor: '#2ADC4D', justifyContent: 'center', alignItems: 'center',
                        borderColor: 'white', borderRadius: 100, borderWidth: 2
                        }}>
                            <Text style={{color: 'white', fontSize: 20}}>
                                Đăng Nhập
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 20, width:'60%', height: '30%', backgroundColor: '#2AA1DC', justifyContent: 'center', alignItems: 'center',
                        borderColor: 'white', borderRadius: 100, borderWidth: 2
                        }}>
                            <Text style={{color: 'white', fontSize: 20}}>
                                Đăng ký
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}
