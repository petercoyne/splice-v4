<script>
	import '../app.css';
	import { theme } from '$lib/themes'
	import Nav from '$lib/Nav.svelte'
	import Debug from '$lib/Debug.svelte';
</script>

<Debug/>
<Nav/>
<slot />