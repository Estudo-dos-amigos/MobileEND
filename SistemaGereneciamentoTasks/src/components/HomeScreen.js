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

const API_BASE_URL = "https://api-primos.onrender.com/task";
const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTFkOWMzODIzNzQ4ODA1OTgxY2E0MiIsImlhdCI6MTY5NTY2OTQyNn0.xLUPU6T7Az-H_2RvAEWV9tzNied9Y6XQegIaN1KE9wc"; // Substitua pelo seu token Bearer

const EntrarScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: "", description: "" });
  const [expandedTask, setExpandedTask] = useState(null);

  useEffect(() => {
    fetch(API_BASE_URL, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Erro ao carregar tarefas:", error));
  }, []);

  const createTask = () => {
    // Envia uma nova tarefa para a API
    fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
      body: JSON.stringify({ ...newTask, taskDone: true }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks([...tasks, data]);
        setNewTask({ name: "", description: "" });
      })
      .catch((error) => console.error("Erro ao criar tarefa:", error));
      
  };

  const editTask = (taskId, updatedTask) => {
    // Atualiza uma tarefa na API
    fetch(`${API_BASE_URL}/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
      body: JSON.stringify(updatedTask),
    })
      .then(() => {
        const updatedTasks = tasks.map((task) =>
          task._id === taskId ? { ...task, ...updatedTask } : task
        );
        setTasks(updatedTasks);
        setExpandedTask(null);
      })
      .catch((error) => console.error("Erro ao editar tarefa:", error));
  };

  const deleteTask = (taskId) => {
    // Deleta uma tarefa na API
    fetch(`${API_BASE_URL}/${taskId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    })
      .then(() => {
        const updatedTasks = tasks.filter((task) => task._id !== taskId);
        setTasks(updatedTasks);
        setExpandedTask(null);
      })
      .catch((error) => console.error("Erro ao deletar tarefa:", error));
  };

  const toggleExpansion = (taskId) => {
    setExpandedTask(expandedTask === taskId ? null : taskId);
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
        <Button title="Nova Tarefa" onPress={createTask}></Button>
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
                  <Button
                    title="Editar"
                    onPress={
                      () => editTask(item._id, { ...item, name: "Novo Nome" }) // Exemplo de edição
                    }
                  >
                    <Text>Editar</Text>
                  </Button>
                  <Button
                    title="Deletar"
                    onPress={() => deleteTask(item._id)}
                  >
                    <Text>Deletar</Text>
                  </Button>
                </View>
              )}
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default EntrarScreen;
