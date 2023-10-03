import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import stylesRegistrar from "../styles/stylesRegistrar";

const RegistrarScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");
  const [loading, setLoading] = useState(false); 



  const handleRegistro = async () => {
    if (email && password && password === confirmarPassword) {
      setLoading(true); 

      try {
        const response = await fetch("https://api-primos.onrender.com/user/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });

        if (response.ok) {
          console.log("Registro bem-sucedido!");
          Alert.alert('Sucesso!');
          navigation.navigate("Login");
        } else {
          const data = await response.json();
          console.error("Erro de registro:", data.error);
          Alert.alert('Falhou, talvez o email já esteja em uso!');
        }
      } catch (error) {
        console.error("Erro ao registrar:", error);
      } finally {
        setLoading(false); 
      }
    } else {
      console.error("Campos inválidos ou senha não corresponde à confirmação.");
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={stylesRegistrar.imagecontainer}>
          <Image
            source={require("../assets/TITLE.png")}
            style={stylesRegistrar.imagem}
          />
        </View>
        <View style={stylesRegistrar.container}>
        <Text>Nome:</Text>
          <TextInput
            style={stylesRegistrar.input}
            placeholder="Digite seu nome"
            onChangeText={(text) => setName(text)}
            value={name}
          />
          <Text>Email:</Text>
          <TextInput
            style={stylesRegistrar.input}
            placeholder="Digite seu email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />

          <Text>Senha:</Text>
          <TextInput
            style={stylesRegistrar.input}
            placeholder="Digite sua senha"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
          />

          <Text>Confirmar Senha:</Text>
          <TextInput
            style={stylesRegistrar.input}
            placeholder="Confirme sua senha"
            onChangeText={(text) => setConfirmarPassword(text)}
            value={confirmarPassword}
            secureTextEntry
          />
          {loading ? (
            <View>
              <ActivityIndicator size="large" color="#007AFF" />
              <Text>Carregando...</Text>
            </View>
          ) : (
            <Button title="Registrar" onPress={handleRegistro} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrarScreen;
