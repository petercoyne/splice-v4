<script>
	export let dark
</script>


<a href="/" class="grid transition-all no-underline">
	<h1 class="dekar row-start-1 col-start-1 text-[2.5rem] sm:text-4xl colorcycle mt-[2px] transition-all blur-sm">splice</h1>
	{#if !dark}
		<h1 class="dekar row-start-1 col-start-1 text-[2.5rem] sm:text-4xl mt-[2px] text-black">splice</h1>
		<h1 class="dekar row-start-1 col-start-1 text-[2.5rem] sm:text-4xl  text-white">splice</h1>
		<!-- <h2 class="text-xs -mt-3 sm:text-[11px] text-center sm:mt-0 text-white mix-blend-overlay">design &amp; web dev</h2> -->
	{:else}
		<h1 class="dekar row-start-1 col-start-1 text-[2.5rem] sm:text-4xl mt-[2px]  text-white">splice</h1>
		<h1 class="dekar row-start-1 col-start-1 text-[2.5rem] sm:text-4xl text-black">splice</h1>
	{/if}
</a>