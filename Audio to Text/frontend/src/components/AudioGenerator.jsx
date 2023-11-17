import React, { useState } from 'react';

function SpeechRecognition() {
    const [response, setResponse] = useState('');

    const handleUpload = (event) => {
        event.preventDefault();
        const fileInput = document.getElementById('audioInput');
        const file = fileInput.files[0];

        if (file) {
            console.log('Uploading file...');
            const formData = new FormData();
            formData.append('audioFile', file);
            console.log('Sending request...', formData);

            fetch('http://127.0.0.1:5000/analyze', {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                const response=JSON.stringify(data, null, 2);
                setResponse(response);
            })
            .catch(error => {
                console.error('Error:', error);
                setResponse('Error generating text.');
            });
        }
    }

    return (
        <div className="px-16 py-10 rounded-lg text-center bg-white w-fit">
            <h1 className="text-3xl font-bold mb-8">Whisper API Speech Recognition</h1>
            <input type="file" id="audioInput" accept=".flac, .mp3, .wav" className="mb-4" />
            <button onClick={handleUpload} className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 px-3">Upload and Analyze</button>
            <pre className="mt-8 text-left">{response}</pre>
        </div>
    );
}

export default SpeechRecognition;
