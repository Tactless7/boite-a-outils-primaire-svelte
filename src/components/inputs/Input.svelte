<script>
  export let mini = false;
</script>

<div class="input-container" class:mini>
  <input type="text" class="input">
</div>

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
  }

  .mini {
    width: 100px;
  }

</style>