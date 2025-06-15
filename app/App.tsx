// App.tsx
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import EmotionDetectorWelcome from './component/HomeScreen'; // Pastikan path sudah benar
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <EmotionDetectorWelcome />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
  },
});

export default App;
