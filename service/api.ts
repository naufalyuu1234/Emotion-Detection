const BASE_URL = 'http://192.168.1.7:5000';

export interface DetectionResponse {
  success: boolean;
  message: string;
  faces: Array<{
    id: number;
    age: number;
    gender: string;
    genderConfidence: number;
    emotions: {
      angry: number;
      disgust: number;
      fear: number;
      happy: number;
      neutral: number;
      sad: number;
      surprise: number;
    };
    dominantEmotion: string;
    emotionConfidence: number;
  }>;
  imageInfo: {
    width: number;
    height: number;
  };
  processedImage?: string;
}

export const detectEmotion = async (imageBase64: string): Promise<DetectionResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/api/face/detect`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: imageBase64,
      }),
    });
    
    if (!response.ok) {
      throw new Error('Detection failed');
    }
    
    return await response.json();
  } catch (error: any) {
    throw new Error(`Error detecting emotion: ${error.message}`);
  }
};