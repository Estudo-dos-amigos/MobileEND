import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import stylesLogin from "../styles/styles";
import {AntDesign} from '@expo/vector-icons'

function LoginScreen({ navigation }) {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegistrarPress = () => {
    navigation.navigate("RegistrarScreen");
  };

  const handleEntrarPress = () => {
    if (login === "teste" && senha === "teste") {
      navigation.navigate("HomeScreen");
    } else {
      alert("Login ou senha inválidos. Tente novamente.");
    }
  };

  const handleRecuperarSenhaPress = () => {
    navigation.navigate("RecuperarSenhaScreen");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={stylesLogin.imagecontainer}>
          <Image
            source={require("../assets/TITLE.png")}
            style={stylesLogin.imagem}
          />
        </View>
        <View style={stylesLogin.container}>
          <TextInput
            style={stylesLogin.input}
            placeholder="Digite seu login"
            value={login}
            onChangeText={setLogin}
          />

          <TextInput
            style={stylesLogin.input}
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
          />
                      <TouchableOpacity onPress={handleRecuperarSenhaPress}>
              <Text style={stylesLogin.recuperarsenha}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          <Button
            title="Entrar"
            onPress={handleEntrarPress}
            style={stylesLogin.button}
          />

          <View style={stylesLogin.textpress}>
            <TouchableOpacity onPress={handleRegistrarPress}>
              <Text style={stylesLogin.registerpress}>Não sou membro!</Text>
            </TouchableOpacity>
            <View style={stylesLogin.socialmedia}>
            <AntDesign style={stylesLogin.socialicons} name="googleplus" size={35} color="red" /> 
            <AntDesign style={stylesLogin.socialicons} name="twitter" size={35} color="blue" />    
            </View>        
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginScreen;
