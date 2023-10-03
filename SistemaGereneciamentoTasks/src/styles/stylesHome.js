import { StyleSheet } from "react-native";
const stylesHome = StyleSheet.create({
  container: {
    paddingTop: 60,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  imagem: {
    width: 350,
    height: 100,
    marginTop: 50,
    marginBottom: 5,
  },
  imagecontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 10,
  },
  tarefasText: {
    alignItems: "center",
  },
  viewText: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    marginTop: 10,
    marginHorizontal: 40,
    borderRadius: 4,
  },

  newtasktitle: {
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "grey",
    marginHorizontal: 40,
    borderRadius: 4,
  },

  buttoncriar: {
    marginRight: 340,
    marginLeft: 5,
    paddingBottom: 10,
  },

  editbuttons: {
    marginRight: 230,
    marginLeft: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default stylesHome;
