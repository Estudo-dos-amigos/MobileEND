import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import telaLogin from "./src/styles/styles";
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleLogin = () => {
    // Lógica para autenticar o usuário
    // Você pode implementar sua própria lógica de autenticação aqui
    const { username, password } = this.state;
    if (username === "seu_usuario" && password === "sua_senha") {
      alert("Login bem-sucedido!");
    } else {
      alert("Login falhou. Verifique seu nome de usuário e senha.");
    }
  };

  handleForgotPassword = () => {
    // Lógica para recuperar a senha do usuário
    // Implemente sua própria lógica de recuperação de senha aqui
    alert("Esqueci minha senha!");
  };

  handleSignUp = () => {
    // Navegue para a tela de registro ou execute a lógica de registro
    // Implemente sua própria lógica de registro aqui
    alert("Ir para a tela de registro");
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={telaLogin.container}>
            <Text style={telaLogin.title}>Login</Text>

            <TextInput
              style={telaLogin.input}
              placeholder="Email"
              onChangeText={(text) => this.setState({ username: text })}
            />
            <TextInput
              style={telaLogin.input}
              placeholder="Senha"
              secureTextEntry={true}
              onChangeText={(text) => this.setState({ password: text })}
            />

            <View style={telaLogin.viewButtons}>
              <Button title="Entrar" onPress={this.handleLogin} />

              <Button title="Cadastrar" onPress={this.handleSignUp} />
            </View>
            <TouchableOpacity onPress={this.handleForgotPassword}>
              <Text style={telaLogin.forgotPassword}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default LoginScreen;
