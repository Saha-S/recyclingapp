<script>
	// Sample data representing user recycling impact
	let recyclingData = {
		totalItemsRecycled: 120,
		totalWasteSaved: 300, // in kg
		recyclingCentersVisited: 5,
		totalImpactScore: 75 // out of 100
	};

	const impactMessage = (score) => {
		if (score >= 80) return "You're a Recycling Champion!";
		else if (score >= 50) return 'Great job! Keep it up!';
		else return "Every little bit helps. Let's improve together!";
	};
</script>

<main>
	<header class="header">
		<h1>Your Recycling Impact</h1>
		<p>See how your efforts contribute to a more sustainable future!</p>
	</header>

	<section class="impact-details">
		<h2>Impact Overview</h2>
		<div class="impact-stats">
			<div class="stat-item">
				<h3>Total Items Recycled</h3>
				<p>{recyclingData.totalItemsRecycled} items</p>
			</div>
			<div class="stat-item">
				<h3>Total Waste Saved</h3>
				<p>{recyclingData.totalWasteSaved} kg</p>
			</div>
			<div class="stat-item">
				<h3>Recycling Centers Visited</h3>
				<p>{recyclingData.recyclingCentersVisited} centers</p>
			</div>
			<div class="stat-item">
				<h3>Impact Score</h3>
				<p>{recyclingData.totalImpactScore} / 100</p>
				<p class="impact-message">{impactMessage(recyclingData.totalImpactScore)}</p>
			</div>
		</div>
	</section>

	<section class="tips">
		<h2>Tips to Increase Your Impact</h2>
		<ul>
			<li>Always check if an item is recyclable before disposing of it.</li>
			<li>Visit local recycling centers regularly to ensure proper waste management.</li>
			<li>Educate friends and family about the importance of recycling.</li>
			<li>Track your recycling habits and set goals to improve your score!</li>
		</ul>
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
		background-color: #f4f4f9;
		color: #333;
	}

	main {
		padding: 20px;
		max-width: 900px;
		margin: auto;
	}

	.header {
		text-align: center;
		padding: 20px;
		background: linear-gradient(135deg, #4caf50 0%, #81c784 100%);
		color: white;
		border-radius: 10px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	}

	h1 {
		font-size: 2.5em;
		margin: 0.5em 0;
	}

	h2 {
		font-size: 2em;
		margin: 1.5em 0;
		color: #4caf50;
	}

	.impact-details {
		margin-top: 30px;
		padding: 20px;
		background-color: #e8f5e9;
		border-radius: 5px;
	}

	.impact-stats {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 20px;
	}

	.stat-item {
		background: white;
		border-radius: 10px;
		padding: 15px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		text-align: center;
	}

	.impact-message {
		font-weight: bold;
		margin-top: 10px;
	}

	.tips {
		margin-top: 40px;
		background-color: #ffffff;
		padding: 20px;
		border-radius: 5px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	ul {
		list-style-type: disc;
		padding-left: 20px;
	}

	footer {
		text-align: center;
		margin-top: 40px;
		font-size: 0.9rem;
		color: #777;
	}
</style>
