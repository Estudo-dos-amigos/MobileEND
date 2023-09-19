import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    paddingTop: 20,
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
    color: 'red',
    marginBottom: 16,
    padding: 16,
  },
  viewButtons: {
    flexDirection: 'row',
    padding: 16,
    gap: 8
  },
});

export default telaLogin