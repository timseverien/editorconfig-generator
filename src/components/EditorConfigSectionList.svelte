<script lang="ts">
	import type { Section } from '../domain/EditorConfig';
	import Button from './Button.svelte';
	import CardGrid from './CardGrid.svelte';
	import EditorConfigSection from './EditorConfigSection.svelte';

	export let sections: Section[] = [];

	function addSection() {
		sections = [
			...sections,
			{
				name: '*.ext',
				properties: [],
			},
		];
	}

	function removeSection(section: Section) {
		sections = sections.filter((s) => s !== section);
	}
</script>

<CardGrid>
	{#each sections as section}
		<EditorConfigSection
			bind:name={section.name}
			bind:properties={section.properties}
			on:remove={() => removeSection(section)}
		/>
	{/each}

	<div>
		<Button on:click={addSection}>Add a section</Button>
	</div>
</CardGrid>
