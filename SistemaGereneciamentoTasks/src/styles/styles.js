import {StyleSheet} from 'react-native';
const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    
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
  button: {
    marginBottom: 1,
  },
  imagem: {
    width: 350, 
    height: 100, 
    marginTop: 50,

  },
  imagecontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  recuperarsenha:{
    color: 'red',
    paddingBottom:5,
    
  },
  registerpress:{
    paddingTop: 20,
    fontSize: 17,
    textDecorationLine: 'underline',
    
  },
  textpress: {
    justifyContent: 'left',
    flexDirection: 'row',
    gap: 100,    
  },
  socialmedia: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 20, 
  },
    socialicons: {
      paddingTop: 20,
  },

  loudingscreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
});

export default stylesLogin