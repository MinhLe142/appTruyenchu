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
    Alert,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default Register = () => {
    const [getPasswordVisible, setPasswordVisible] = useState(false);
    const [getPassword, setPassword] = useState("");
    const [getConfirmPassword, setConfirmPassword] = useState("");
    const [getUsername, setUsername] = useState("");
    const [getEmail, setEmail] = useState("");
      
        const handleRegister = () => {
          
            if (!getUsername || !getPassword || !getConfirmPassword || !getEmail) {
                Alert.alert("Thông báo", "Vui lòng nhập đầy đủ thông tin.");
                return;
            }  

            if (getPassword === getConfirmPassword) {
                // Mật khẩu giống nhau, thực hiện đăng ký
                Alert.alert("Thông báo", "Đăng ký thành công!");
            } else {
                // Mật khẩu không giống nhau, xuất thông báo
                Alert.alert("Thông báo", "Mật khẩu không khớp. Vui lòng thử lại.");
            }
        }
    
    return (
        <ImageBackground style = {{height: '100%', width: '100%'}} source={require('../images/background.jpg')} resizeMode='strecth'>
            <StatusBar barStyle="light-content"/>
            <SafeAreaView style={{flex: 1}}>
                <View style={{height: '100%', width: '100%'} }>
                    {/* Email và Tai khoan va mat khau */}
                    <View style={{height: '100%', height: '20%',  marginTop: 0.3 * windowHeight, alignItems: 'center'}}>
                        {/* Email */}
                        <View style={{width: '70%', height: '30%' ,flexDirection: "row", alignItems: 'center', justifyContent: 'space-around'}}>
                            <Text style={{color: "white"}}>Email</Text>
                            <TextInput style={{width: '70%',height: '100%', borderBottomColor:"white", borderBottomWidth: 1,textAlign: "right", color: "white"}} 
                             autoCapitalize="none"    
                            />
                        </View>
                        {/* Tài khoản */}
                        <View style={{width: '70%', height: '30%' ,flexDirection: "row", alignItems: 'center', justifyContent: 'space-around', marginTop: 10}}>
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
                                value={getPassword}
                                onChangeText={(text) => setPassword(text)}
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
                        {/* Nhac lai mat khau */}
                        <View style={{width: '70%', height: '30%' ,flexDirection: "row", alignItems: 'center', justifyContent: 'space-around', marginTop: 10}}>
                            <Text style={{color: "white"}}>Xác nhận</Text>
                            <TextInput style={{width: '70%',height: '100%', borderBottomColor:"white", borderBottomWidth: 1,textAlign: "right", color: "white", paddingRight: 30}} 
                             autoCapitalize="none"
                             secureTextEntry={getPasswordVisible? false: true}
                             value={getConfirmPassword}
                             onChangeText={(text)=>{setConfirmPassword(text)}}
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
                    {/* Dang ky */}
                    <View style={{width: '100%', height: '20%', marginTop: 0.15 * windowHeight, justifyContent: 'center', alignItems: 'center'}}>
                       
                        <TouchableOpacity style={{ marginTop: 20, width:'60%', height: '30%', backgroundColor: '#2AA1DC', justifyContent: 'center', alignItems: 'center',
                        borderColor: 'white', borderRadius: 100, borderWidth: 2
                        }}
                        onPress={handleRegister}
                        >
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
