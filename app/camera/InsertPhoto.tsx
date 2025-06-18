import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { detectEmotion } from '../../service/api';
import { DetectionResponse } from '../../service/api';

const PhotoInputScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams<{ 
    selectedGender: string;
    selectedPurpose: string;
    selectedFeature: string;
  }>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleImagePick = async (source: 'camera' | 'album') => {
    try {
      setLoading(true);
      setError('');

      // Request permission
      const permissionResult = source === 'camera'
        ? await ImagePicker.requestCameraPermissionsAsync()
        : await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissionResult.granted) {
        setError('Permission to access camera/gallery was denied');
        return;
      }

      // Launch camera/gallery
      const result = source === 'camera'
        ? await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.8,
            base64: true,
          })
        : await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.8,
            base64: true,
          });

      if (!result.canceled && result.assets[0].base64) {
        // Send to backend
        const response = await detectEmotion(result.assets[0].base64);
        
        // Jika gender dipilih, gunakan gender yang dipilih
        if (params.selectedGender && params.selectedGender !== 'PREFER_NOT_TO_SAY') {
          response.faces = response.faces.map(face => ({
            ...face,
            gender: params.selectedGender.toLowerCase(),
            genderConfidence: 100
          }));
        }

        // Navigate to results screen with the detection data and user preferences
        router.push({
          pathname: '/screens/ResultScreen',
          params: { 
            detectionData: JSON.stringify(response),
            selectedGender: params.selectedGender,
            selectedPurpose: params.selectedPurpose,
            selectedFeature: params.selectedFeature
          }
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleCamera = () => {
    handleImagePick('camera');
  };

  const handleAlbum = () => {
    handleImagePick('album');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Title */}
        <Text style={styles.title}>Insert Your Photo</Text>

        {/* Error message */}
        {error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : null}
        
        {/* Loading indicator */}
        {loading ? (
          <ActivityIndicator size="large" color="#fff" style={styles.loader} />
        ) : (
          /* Button Container */
          <View style={styles.buttonContainer}>
          {/* Camera Button */}
          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={handleCamera}
            activeOpacity={0.8}
          >
            <View style={styles.buttonContent}>
              <Icon name="camera" size={24} color="#000" style={styles.icon} />
              <Text style={styles.buttonText}>Camera</Text>
            </View>
          </TouchableOpacity>
          
          {/* Album Button */}
          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={handleAlbum}
            activeOpacity={0.8}
          >
            <View style={styles.buttonContent}>
              <Icon name="images" size={24} color="#000" style={styles.icon} />
              <Text style={styles.buttonText}>Album</Text>
            </View>
          </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: '#ff4444',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  loader: {
    marginVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 80,
    letterSpacing: 1.5,
    fontWeight: '300',
    fontFamily: 'System',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 280,
    alignItems: 'center',
  },
  actionButton: {
    backgroundColor: '#fff',
    borderRadius: 25,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  icon: {
    marginRight: 12,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.8,
  },
});

export default PhotoInputScreen;