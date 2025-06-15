import React from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Svg, { Path, Defs, Marker, Polygon } from 'react-native-svg';

const EmotionDetectorWelcome = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/screens/GenderScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
      
      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Title */}
        <Text style={styles.title}>
          Emotion{'\n'}Face{'\n'}Detector
        </Text>
        
        {/* Emoji Circle with Arrows */}
        <View style={styles.emojiContainer}>
          {/* SVG Arrows */}
          <Svg height={240} width={240} style={styles.svgContainer}>
            <Defs>
              <Marker
                id="arrowhead"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="4"
                orient="auto">
                <Polygon points="0,0 8,4 0,8" fill="#000" />
              </Marker>
            </Defs>
            
            {/* Top Right to Bottom Right Arrow */}
            <Path
              d="M 145 75 Q 175 85 165 145"
              fill="none"
              stroke="#000"
              strokeWidth="1.5"
              markerEnd="url(#arrowhead)"
            />
            
            {/* Bottom Right to Bottom Left Arrow */}
            <Path
              d="M 145 165 Q 135 195 75 185"
              fill="none"
              stroke="#000"
              strokeWidth="1.5"
              markerEnd="url(#arrowhead)"
            />
            
            {/* Bottom Left to Top Left Arrow */}
            <Path
              d="M 95 165 Q 65 155 75 95"
              fill="none"
              stroke="#000"
              strokeWidth="1.5"
              markerEnd="url(#arrowhead)"
            />
            
            {/* Top Left to Top Right Arrow */}
            <Path
              d="M 95 75 Q 105 45 165 55"
              fill="none"
              stroke="#000"
              strokeWidth="1.5"
              markerEnd="url(#arrowhead)"
            />
          </Svg>
          
          {/* Emotion Faces */}
          {/* Angry - Top (Red) */}
          <View style={[styles.emojiCircle, styles.angryFace, styles.topPosition]}>
            <Text style={styles.emojiText}>😠</Text>
          </View>
          
          {/* Happy - Right (Green) */}
          <View style={[styles.emojiCircle, styles.happyFace, styles.rightPosition]}>
            <Text style={styles.emojiText}>😊</Text>
          </View>
          
          {/* Sad - Bottom (Yellow) */}
          <View style={[styles.emojiCircle, styles.sadFace, styles.bottomPosition]}>
            <Text style={styles.emojiText}>😢</Text>
          </View>
          
          {/* Confused - Left (Blue) */}
          <View style={[styles.emojiCircle, styles.confusedFace, styles.leftPosition]}>
            <Text style={styles.emojiText}>😕</Text>
          </View>
        </View>
      </View>
      
      {/* Bottom Section */}
      <View style={styles.bottomContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.subtitleText}>YOUR NEW EMOTION FACE DETECTOR APP</Text>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingVertical: 48,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 36,
        fontWeight: '300',
        color: '#1f2937',
        textAlign: 'center',
        marginBottom: 60,
        letterSpacing: 0.5,
        lineHeight: 34,
        fontFamily: 'System',
        // Shadow for text
        textShadowColor: '#000',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 6,
        elevation: 4, // for Android shadow
    },
    emojiContainer: {
        width: 240,
        height: 240,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 60,
    },
    svgContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    emojiCircle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },
    emojiText: {
        fontSize: 24,
    },
    // Emoji Colors
    angryFace: {
        backgroundColor: '#ef4444', // Red
    },
    happyFace: {
        backgroundColor: '#22c55e', // Green
    },
    sadFace: {
        backgroundColor: '#eab308', // Yellow
    },
    confusedFace: {
        backgroundColor: '#3b82f6', // Blue
    },
    // Emoji Positions
    topPosition: {
        top: 0,
        left: '50%',
        marginLeft: -24, // Half of width to center
    },
    rightPosition: {
        right: 0,
        top: '50%',
        marginTop: -24, // Half of height to center
    },
    bottomPosition: {
        bottom: 0,
        left: '50%',
        marginLeft: -24,
    },
    leftPosition: {
        left: 0,
        top: '50%',
        marginTop: -24,
    },
    bottomContainer: {
        alignItems: 'flex-start',
        width: '100%',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 4,
        alignSelf: 'flex-start',
    },
    subtitleText: {
        fontSize: 11,
        color: '#6b7280',
        marginBottom: 32,
        letterSpacing: 0.8,
        fontWeight: '400',
        alignSelf: 'flex-start',
    },
    continueButton: {
        backgroundColor: '#000',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 8,
        width: '100%',
        maxWidth: 300,
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 1.5,
    },
});

export default EmotionDetectorWelcome;