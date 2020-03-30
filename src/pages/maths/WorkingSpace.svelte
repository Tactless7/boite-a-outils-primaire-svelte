<script>
  import { onMount } from 'svelte';
  import Input from '../../components/inputs/Input.svelte';
  import Button from '../../components/buttons/Button.svelte';
  import Operation from './Operation.svelte';

  import { createListAdditions } from '../../lib/additions.js';

  let operations = [];
  let opsNumber = 5;
  let disabled = false;
  let correction = false;

  function generate() {
    operations = createListAdditions(opsNumber);
    correction = false;
  }

  function correctExercise() {
    correction = true;
  }
</script>

<style lang="stylus">
  @import '../../theme.styl';

  .working-space {
    margin: $spacingL;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .exercise {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      width: 1000px;
      max-width: 90vw;

      .operation-container {
        width: 30%;

        @media (max-width: 1000px) {
          width: 50%;
        }

        @media (max-width: 600px) {
          width: 100%;
        }
      }
    }

    .exercise,
    .submit {
      padding: $spacingM;
    }
  }
</style>

<div class="working-space">
  <Button on:click={generate} {disabled}>Générer</Button>

  {#if operations.length > 0}
    <div class="exercise">
      {#each operations as operation}
        <div class="operation-container">
          <Operation {...operation} {correction} />
        </div>
      {/each}
    </div>
    <div class="submit">
      <Button on:click={correctExercise}>Valider</Button>
    </div>
  {/if}
</div>
