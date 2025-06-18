import React from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 30,
    paddingBottom: 20,
  },
  skipButton: {
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  skipText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 14,
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: 32,
    letterSpacing: 0.5,
    fontWeight: '400',
    lineHeight: 20,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 48,
    letterSpacing: 0.8,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  },
  genderButton: {
    backgroundColor: '#000',
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1.2,
  },
});

const GenderIdentificationScreen = () => {
    const router = useRouter();

    const handleContinue = () => {
        router.push('/screens/PurposeScreen');
    };

  const handleSkip = () => {
    // Handle skip action
    console.log('Skip pressed');
  };

  const handleGenderSelect = (gender: string) => {
    // Handle gender selection
    console.log('Selected gender:', gender);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f3f4f6" />
      
      {/* Header with Skip Button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip} onPressIn={handleContinue}>
          <Text style={styles.skipText}>SKIP</Text>
        </TouchableOpacity>
      </View>
      
      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Heading */}
        <Text style={styles.heading}>
          LETS CALCULATE EMOTION APP FOR YOU!
        </Text>
        
        {/* Main Title */}
        <Text style={styles.mainTitle}>
          I IDENTIFY MYSELF AS...
        </Text>
        
        {/* Gender Selection Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.genderButton} 
            onPress={() => handleGenderSelect('FEMALE')}
            onPressIn={handleContinue}
          >
            <Text style={styles.buttonText}>FEMALE</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.genderButton} 
            onPress={() => handleGenderSelect('MALE')}
            onPressIn={handleContinue}
          >
            <Text style={styles.buttonText}>MALE</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.genderButton} 
            onPress={() => handleGenderSelect('PREFER_NOT_TO_SAY')}
            onPressIn={handleContinue}
          >
            <Text style={styles.buttonText}>I PREFER NOT TO SAY</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GenderIdentificationScreen;