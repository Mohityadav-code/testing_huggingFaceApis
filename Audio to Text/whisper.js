document.getElementById('uploadButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const fileInput = document.getElementById('audioInput');
    const file = fileInput.files[0];

    if (file) {
        console.log('Uploading file...');
        const formData = new FormData();
        formData.append('audioFile', file);
        console.log('Sending request...', formData);

        fetch('http://127.0.0.1:3000/analyze', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('responseContainer').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});
