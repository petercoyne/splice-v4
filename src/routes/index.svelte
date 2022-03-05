<script>
	import { fade, slide } from 'svelte/transition'
	import LogoHome from '$lib/LogoHome.svelte'
	import Container from '$lib/Container.svelte'
	import Panel from '$lib/Panel.svelte'
	import Footer from '$lib/Footer.svelte'
	import { icons } from '$lib/icons'
	import { navStuck } from '$lib/stores'
	import { gridstyles, containerstyles, padstyles, translate } from '$lib/styles';
	let y, innerHeight

</script>

<svelte:window bind:scrollY={y} bind:innerHeight/>

<div class="grid absolute -z-30 top-0 w-screen h-[calc(100vh-4rem)] grid-cols-1 grid-rows-1
	bg-[url('/bg-blue-lowres.webp')] bg-no-repeat bg-cover bg-center">
	<video id="flamebg" src="/2-pass-500-vslow-grey-grain.mp4" autoplay playsinline muted loop 
	class="opacity-95 col-start-1 row-start-1 mix-blend-soft-light top-0 -z-0 w-full h-full object-cover object-center blur-md overflow-hidden contrast-150"/>
	<div class="col-start-1 row-start-1 self-center flex flex-col justify-around items-center">
		<LogoHome/>
	</div>
	<div class="col-start-1 row-start-1 self-end grid items-center">
		{#if !$navStuck}
		<a href="#contentstart" transition:fade class="w-screen grid pb-8 z-10 justify-center items-center mb-16 opacity-50">
			<div id="scrolldown1" class="animate-pulse mt-0 col-start-1 row-start-1 border-r border-b w-4 h-4 border-white rotate-45"/>
			<div id="scrolldown2" class="animate-pulse mt-4 col-start-1 row-start-1 border-r border-b w-4 h-4 border-white rotate-45"/>
			<div id="scrolldown3" class="animate-pulse mt-8 col-start-1 row-start-1 border-r border-b w-4 h-4 border-white rotate-45"/>
		</a>
		{/if}
	</div>

</div>


<Panel style="mt-[calc(100vh-4rem)] bg-[url('/bg-blue-lowres.webp')] text-white border-t border-sky-900">
<div id="contentstart"/>
		<Container>
			<!-- <p class="text-center text-red-500">placeholder images/text</p> -->
			<div class="flex flex-col gap-x-8 items-center
						sm:grid sm:grid-cols-2">

				<img src="/landing/responsive.webp" alt="Responsive design"
						class="mt-8 object-contain w-full h-full
								sm:mt-0 sm:translate-x-8
								xl:translate-x-24
 "/>
				<div class="w-full {padstyles.normal}">
					<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold headergradient pb-4">Affordable, easy <br class="hidden xl:block"/>to use websites</h2>
					<h4 class="text-base text-sky-300">Get your business online or overhaul your existing presence.
					</h4>
				</div>

			</div>
		</Container>
		<Panel style="bg-white bg-opacity-5 border-t border-b border-opacity-20 border-white">
			<Container>
				<div class="flex flex-col-reverse gap-x-16 items-center
				sm:grid sm:grid-cols-2">
					<div class="w-full {padstyles.normal} {translate.right}">
						<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold headergradient pb-4">Reliable, Robust <br class="hidden xl:block"/>&amp;  Lightning Fast</h2>
						<h4 class="text-base text-sky-300">Built on the latest web technologies.
						</h4>
					</div>
					<img src="/landing/sveltekit.webp" alt="SvelteKit"
					class="w-full translate-y-8 -translate-x-8 m-[-20%] scale-125
							sm:translate-x-8 sm:scale-[2]
							md:scale-150"/>
				</div>
			</Container>
		</Panel>
		<Container style="">
			<div class="flex flex-col 
			sm:grid gap-x-8 grid-cols-1 sm:grid-cols-2 items-center">
				<img src="/landing/storyblok.webp" alt="StoryBlok CMS" class="place-self-center justify-self-end sm:translate-x-8
				xl:translate-x-24"/>
				<div class="{padstyles.normal}">
					<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold headergradient pb-2">Some stuff<br class=""/> to figure out</h2>
					<h4 class="text-base text-sky-300 sm:my-4">
						How to decide on tiers/products. How to pitch said products. What kind of customers to target.
					</h4>
				</div>
			</div>
		</Container>
		<Container style="!pt-0">
			<Footer/>
		</Container>

</Panel>

<Panel style="bg-sky-900 bg-opacity-40">
	
	
</Panel>

<style>

	#scrolldown1 {
		animation-delay: 0s;
	}
	#scrolldown2 {
		animation-delay: 0.4s;
	}
	#scrolldown3 {
		animation-delay: 0.8s;
	}
</style>