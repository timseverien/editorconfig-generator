<div class="container">
	<slot />
</div>

<style>
	.container {
		display: flex;
		flex-flow: row wrap;
		gap: var(--space-3xs);
	}
</style>
