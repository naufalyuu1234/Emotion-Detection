import { useRouter, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ExpectIdentificationScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams<{ selectedGender: string; selectedPurpose: string }>();

  const handleContinue = (feature: string) => {
    router.push({
      pathname: "/camera/InsertPhoto",
      params: {
        selectedGender: params.selectedGender,
        selectedPurpose: params.selectedPurpose,
        selectedFeature: feature
      }
    });
  };

  const handleSkip = () => {
    handleContinue('PREFER_NOT_TO_SAY');
  };

  const handleFeatureSelect = (feature: string) => {
    handleContinue(feature);
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
        <Text style={styles.heading}>LETS CALCULATE EMOTION APP FOR YOU!</Text>

        <Text style={styles.mainTitle}>
          Which Feature Do You Most Expect From This Application?
        </Text>

        <View style={styles.buttonContainer}>
          <FeatureButton
            label="REAL-TIME EMOTION DETECTION"
            onPress={() => handleFeatureSelect("REAL_TIME_DETECTION")}
          />
          <FeatureButton
            label="DAILY/WEEKLY EMOTION REPORTS"
            onPress={() => handleFeatureSelect("REPORTS")}
          />
          <FeatureButton
            label="TIPS OR ADVICE BASED ON EMOTIONS"
            onPress={() => handleFeatureSelect("TIPS")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const FeatureButton = ({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) => (
  <TouchableOpacity style={styles.featureButton} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 30,
    paddingBottom: 20,
  },
  skipButton: {
    backgroundColor: "#000",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  skipText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 14,
    color: "#4b5563",
    textAlign: "center",
    marginBottom: 32,
    letterSpacing: 0.5,
    fontWeight: "400",
    lineHeight: 20,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2937",
    textAlign: "center",
    marginBottom: 48,
    letterSpacing: 0.8,
  },
  buttonContainer: {
    width: "100%",
    maxWidth: 300,
  },
  featureButton: {
    backgroundColor: "#000",
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14, // sebelumnya 8, terlalu kecil bro
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 1.2,
  },
});

export default ExpectIdentificationScreen;
