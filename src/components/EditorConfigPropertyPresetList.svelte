<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Chip from './Chip.svelte';
	import Button from './Button.svelte';

	type T = $$Generic<string>;

	export let presets: { text: string; value: T }[];

	const dispatch = createEventDispatcher<{ pick: T }>();
</script>

<div class="container">
	{#each presets as preset}
		<Button variant="invisible" on:click={() => dispatch('pick', preset.value)}>
			<Chip>{preset.text}</Chip>
		</Button>
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-flow: row wrap;
		gap: var(--space-3xs);
	}
</style>
