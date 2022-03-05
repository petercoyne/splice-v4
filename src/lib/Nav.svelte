<script>
	import { fade, slide } from 'svelte/transition'
	import Logo from '$lib/Logo.svelte'
	import MobileButton from '$lib/MobileButton.svelte'
	import { gridstyles } from '$lib/gridstyles'
	import { menuShow, navStuck } from '$lib/stores.js'
	import { clickOutside } from "$lib/click_outside.js"
	import Button from '$lib/Button.svelte'
	
	let y, invMargin, dark = false

	$: if (y > 20) {
		$navStuck = true
		dark = false
	} else {
		$navStuck = false
		dark = false

	}
	
	function toggleMenu() {
		$menuShow = !$menuShow;
	}
</script>

<svelte:window bind:scrollY={y}/>

<nav class="z-20 border-sky-900 border-opacity-0 top-0 transition-all duration-1000 w-full fixed bg-opacity-0 bg-black {gridstyles.top}"
	class:stickystyles={$navStuck} >

	<div class="{gridstyles.x} hidden sm:grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center">
		<div class="dummy flex col-span-1 md:col-span-2 lg:col-span-3">
	
			<div transition:fade|local class="z-20">
				<Logo bind:dark/>
			</div>
		</div>
	
		<div class=""><Button icon="tool" text="Work" url="/work" bind:dark/></div>
		<div class=""><Button icon="info" text="About" url="/about" bind:dark/></div>
		<div class=""><Button icon="send" text="Contact" url="/contact" bind:dark/></div>
	</div>

	<div class="flex px-6 justify-between items-center sm:hidden">
		<Logo bind:dark/>
		<MobileButton/>
	</div>

	{#if $menuShow}
	<div on:click="{toggleMenu}" use:clickOutside on:outclick={toggleMenu} transition:slide
	class="sm:hidden -z-30 mt-2">
		<div class="flex gap-4 px-6">
			<Button icon="tool" text="Work" url="/work" dark/>
			<Button icon="info" text="About" url="/about" dark/>
			<Button icon="send" text="Contact" url="/contact" dark/>
		</div>
	</div>
	{/if}
</nav>

<style type="text/postcss">
	.stickystyles {
		@apply bg-black bg-opacity-50 backdrop-blur-xl py-4 shadow-2xl border-b border-sky-900;
	}
</style>