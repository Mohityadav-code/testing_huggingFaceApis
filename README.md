# Testing Hugging Face APIs

Welcome to the `testing_huggingFaceApis` repository. This project is dedicated to testing and implementing various Hugging Face APIs, including audio to text conversion using the Whisper API, image generation, and text completion. The project is structured with a Node.js backend and a React front end to demonstrate these capabilities.

## Features

- **Whisper API for Speech Recognition**: Utilizes the Whisper API for converting audio to text.
- **Image Generation**: Demonstrates the generation of images based on user input.
- **Text Completion**: Implements text generation and completion features.
- **React Frontend**: Provides a user-friendly interface for interacting with the APIs.
- **Node.js Backend**: Manages API requests and serves the React frontend.

## Installation and Setup

1. **Clone the Repository**:
     ```bash
     git clone https://github.com/Mohityadav-code/testing_huggingFaceApis.git
     ```

2. **Install Dependencies**:
     - Navigate to the project directory:
         ```bash
         cd testing_huggingFaceApis
         ```
     - Install the required dependencies using npm:
         ```bash
         npm install
         ```

3. **Start the Application**:
     - Start the Node.js backend server:
         ```bash
         npm run start:server
         ```
     - Start the React frontend:
         ```bash
         npm run start:client
         ```

4. **Access the Application**:
     - Open your web browser and visit `http://localhost:3000` to access the React frontend.

   

## Usage
Use the React application to upload audio files in .flac, .mp3, or .wav formats.
The application will send the audio file to the Node.js server, which then uses the Whisper API to transcribe the audio.
View the transcription results displayed on the web interface.

## Contributing
Contributions to improve the application are welcome. Feel free to fork the repository and submit pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
Hugging Face for providing the Whisper API and other AI models.
All contributors who participate in this project