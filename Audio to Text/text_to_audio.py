from gtts import gTTS

# Sample text for the audio file
text = "Hello, this is a test audio for speech recognition purposes. The quick brown fox jumps over the lazy dog."

# Creating the text-to-speech object
tts = gTTS(text)

# Saving the audio file
tts.save("test_audio_for_speech_recognition.mp3")
