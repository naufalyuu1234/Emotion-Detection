import React from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';

const PurposeIdentificationScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams<{ selectedGender: string }>();

  const handleContinue = (purpose: string) => {
    router.push({
      pathname: '/screens/ExpectScreen',
      params: { 
        selectedGender: params.selectedGender,
        selectedPurpose: purpose 
      }
    });
  }

  const handleSkip = () => {
    handleContinue('PREFER_NOT_TO_SAY');
  };

  const handlePurposeSelect = (purpose: string) => {
    handleContinue(purpose);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f3f4f6" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>SKIP</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>
          LETS CALCULATE EMOTION APP FOR YOU!
        </Text>

        <Text style={styles.mainTitle}>
          What Is Your Purpose Of Using This App?
        </Text>

        <View style={styles.buttonContainer}>
          <PurposeButton
            label="TO UNDERSTAND MY CURRENT EMOTIONS"
            onPress={() => handlePurposeSelect('UNDERSTAND_EMOTIONS')}
          />
          <PurposeButton
            label="TO INCREASE EMOTIONAL AWARENESS"
            onPress={() => handlePurposeSelect('EMOTIONAL_AWARENESS')}
          />
          <PurposeButton
            label="I PREFER NOT TO SAY"
            onPress={() => handlePurposeSelect('PREFER_NOT_TO_SAY')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const PurposeButton = ({ label, onPress }: { label: string; onPress: () => void }) => (
  <TouchableOpacity style={styles.purposeButton} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

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
  purposeButton: {
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
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: 1.2,
  },
});

export default PurposeIdentificationScreen;
