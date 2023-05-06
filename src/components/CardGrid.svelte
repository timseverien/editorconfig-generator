<div class="layout">
	<slot />
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: repeat(auto-fit, 50ch);
		gap: var(--space-xs);
	}
</style>
