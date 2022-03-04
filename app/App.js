import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.panel}>
      <Text style={styles.text}>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel: {
  	backgroundColor: 'blue',
  	height: '10%',
  	width: '80%',
  	borderRadius: 15,
  	display: 'flex',
  	textAlign: 'center',
  	justifyContent: 'center'
  },
  text: {
  	fontSize: 30,
  	color: 'white',
  	margin: 'auto',
  	textAlign: 'center'
  }
});
