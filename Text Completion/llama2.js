async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/gpt2",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}



document.getElementById('generateButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
	query({"inputs": inputText}).then((response) => {
		console.log(JSON.stringify(response));
		document.getElementById('responseContainer').innerText = response[0].generated_text || response.error;
	});
});
