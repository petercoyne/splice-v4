<script>
	import { fade, slide } from 'svelte/transition'
	import LogoHome from '$lib/LogoHome.svelte'
	import Container from '$lib/Container.svelte'
	import Panel from '$lib/Panel.svelte'
	import Footer from '$lib/Footer.svelte'
	import { icons } from '$lib/icons'
	import { navStuck } from '$lib/stores'
	import { containerstyles } from '$lib/gridstyles'
import { gridstyles } from '../lib/gridstyles';
	let y

</script>

<svelte:window bind:scrollY={y}/>

<div class="grid absolute -z-30 top-0 w-screen h-[calc(100vh-4rem)] grid-cols-1 grid-rows-1
	bg-[url('/bg-blue-lowres.webp')] bg-no-repeat bg-cover bg-center">
	<video id="flamebg" src="/2-pass-500-vslow-grey-grain.mp4" autoplay playsinline muted loop 
	class="opacity-95 col-start-1 row-start-1 mix-blend-soft-light top-0 -z-0 w-full h-full object-cover object-center blur-md overflow-hidden contrast-150"/>
	<div class="col-start-1 row-start-1 self-center flex flex-col justify-around items-center">
		<LogoHome/>
	</div>
	<div class="col-start-1 row-start-1 self-end grid items-center">
		{#if !$navStuck}
		<div transition:fade class="w-screen grid justify-center items-center mb-16 opacity-50">
			<div id="scrolldown1" class="animate-pulse mt-0 col-start-1 row-start-1 border-r border-b w-4 h-4 border-white rotate-45"/>
			<div id="scrolldown2" class="animate-pulse mt-4 col-start-1 row-start-1 border-r border-b w-4 h-4 border-white rotate-45"/>
			<div id="scrolldown3" class="animate-pulse mt-8 col-start-1 row-start-1 border-r border-b w-4 h-4 border-white rotate-45"/>
		</div>
		{/if}
	</div>

</div>

<div class="h-[calc(100vh-4rem)] -z-50 top-0">&nbsp</div>

<Panel style="bg-[url('/bg-blue-lowres.webp')] text-white border-t border-sky-900" navmode="dark">

	<div class="h-full bg-cover bg-bottom bg-no-repeat">
		<Container style="" nopad>
			<!-- <p class="text-center text-red-500">placeholder images/text</p> -->
			<div class="flex flex-col sm:grid gap-x-16 sm:grid-cols-2 items-center pt-8 sm:py-16">

				<img src="/landing/responsive.webp" alt="Responsive design"
						class="place-self-center justify-self-end
						sm:w-2/3 sm:-translate-x-8 sm:scale-150
						lg:translate-x-0 lg:scale-110 "/>
				<div class="p-0 sm:w-2/3">
					<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold headergradient">Affordable, easy <br class="hidden xl:block"/>to use websites</h2>
					<h4 class="text-base text-sky-300 my-4">Get your business online or overhaul your existing presence.
					</h4>
				</div>

			</div>
		</Container>
		<Container style="bg-white bg-opacity-5 border-t border-b border-opacity-20 border-white !py-0 overflow:hidden" nopad>
			<div class="{containerstyles.x}
			flex flex-col-reverse sm:grid gap-x-16 sm:py-16 sm:grid-cols-2 items-center">
				<div class="pb-8 justify-self-end row-start-1
							sm:pb-0 sm:px-0 sm:w-3/4 ">
					<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold headergradient pb-2">Reliable, Robust <br class="hidden xl:block"/>&amp;  Lightning Fast</h2>
					<h4 class="text-base text-sky-300 my-4">Built on the latest web technologies, your site will load and
						respond rapidly no matter where in the world your customers are.
					</h4>
				</div>
				<img src="/landing/sveltekit-crop.webp" alt="SvelteKit"
				class="w-full translate-y-10 row-start-1
						sm:translate-y-12 sm:scale-[2]
						md:translate-y-16
						lg:translate-y-12 lg:-translate-x-16 lg:scale-125
						xl:translate-y-16"/>
			</div>
		</Container>
		<Container style="">
			<div class="flex flex-col 
			sm:grid gap-x-16 grid-cols-1 sm:grid-cols-2 items-center">
				<img src="/landing/storyblok.webp" alt="StoryBlok CMS" class="sm:w-3/4 place-self-center justify-self-end"/>
				<div class="sm:w-2/3 px-8 sm:px-0">
					<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold headergradient pb-2">Some stuff<br class="hidden xl:block"/> to figure out</h2>
					<h4 class="text-base text-sky-300 sm:my-4">
						How to decide on tiers/products. How to pitch said products. What kind of customers to target.
					</h4>
				</div>
			</div>
		</Container>
		<Container style="!pt-0">
			<Footer/>
		</Container>
	</div>
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