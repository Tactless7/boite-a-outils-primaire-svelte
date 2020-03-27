<script>
  import Input from './Input.svelte'

  export let mini = false;
  export let label = '';
</script>

<div class="input-with-label">
  {#if label}
  <label class="label">{ label }</label>
  {/if}
  <Input mini={mini} />
</div>

<style lang="stylus">
@import '../../theme.styl';

  .input-with-label {
    width: 200px;
  }

  .label {
    padding-left: $spacingS;
    text-align: left;
    color: $darkGrey;
  }

</style>