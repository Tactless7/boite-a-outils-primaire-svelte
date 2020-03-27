<script>
	import { onMount } from 'svelte';
	import Input from './components/inputs/Input.svelte';
	import Button from './components/buttons/Button.svelte';
	import InputWithLabel from './components/inputs/InputWithLabel.svelte';

	import { createListAdditions } from './lib/additions.js';

	let name;
	let opsNumber = 10;
	let operations = [];
	let disabled = false;

	// onMount(() => {
	// 	operations = createListAdditions(opsNumber);
	// })

	function generate() {
		operations = createListAdditions(opsNumber);
		disabled = true;
	}
</script>

<main>
	<h1>Générateur d'additions</h1>
	<h2>by Roxane Nicolas</h2>

	<Button tutu="Générer" on:click={generate} disabled={disabled} class="generate"/>

	{#if operations}
		<div class="exercise">
			{#each operations as operation}
				<p class="item">
					<span>{operation.n1} {operation.operand} {operation.n2} = </span>
					<Input mini/>
				</p>
			{/each}
		</div>
	{/if}

</main>

<style lang="stylus">
@import './theme.styl';
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		font-size: 3em;
	}

	.generate {
		margin: $spacingL 0;
	}

	.item {
		display: flex;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>