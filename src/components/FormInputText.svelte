<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { createEventDispatcher } from 'svelte';

	export let id: string;
	export let value: string;
	export let attributes: Partial<
		Pick<
			HTMLInputAttributes,
			| 'autocomplete'
			| 'disabled'
			| 'maxlength'
			| 'minlength'
			| 'pattern'
			| 'placeholder'
			| 'readonly'
			| 'required'
			| 'on:change'
			| 'on:input'
		>
	> = {};

	const dispatch = createEventDispatcher<{
		change: string;
		input: string;
	}>();
</script>

<input
	type="text"
	{...attributes}
	{id}
	bind:value
	on:change={(e) => dispatch('change', e.currentTarget.value)}
	on:input={(e) => dispatch('input', e.currentTarget.value)}
/>
