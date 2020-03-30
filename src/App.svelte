<script>
  import WorkingSpace from './pages/maths/WorkingSpace.svelte';
  // import GenerationForm from './pages/maths/GenerationForm.svelte';
</script>

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

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Générateur d'additions</h1>
  <h2>by Roxane Nicolas</h2>

  <WorkingSpace />
</main>
