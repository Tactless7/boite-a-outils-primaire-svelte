<script>
  import Input from './Input.svelte';
  export let valid = false;
  export let invalid = false;
  export let mini = false;
  export let value;
</script>

<div class="result-input">
  <Input {valid} {invalid} {mini} bind:value />
</div>
