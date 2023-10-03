import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
  Button,
} from "react-native";
import stylesHome from "../styles/stylesHome";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_BASE_URL = "https://api-primos.onrender.com/task";

const EntrarScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: "", description: "" });
  const [expandedTask, setExpandedTask] = useState(null);
  const [bearerToken, setBearerToken] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("token")
      .then((token) => {
        if (token) {
          setBearerToken(token);
          ReloadTasks();
        } else {
          navigation.navigate("LoginScreen");
        }
      })
      .catch((error) => {
        console.error("Erro ao recuperar o token:", error);
      });

    fetch(API_BASE_URL, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Erro ao carregar tarefas:", error));
  }, []);

  const createTask = () => {
    fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bearerToken}`,
      },
      body: JSON.stringify({ ...newTask, taskDone: true }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks([tasks, data]);
        setNewTask({ name: "", description: "" });
        ReloadTasks();
      })
      .catch((error) => console.error("Erro ao criar tarefa:", error));
  };

  const editTask = (taskId, updatedTask) => {
    fetch(`${API_BASE_URL}/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bearerToken}`,
      },
      body: JSON.stringify(updatedTask),
    })
      .then((response) => {
        if (response.ok) {
          const updatedTasks = tasks.map((task) =>
            task._id === taskId ? updatedTask : task
          );
          setTasks(updatedTasks);
          setExpandedTask(null);
        } else {
          console.error("Erro ao editar tarefa:", response.status);
        }
      })
      .catch((error) => console.error("Erro ao editar tarefa:", error));
  };

  const deleteTask = (taskId) => {
    fetch(`${API_BASE_URL}/${taskId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    })
      .then(() => {
        const updatedTasks = tasks.filter((task) => task._id !== taskId);
        setTasks(updatedTasks);
        setExpandedTask(null);
        ReloadTasks();
      })
      .catch((error) => console.error("Erro ao deletar tarefa:", error));
  };

  const toggleExpansion = (taskId) => {
    setExpandedTask(expandedTask === taskId ? null : taskId);
  };

  const ReloadTasks = () => {
    fetch(API_BASE_URL, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Erro ao carregar tarefas:", error));
  };

  return (
    <SafeAreaView>
      <View style={stylesHome.imagecontainer}>
        <Image
          source={require("../assets/TITLE.png")}
          style={stylesHome.imagem}
        />
      </View>

      <View style={stylesHome.container}>
        <Text style={stylesHome.newtasktitle}>Criar nova tarefa:</Text>
        <TextInput
          placeholder="Título da tarefa"
          value={newTask.name}
          onChangeText={(text) => setNewTask({ ...newTask, name: text })}
        />
        <TextInput
          placeholder="Descrição da tarefa"
          value={newTask.description}
          onChangeText={(text) => setNewTask({ ...newTask, description: text })}
        />
        <View style={stylesHome.buttoncriar}>
          <Button color="#54C87E" title="+" onPress={createTask}></Button>
        </View>
      </View>

      <View style={stylesHome.viewText}>
        <Text style={stylesHome.tarefasText}>Tarefas:</Text>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleExpansion(item._id)}>
            <Text>{item.name}</Text>
            {expandedTask === item._id && (
              <View>
                <Text>{item.description}</Text>
                <TextInput
                  placeholder="Novo Título"
                  value={newTitle}
                  onChangeText={(text) => setNewTitle(text)}
                  onFocus={() => {}}
                  onBlur={() => {}}
                />
                <TextInput
                  placeholder="Nova Descrição"
                  value={newDescription}
                  onChangeText={(text) => setNewDescription(text)}
                  onFocus={() => {}}
                  onBlur={() => {}}
                />
                <View style={stylesHome.editbuttons}>
                  <Button
                    color="#54C87E"
                    title="Salvar"
                    onPress={() => {
                      editTask(item._id, {
                        name: newTitle,
                        description: newDescription,
                      });
                    }}
                  />
                  <Button
                    color="red"
                    title="Deletar"
                    onPress={() => deleteTask(item._id)}
                  >
                    <Text>Deletar</Text>
                  </Button>
                </View>
              </View>
            )}
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default EntrarScreen;
