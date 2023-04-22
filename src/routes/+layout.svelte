<script>
  import "../styles/app.css"
</script>

<slot />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.300);
  }
  @media (prefers-color-scheme: dark) {
    :global(html) {
      background-color: theme(colors.gray.800);
    }
  }
</style>
