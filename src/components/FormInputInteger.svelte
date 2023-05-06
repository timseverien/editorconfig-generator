<script lang="ts">
	import FormInputText from './FormInputText.svelte';

	export let id: string;
	export let value: number;
	let valueString: string = value.toString();
</script>

<FormInputText
	{id}
	bind:value={valueString}
	on:input={(e) => {
		const valueNew = Number.parseInt(e.detail.replace(/[^0-9]/, '') ?? 0);
		value = Number.isNaN(valueNew) ? 0 : valueNew;
		valueString = value.toString();
	}}
/>
