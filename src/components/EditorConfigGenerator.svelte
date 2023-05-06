<script lang="ts">
	import { serialize } from '../domain/EditorConfig';
	import config from '../stores/EditorConfig';
	import EditorConfigSectionList from './EditorConfigSectionList.svelte';

	$: output = serialize($config);
</script>

<div>
	<EditorConfigSectionList bind:sections={$config.sections} />
	<output><pre>{output}</pre></output>
</div>
