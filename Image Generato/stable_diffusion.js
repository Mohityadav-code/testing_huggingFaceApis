async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
        {
            headers: { Authorization: "Bearer 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" },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.blob();
    return result;
}

document.getElementById("generateButton").addEventListener("click", async () => {
    const inputText = document.getElementById("inputText").value;
    const imageBlob = await query({ "inputs": inputText });
    const imageUrl = URL.createObjectURL(imageBlob);
    document.getElementById("imageContainer").innerHTML = `<img src="${imageUrl}" alt="Generated Image" class="mx-auto"/>`;

    
    document.getElementById("generateButton").addEventListener("click", async () => {
        const button = document.getElementById("generateButton");
        const inputText = document.getElementById("inputText").value;
        const loadingIndicator = document.getElementById("loadingIndicator");
    
        // Show loading indicator and disable button
        loadingIndicator.classList.remove('hidden');
        button.disabled = true;
    
        const imageBlob = await query({ "inputs": inputText });
        const imageUrl = URL.createObjectURL(imageBlob);
    
        // Hide loading indicator and enable button
        loadingIndicator.classList.add('hidden');
        button.disabled = false;
    
        document.getElementById("imageContainer").innerHTML = `<img src="${imageUrl}" alt="Generated Image" class="mx-auto"/>`;
    });
    
});
