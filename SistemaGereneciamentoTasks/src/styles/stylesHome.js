import {StyleSheet} from 'react-native';
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
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  imagem: {
    width: 350, 
    height: 100, 
    marginTop: 50,
    marginBottom: 15,

  },
  imagecontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  tarefasText:{
    alignItems: 'center',
  },
  viewText:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffc2c2",
    marginTop: 10,

  },

});

export default stylesHome