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
    paddingBottom: 50,
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

  editbuttons: {
    marginRight: 230,
    marginLeft: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  //
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 50,
  },
  centeredButtonModalCreateTask: {
    alignItems: 'flex-end',
    marginVertical: 'auto',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 30,
    padding: 5,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#34DB24",
    paddingVertical:1,
    paddingHorizontal:10,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  buttonCreate: {
    backgroundColor: "#34DB24",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:10,

  },
  textPlus: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",

  },
  textPlus2: {
    color: "black",
    textAlign: "center",
    fontSize:27,

  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  textSairModal: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 10,
  },

  buttonSair: { 
    borderRadius: 20, 
    padding: 5,

  },
  buttonsModal: { 
    flexDirection: 'row', 
    alignItems: 'flex-end',
    gap: 35,
    paddingTop:10,
  },
});

export default stylesHome;
