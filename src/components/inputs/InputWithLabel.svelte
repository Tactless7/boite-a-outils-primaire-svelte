<script>
  import Input from './Input.svelte';

  export let mini = false;
  export let valid = false;
  export let invalid = false;
  export let label = '';
</script>

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

<div class="input-with-label">
  {#if label}
    <label class="label">{label}</label>
  {/if}
  <Input class:mini />
</div>
