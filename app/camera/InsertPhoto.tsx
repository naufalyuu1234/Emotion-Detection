import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PhotoInputScreen = () => {
  const handleCamera = () => {
    // Handle camera action
    console.log('Camera pressed');
  };

  const handleAlbum = () => {
    // Handle album action
    console.log('Album pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Title */}
        <Text style={styles.title}>Insert Your Photo</Text>
        
        {/* Button Container */}
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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