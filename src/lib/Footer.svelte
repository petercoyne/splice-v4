<script>
	import Container from "./Container.svelte";
	import ButtonSmall from "./ButtonSmall.svelte";
</script>

<div class="">
	<hr class="opacity-10"/>
	<div class="flex justify-between sm:justify-end items-start mt-4 gap-4">
		<a href="mailto:hello@splice.ie" class="opacity-40 hover:opacity-100">
			<ButtonSmall>
				<img src="/send.svg" alt="email" class="p-1 sm:p-2"/>
			</ButtonSmall>
		</a>
		<a href="https://www.instagram.com/acous/" class="opacity-40 hover:opacity-100">
			<ButtonSmall>
				<img src="/instagram.svg" alt="instagram" class="p-1 sm:p-2"/>
			</ButtonSmall>
		</a>
		<a href="https://twitter.com/cows/" class="opacity-40 hover:opacity-100">
			<ButtonSmall>
				<img src="/twitter.svg" alt="email" class="p-1 sm:p-2"/>
			</ButtonSmall>
		</a>
		<a href="https://github.com/petercoyne/" class="opacity-40 hover:opacity-100">
			<ButtonSmall>
				<img src="/github.svg" alt="email" class="p-1 sm:p-2"/>
			</ButtonSmall>
		</a>
		<p class="dekar text-right whitespace-nowrap">&copy; 2022<br class="hidden sm:inline"/> <span class="colorcycle">splice</span>.ie</p>
	</div>
</div>
