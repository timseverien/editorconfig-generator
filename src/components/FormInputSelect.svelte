<script lang="ts" context="module">
	export interface Option<T extends string = string> {
		text: string;
		value: T;
	}
</script>

<script lang="ts">
	type T = $$Generic<string>;

	export let id: string;
	export let options: Option<T>[] = [];
	export let value: T;
</script>

<select {id} bind:value>
	{#each options as option}
		<option value={option.value}>{option.text}</option>
	{/each}
</select>
