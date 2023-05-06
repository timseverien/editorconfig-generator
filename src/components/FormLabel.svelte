<script lang="ts">
	export let forInput: string;
</script>

<label class="container" for={forInput}><slot /></label>

<style>
	.container {
		line-height: var(--input-height);
	}
</style>
