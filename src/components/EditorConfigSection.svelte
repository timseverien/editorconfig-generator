<script lang="ts" context="module">
	import { createEventDispatcher } from 'svelte';
	import type { Property } from '../domain/EditorConfig';

	type BuiltInFileType = 'HTML' | 'JavaScript' | 'JSON' | 'TypeScript' | 'YAML';

	const FILE_NAME_EXTENSIONS_MAP: { [key in BuiltInFileType]: string[] } = {
		HTML: ['html'],
		JavaScript: ['js', 'jsx', 'mjs'],
		JSON: ['json'],
		TypeScript: ['mts', 'ts', 'tsx'],
		YAML: ['yml', 'yaml'],
	};

	const ALLOWED_PROPERTIES: Property['key'][] = [
		'charset',
		'end_of_line',
		'indent_size',
		'indent_style',
		'insert_final_newline',
		'tab_width',
		'trim_trailing_whitespace',
	];

	let counter = 0;
</script>

<script lang="ts">
	import { DEFAULT_VALUES } from '../domain/EditorConfig';
	import Button from './Button.svelte';
	import ButtonList from './ButtonList.svelte';
	import Card from './Card.svelte';
	import EditorConfigProperty from './EditorConfigProperty.svelte';
	import EditorConfigPropertyPresetList from './EditorConfigPropertyPresetList.svelte';
	import FormInputText from './FormInputText.svelte';
	import FormLabel from './FormLabel.svelte';
	import VisuallyHidden from './VisuallyHidden.svelte';

	export let name: string = '';
	export let properties: Property[] = [];

	const elementId = `section_${counter++}`;

	function addProperty(key: Property['key']) {
		properties = [...properties, DEFAULT_VALUES[key]];
	}

	function removeProperty(key: Property['key']) {
		properties = properties.filter((p) => p.key !== key);
	}

	function createSectionNameFromExtensionList(extensionList: string[]) {
		return `*.{${extensionList.join(',')}}`;
	}

	const dispatch = createEventDispatcher<{ remove: void }>();

	$: missingProperties = ALLOWED_PROPERTIES.filter(
		(key) => !properties.some((p) => p.key === key),
	);

	$: namePresets = [
		{
			text: 'Any',
			value: '*',
		},
		...(Object.keys(FILE_NAME_EXTENSIONS_MAP) as BuiltInFileType[]).map(
			(k) => ({
				text: k.toString(),
				value: createSectionNameFromExtensionList(FILE_NAME_EXTENSIONS_MAP[k]),
			}),
		),
	];
</script>

<Card>
	<div class="layout">
		<FormLabel forInput={elementId}>Section glob</FormLabel>
		<FormInputText id={elementId} bind:value={name} />
		<Button color="secondary" on:click={() => dispatch('remove')}>
			<VisuallyHidden>Delete section <code>{name}</code></VisuallyHidden>
			<span aria-hidden="true">×</span>
		</Button>

		<div class="layout__full-width">
			<EditorConfigPropertyPresetList
				presets={namePresets}
				on:pick={(e) => (name = e.detail)}
			/>
		</div>

		{#each properties.sort((a, b) => a.key.localeCompare(b.key)) as property}
			<EditorConfigProperty bind:property />
			<Button color="secondary" on:click={() => removeProperty(property.key)}>
				<VisuallyHidden>
					Delete property <code>{property.key}</code>
				</VisuallyHidden>
				<span aria-hidden="true">×</span></Button
			>
		{/each}
	</div>

	<div slot="footer" hidden={missingProperties.length === 0}>
		<ButtonList>
			{#each missingProperties as key}
				<Button on:click={() => addProperty(key)}>
					<VisuallyHidden>Add</VisuallyHidden>
					{key}
				</Button>
			{/each}
		</ButtonList>
	</div>
</Card>

<style>
	.layout {
		display: grid;
		grid-template-columns: 1fr 1fr min-content;
		gap: var(--space-3xs);
	}

	.layout__full-width {
		grid-column: span 3;
	}
</style>
