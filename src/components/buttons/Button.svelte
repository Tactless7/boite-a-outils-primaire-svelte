<script>
  export let tutu = '';
  export let disabled = false;
</script>

<div class="button" on:click>
  <button {disabled}>{ tutu }</button>
</div>

<style lang="stylus">
@import '../../theme.styl';

  .button {
    width: 200px;
    height: 35px;
  }

  button {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: solid 1px $primaryShadow;
    background-color: $primary;
    box-shadow: 5px 5px 25px $primaryShadow
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: $primaryShadow;
    }
  }
</style>