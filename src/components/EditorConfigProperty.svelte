<script lang="ts" context="module">
	import type {
		Property,
		PropertyCharset,
		PropertyEndOfLine,
	} from '../domain/EditorConfig';
	import type { Option } from './FormInputSelect.svelte';

	let counter = 0;
</script>

<script lang="ts">
	import FormInputSelect from './FormInputSelect.svelte';
	import FormLabel from './FormLabel.svelte';
	import FormInputInteger from './FormInputInteger.svelte';
	import FormInputBoolean from './FormInputBoolean.svelte';

	export let property: Property;

	const OPTIONS_CHARSET: Option<PropertyCharset['value']>[] = [
		{ text: 'Latin alphabet no. 1', value: 'latin1' },
		{ text: 'UTF-8 with byte order mark', value: 'utf-8-bom' },
		{ text: 'UTF-8', value: 'utf-8' },
		{ text: 'UTF-16 big-endian', value: 'utf-16be' },
		{ text: 'UTF-16 little-endian', value: 'utf-16le' },
	];

	const OPTIONS_END_OF_LINE: Option<PropertyEndOfLine['value']>[] = [
		{ text: 'CR', value: 'cr' },
		{ text: 'CRLF', value: 'crlf' },
		{ text: 'LF', value: 'lf' },
	];

	const elementId = `property_${counter++}`;
</script>

{#if property.key === 'charset'}
	<FormLabel forInput={elementId}>Charset</FormLabel>
	<FormInputSelect
		id={elementId}
		options={OPTIONS_CHARSET}
		bind:value={property.value}
	/>
{:else if property.key === 'end_of_line'}
	<FormLabel forInput={elementId}>Line terminator</FormLabel>
	<FormInputSelect
		id={elementId}
		options={OPTIONS_END_OF_LINE}
		bind:value={property.value}
	/>
{:else if property.key === 'indent_size'}
	<FormLabel forInput={elementId}>Indent size</FormLabel>
	<FormInputInteger id={elementId} bind:value={property.value} />
{:else if property.key === 'indent_style'}
	<FormLabel forInput={elementId}>Indent style</FormLabel>
	<FormInputSelect
		id={elementId}
		options={[
			{ text: 'Tab', value: 'tab' },
			{ text: 'Space', value: 'space' },
		]}
		bind:value={property.value}
	/>
{:else if property.key === 'insert_final_newline'}
	<FormLabel forInput={elementId}>Indent style</FormLabel>
	<FormInputBoolean id={elementId} bind:value={property.value} />
{:else if property.key === 'root'}
	<FormLabel forInput={elementId}>Is root configuration</FormLabel>
	<FormInputBoolean id={elementId} bind:value={property.value} />
{:else if property.key === 'tab_width'}
	<FormLabel forInput={elementId}>Tab width</FormLabel>
	<FormInputInteger id={elementId} bind:value={property.value} />
{:else if property.key === 'trim_trailing_whitespace'}
	<FormLabel forInput={elementId}>Trim trailing whitespace</FormLabel>
	<FormInputBoolean id={elementId} bind:value={property.value} />
{/if}
