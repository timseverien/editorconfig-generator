<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	export let id: string;
	export let value: boolean;
	export let attributes: Partial<
		Pick<HTMLInputAttributes, 'disabled' | 'readonly' | 'required'>
	> = {};
</script>

<div class="container">
	<input type="checkbox" {...attributes} {id} bind:checked={value} />
</div>

<style>
	.container {
		line-height: var(--input-height);
	}
</style>
