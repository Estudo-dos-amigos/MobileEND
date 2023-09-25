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
  ActivityIndicator,
  Alert,
} from "react-native";
import stylesLogin from "../styles/styles";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegistrarPress = () => {
    navigation.navigate("RegistrarScreen");
  };

  const handleEntrarPress = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://api-primos.onrender.com/user/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (response.ok) {
        console.log("Acesso completo!");
        Alert.alert("Sucesso!");
        navigation.navigate("HomeScreen");
      } else {
        const data = await response.json();
        console.error("Usuário ou senha incorretos.");
        Alert.alert("Usuário ou senha incorretos!");
      }
    } catch (error) {
      console.error( error);
      Alert.alert("Usuário ou senha incorretos!");
    } finally {
      setLoading(false);
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
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={stylesLogin.input}
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={handleRecuperarSenhaPress}>
            <Text style={stylesLogin.recuperarsenha}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          {loading ? (
            <View>
              <ActivityIndicator size="large" color="#007AFF" />
              <Text>Conectando...</Text>
            </View>
          ) : (
            <Button
              title="Entrar"
              onPress={handleEntrarPress}
              style={stylesLogin.button}
            />
          )}

          <View style={stylesLogin.textpress}>
            <TouchableOpacity onPress={handleRegistrarPress}>
              <Text style={stylesLogin.registerpress}>
                Não é membro? Cadastre-se!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginScreen;