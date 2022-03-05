<script>
	import Button from "$lib/Button.svelte"
	import Container from "$lib/Container.svelte"
	import Panel from "$lib/Panel.svelte"
	import Footer from "$lib/Footer.svelte"
</script>

<Panel style="bg-[url('/bg-blue-lowres.webp')] pt-32 min-h-screen">
<Container>
	<h4 class="uppercase barlow">Contact Details</h4>
	<hr class="mt-4 mb-8 opacity-10"/>
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:mt-8">
		<div>
			<h1 class="text-4xl mb-2 dekar">Get in touch!</h1>
			<p class="leading-7 barlow">
				I'm looking for web projects with a bit of interactivity, or maybe something that has basic
				ecommerce elements. If you have an idea for a project, feel free to contact me.
			</p>
		</div>
		<div class="grid md:grid-cols-4 gap-4 md:items-center">
			<Button icon="send" url="mailto:hello@splice.ie" text="Email"/>
			<Button icon="instagram" url="https://www.instagram.com/acous/" text="Instagram"/>
			<Button icon="twitter" url="https://twitter.com/cows/" text="Twitter"/>
			<Button icon="github" url="https://github.com/petercoyne/" text="GitHub"/>
		</div>
	</div>


</Container>
<Container style="!py-0">
	<Footer/>
</Container>
</Panel>

<style type="text/postcss">
	h4 {
		@apply text-white opacity-30;
	}
</style>