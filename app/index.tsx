import { View, StyleSheet, SafeAreaView } from 'react-native';
import HomeScreen from './components/HomeScreen';

export default function Home() {
  return (
    <View style={styles.container}>
        <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  button: { marginTop: 20, backgroundColor: 'black', padding: 12, borderRadius: 6 },
  buttonText: { color: 'white' }
});
