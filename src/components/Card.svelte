<script>
	import Flow from './Flow.svelte';
</script>

<div class="container">
	<slot name="header" />
	<div class="content"><slot /></div>
	<slot name="footer" />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);

		padding: var(--space-xs);
		border: 1px solid #ccc;
		border-radius: var(--border-radius-m);
	}

	.content {
		flex-grow: 1;
	}
</style>
