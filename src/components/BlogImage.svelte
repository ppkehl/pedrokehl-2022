<script>
  export let featuredImage;
</script>

{#if featuredImage}
  <img loading="lazy" class="rounded overflow-hidden" src={featuredImage} alt="Illustration">
{/if}