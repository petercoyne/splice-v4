<script>
	import { menuShow } from '$lib/stores.js'
</script>

<div on:click="{toggleMenu}" use:clickOutside on:outclick={toggleMenu} transition:slide
class="sm:hidden z-30 mt-2 transition-all duration-1000">
	<div class="flex gap-4 px-6">
		<Button icon="tool" text="Work" url="/work"/>
		<Button icon="info" text="About" url="/about"/>
		<Button icon="send" text="Contact" url="/contact"/>
	</div>
</div>