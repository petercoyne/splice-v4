<script>
	// import { headerSticky } from '$lib/stores.js';
	let y
	$: if (y > 20) {
		headerSticky.set(true)
	} else {
		headerSticky.set(false)
	}
</script>
<!-- <svelte:window bind:scrollY={y}/> -->

<div class="fixed top-0 bg-white text-red-500">
	Y: {y}
</div>