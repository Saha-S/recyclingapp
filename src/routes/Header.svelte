<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/environmental-conservation-protection-our-world.png'; // Updated logo import
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="logo">
		<a href="/">
			<img src={logo} alt="Environmental Conservation Logo" />
		</a>
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/"> Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/centers' ? 'page' : undefined}>
				<a href="/centers"> Recycling Centers</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/upload') ? 'page' : undefined}>
				<a href="/upload"> Image Recognition</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/impact') ? 'page' : undefined}>
				<a href="/impact"> Track Your Impact</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/about') ? 'page' : undefined}>
				<a href="/about"> About Us</a>
			</li>
		</ul>
	</nav>

	<div class="github">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center; /* Center vertically */
		background-color: #2e8b47; /* Dark green background */
		padding: 1rem 2rem; /* Add padding for spacing */
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
	}

	.logo img {
		height: 50px; /* Logo height */
		object-fit: contain;
	}

	nav {
		flex-grow: 1; /* Allow nav to take remaining space */
		margin: 0 2rem; /* Space around nav */
	}

	ul {
		display: flex;
		justify-content: center; /* Center items */
		list-style: none; /* Remove bullet points */
		padding: 0;
		margin: 0;
	}

	li {
		margin: 0 1.5rem; /* Space between items */
		position: relative; /* For hover effect */
	}

	nav a {
		color: white; /* Text color */
		text-decoration: none; /* Remove underline */
		font-weight: bold; /* Make text bold */
		padding: 0.5rem 1rem; /* Padding for clickable area */
		border-radius: 5px; /* Rounded edges */
		transition:
			background-color 0.3s ease,
			color 0.3s ease; /* Smooth transition */
	}

	nav a:hover {
		background-color: rgba(255, 255, 255, 0.2); /* Light hover effect */
		color: #fff; /* Ensure text color stays white on hover */
	}

	.github img {
		width: 30px; /* GitHub logo size */
		height: 30px; /* Maintain aspect ratio */
	}

	/* Responsive styles */
	@media (max-width: 768px) {
		header {
			flex-direction: column; /* Stack items on small screens */
			align-items: flex-start; /* Align items to the start */
		}

		nav {
			margin: 1rem 0; /* Add margin for spacing */
		}

		ul {
			flex-direction: column; /* Stack menu items vertically */
		}

		li {
			margin: 0.5rem 0; /* Space between items */
		}
	}
</style>
