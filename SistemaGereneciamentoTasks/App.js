import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleLogin = () => {
    // Lógica para autenticar o usuário
    // Você pode implementar sua própria lógica de autenticação aqui
    const { username, password } = this.state;
    if (username === 'seu_usuario' && password === 'sua_senha') {
      alert('Login bem-sucedido!');
    } else {
      alert('Login falhou. Verifique seu nome de usuário e senha.');
    }
  };

  handleForgotPassword = () => {
    // Lógica para recuperar a senha do usuário
    // Implemente sua própria lógica de recuperação de senha aqui
    alert('Esqueci minha senha!');
  };

  handleSignUp = () => {
    // Navegue para a tela de registro ou execute a lógica de registro
    // Implemente sua própria lógica de registro aqui
    alert('Ir para a tela de registro');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => this.setState({ username: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ password: text })}
        />
        <Button title="Entrar" onPress={this.handleLogin} />
        <TouchableOpacity onPress={this.handleForgotPassword}>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleSignUp}>
          <Text style={styles.signUp}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {  
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingLeft: 8,
  },
  forgotPassword: {
    color: 'blue',
    marginBottom: 16,
    padding: 16,
  },
  signUp: {
    color: 'green',
    padding: 16,
  },
});

export default LoginScreen;