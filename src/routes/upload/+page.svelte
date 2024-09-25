<script>
	let file; // To hold the uploaded file
	let message = ''; // Message to display after upload

	const handleUpload = async () => {
		if (!file) {
			message = 'Please select a file to upload.';
			return;
		}

		const formData = new FormData();
		formData.append('image', file);

		try {
			const response = await fetch('/api/upload', {
				// Adjust the endpoint as needed
				method: 'POST',
				body: formData
			});

			if (!response.ok) {
				throw new Error('Upload failed.');
			}

			message = 'File uploaded successfully!';
			// Reset the file input
			file = null;
		} catch (error) {
			message = error.message;
		}
	};
</script>

<main>
	<h1>Upload Recycling Image</h1>
	<p>Select an image of a recyclable item to upload:</p>

	<input type="file" accept="image/*" on:change={(e) => (file = e.target.files[0])} />
	<button on:click={handleUpload}>Upload</button>

	{#if message}
		<p>{message}</p>
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2rem;
	}

	input[type='file'] {
		margin: 1rem 0;
	}

	button {
		padding: 0.5rem 1rem;
		background-color: #4caf50; /* Green */
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}

	button:hover {
		background-color: #45a049;
	}

	p {
		margin-top: 1rem;
		color: #555;
	}
</style>
