<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export let color: 'primary' | 'secondary' = 'primary';
	export let variant: 'default' | 'invisible' = 'default';

	export let attributes: Partial<Omit<HTMLButtonAttributes, 'on:click'>> = {};

	const dispatch = createEventDispatcher<{ click: void }>();

	$: className = [
		'button',
		`button--color-${color}`,
		`button--variant-${variant}`,
	].join(' ');
</script>

<button
	{...attributes}
	type={attributes.type ?? 'button'}
	class={className}
	on:click={() => dispatch('click')}
>
	<slot />
</button>

<style>
	.button {
		--button-background: var(--color-primary);

		display: block;
		padding-block: 0;
		padding-inline: var(--space-2xs);

		background-color: var(--button-background);
		border: 0;
		border-radius: var(--border-radius-s);

		line-height: var(--input-height);
		white-space: nowrap;
	}

	.button--color-primary {
		--button-background: var(--color-primary);
	}

	.button--color-secondary {
		--button-background: var(--color-secondary);
	}

	.button--variant-invisible {
		padding: 0;
		background-color: transparent;
		line-height: inherit;
	}
</style>
