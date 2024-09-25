<script>
	import { goto } from '$app/navigation';
	import logo from '$lib/images/environmental-conservation-protection-our-world.png'; // Updated logo import

	const navigateToImageRecognition = () => goto('/upload');
	const navigateToCenters = () => goto('/centers');
	const navigateToImpact = () => goto('/impact');
	const navigateToAbout = () => goto('/about');
</script>

<main>
	<header class="header">
		<img src={logo} alt="Smart Recycling Logo" class="logo" />
		<h1>Smart Recycling Application</h1>
		<p>Your partner in eco-friendly living, making recycling easier and more accessible.</p>
	</header>

	<section class="intro">
		<p>
			The Smart Recycling Application is designed to simplify the recycling process for everyone.
			Our goal is to provide users with the tools they need to understand and participate in
			recycling efforts, thereby making a positive impact on the environment.
		</p>
	</section>

	<section class="features">
		<h2>Key Features</h2>
		<div class="feature-list">
			<div class="feature-item">
				<h3>🖼️ Image Recognition</h3>
				<p>
					Upload an image of an item, and our advanced algorithms will analyze it, telling you if
					it's recyclable or not. Get instant feedback to make informed decisions on waste
					management.
				</p>
				<button on:click={navigateToImageRecognition}>Try It</button>
			</div>
			<div class="feature-item">
				<h3>📍 Recycling Centers Locator</h3>
				<p>
					Find the nearest recycling centers with just a tap, based on your current location. Our
					interactive map will guide you to the most convenient recycling facilities in your area.
				</p>
				<button on:click={navigateToCenters}>Find Centers</button>
			</div>
			<div class="feature-item">
				<h3>📈 Track Your Impact</h3>
				<p>
					Monitor your recycling activity over time and visualize your contribution to a greener
					planet. See the difference your actions make and stay motivated to keep recycling!
				</p>
				<button on:click={navigateToImpact}>View Impact</button>
			</div>
		</div>
	</section>

	<footer class="footer">
		<p>&copy; {new Date().getFullYear()} Smart Recycling. All rights reserved.</p>
	</footer>
</main>

<style>
	body {
		font-family: 'Arial', sans-serif;
		margin: 0;
		padding: 0;
		background-color: #f4f4f9; /* Light background color */
		color: #333; /* Darker text color for contrast */
	}

	main {
		padding: 20px;
		max-width: 1200px; /* Increased max-width for a better layout */
		margin: auto;
	}

	.header {
		text-align: center;
		padding: 20px;
		background: linear-gradient(135deg, #4caf50 0%, #81c784 100%); /* Green gradient background */
		color: white; /* White text for contrast */
		border-radius: 10px; /* Rounded corners */
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
	}

	.header .logo {
		width: 120px;
		height: auto;
		margin-bottom: 10px;
	}

	h1 {
		font-size: 2.5em;
		margin: 0.5em 0;
	}

	h2 {
		font-size: 2em;
		margin: 1.5em 0 0.5em;
		color: #4caf50; /* Green color for section headers */
	}

	.intro {
		margin: 30px 0;
		padding: 20px;
		background-color: #e8f5e9; /* Light green background */
		border-left: 5px solid #4caf50; /* Green left border */
		border-radius: 5px; /* Rounded corners */
		text-align: center; /* Centered text */
	}

	.features {
		margin-top: 40px;
	}

	.feature-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 20px;
	}

	.feature-item {
		background: white;
		border-radius: 10px;
		padding: 20px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition:
			transform 0.2s,
			box-shadow 0.2s;
		text-align: center;
	}

	.feature-item:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}

	button {
		margin-top: 15px;
		padding: 10px 20px;
		font-size: 1rem;
		color: white;
		background-color: #4caf50; /* Green */
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition:
			background-color 0.3s,
			transform 0.2s;
	}

	button:hover {
		background-color: #388e3c; /* Darker green on hover */
		transform: scale(1.05);
	}

	.footer {
		text-align: center;
		margin-top: 40px;
		font-size: 0.9rem;
		color: #777;
	}
</style>
