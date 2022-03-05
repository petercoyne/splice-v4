<script>
	export let style, nopad
	import { containerstyles } from '$lib/gridstyles'
</script>

{#if !nopad}
<div class="{style} {containerstyles.normal}">
	<slot/>
</div>
{:else}
<div class="{style} w-full {containerstyles.y}">
	<slot/>
</div>
{/if}