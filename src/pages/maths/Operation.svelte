<script>
  import Input from '../../components/inputs/Input.svelte';
  import ResultInput from '../../components/inputs/ResultInput.svelte';

  export let n1 = null;
  export let n2 = null;
  export let operand = null;
  export let result = null;
  export let answer = 0;
  export let correction = 0;

  function isValid(answer, result) {
    return parseInt(answer) == result;
  }
</script>

<style lang="stylus">
  @import '../../theme.styl';

  .operation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: $spacingS 0;
  }

  .fixed-part {
    margin: $spacingM;
  }
</style>

<div class="operation">
  <span class="fixed-part">{n1} {operand} {n2} =</span>
  {#if !correction}
    <Input mini bind:value={answer} />
  {:else if answer == result}
    <ResultInput mini bind:value={result} valid />
  {:else}
    <ResultInput mini bind:value={result} invalid />
  {/if}
</div>
