<script>
  import Button from '../../components/buttons/Button.svelte';

  export let disabled = false;

  function handleClick() {
    disabled = true;
  }
</script>

<Button on:click={handleClick} disabled={disabled} class="generate"> Générer </Button>

<style lang="stylus">
@import '../../theme.styl';

.generate {
  margin: $spacingL 0;
}
</style>