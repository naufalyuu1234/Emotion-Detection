import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { DetectionResponse } from '../../service/api';

const ResultScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams<{ 
    detectionData: string;
    selectedGender: string;
    selectedPurpose: string;
    selectedFeature: string;
  }>();
  const detectionData: DetectionResponse = params.detectionData
    ? JSON.parse(params.detectionData)
    : null;

  const handleTryAgain = () => {
    router.back();
  };

  if (!detectionData) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.errorText}>No detection data available</Text>
          <TouchableOpacity style={styles.button} onPress={handleTryAgain}>
            <Text style={styles.buttonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Emotion Detection Results</Text>

          {detectionData.faces.map((face) => (
            <View key={face.id} style={styles.faceContainer}>
              <Text style={styles.sectionTitle}>Face {face.id}</Text>

              {/* Age and Gender */}
              <View style={styles.infoRow}>
                <Text style={styles.label}>Age:</Text>
                <Text style={styles.value}>{face.age} years</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Gender:</Text>
                <Text style={styles.value}>
                  {face.gender.charAt(0).toUpperCase() + face.gender.slice(1)}
                  {' ('}{Math.round(face.genderConfidence)}%)
                </Text>
              </View>

              {/* Dominant Emotion */}
              <View style={styles.emotionContainer}>
                <Text style={styles.label}>Dominant Emotion:</Text>
                <Text style={styles.dominantEmotion}>
                  {face.dominantEmotion.toUpperCase()}
                  {' ('}{Math.round(face.emotionConfidence)}%)
                </Text>
              </View>

              {/* Emotion Breakdown */}
              <Text style={styles.sectionTitle}>Emotion Breakdown</Text>
              {Object.entries(face.emotions).map(([emotion, confidence]) => (
                <View key={emotion} style={styles.emotionBar}>
                  <Text style={styles.emotionLabel}>
                    {emotion.charAt(0).toUpperCase() + emotion.slice(1)}:
                  </Text>
                  <View style={styles.barContainer}>
                    <View
                      style={[styles.barFill, { width: `${confidence}%` }]}
                    />
                    <Text style={styles.barText}>{Math.round(confidence)}%</Text>
                  </View>
                </View>
              ))}
            </View>
          ))}

          <TouchableOpacity style={styles.button} onPress={handleTryAgain}>
            <Text style={styles.buttonText}>Try Another Photo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
    paddingBottom: 20,
  },
  scrollContent: {
    flexGrow: 1,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  faceContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: '#888',
    marginRight: 8,
  },
  value: {
    fontSize: 16,
    color: '#fff',
  },
  emotionContainer: {
    marginVertical: 16,
  },
  dominantEmotion: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginTop: 8,
  },
  emotionBar: {
    marginBottom: 12,
  },
  emotionLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  barContainer: {
    height: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 10,
  },
  barText: {
    position: 'absolute',
    right: 8,
    color: '#fff',
    fontSize: 12,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  errorText: {
    color: '#ff4444',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default ResultScreen;