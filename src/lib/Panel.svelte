<script>

	import { onMount } from 'svelte';
	import { headerLight, navHeight } from '$lib/stores'

	export let style
	let panel, y, vh, offset


	onMount(() => {
		offset = panel && panel.getBoundingClientRect().top
	})

	$: if (y >= vh - ($navHeight / 2)) {
		$headerLight = true;
	} else {
		$headerLight = false;
	}

</script>

<svelte:window bind:scrollY={y} bind:innerHeight={vh}/>

<div bind:this={panel} class="bg-cover {style}">
	<slot/>
</div>