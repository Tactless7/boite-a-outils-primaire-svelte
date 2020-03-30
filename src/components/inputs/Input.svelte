<script>
  export let mini = false;
  export let value = '';
  export let valid = false;
  export let invalid = false;
</script>

<style lang="stylus">
  @import '../../theme.styl';

  .input-container {
    width: 200px;
    height: 35px;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 0 $spacingM;
    border: solid 1px $grey;
    border-radius: 20px;
    color: $darkGrey;

    &:focus {
      border: solid 1px $primaryShadow;
      box-shadow: 1px 1px 5px $primaryShadow;
    }
  }

  .mini {
    width: 100px;
  }

  .valid {
    border: solid 1px $green;
    color: $green;
  }

  .invalid {
    border: solid 1px $red;
    color: $red;
  }
</style>

<div class="input-container" class:mini>
  <input type="text" class="input" bind:value class:invalid class:valid />
</div>
