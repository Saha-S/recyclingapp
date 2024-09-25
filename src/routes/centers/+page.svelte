<script>
	// Sample data for recycling centers
	let centers = [
		{
			name: 'Green Recycling Center',
			address: '123 Eco Lane, Lappeenranta, Finland',
			hours: 'Mon-Fri: 9am - 5pm'
		},
		{
			name: 'Sustainable Waste Facility',
			address: '456 Greenway Rd, Lappeenranta, Finland',
			hours: 'Mon-Sat: 8am - 6pm'
		},
		{
			name: 'Recycle Hub',
			address: '789 Environment St, Lappeenranta, Finland',
			hours: 'Tue-Sun: 10am - 4pm'
		}
	];
</script>

<main>
	<h1>Recycling Centers</h1>
	<p>Here are some nearby recycling centers where you can drop off your recyclable items:</p>

	<ul>
		{#each centers as center}
			<li>
				<h2>{center.name}</h2>
				<p><strong>Address:</strong> {center.address}</p>
				<p><strong>Hours:</strong> {center.hours}</p>
			</li>
		{/each}
	</ul>

	{#if centers.length === 0}
		<p>No recycling centers found.</p>
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2rem;
	}

	h1 {
		color: #2e7d32; /* Dark green */
	}

	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
		width: 100%;
		max-width: 600px;
	}

	li {
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 1rem;
		margin: 0.5rem 0;
		background-color: #f9f9f9;
	}

	h2 {
		margin: 0;
		color: #4caf50; /* Green */
	}

	p {
		margin: 0.2rem 0;
		color: #555;
	}
</style>
