<script>
  export let featuredImage;
</script>

{#if featuredImage}
  <img class="rounded overflow-hidden" src={featuredImage} alt="Illustration">
{/if}