<script>
  export let featuredImage;
</script>

{#if featuredImage}
  <img class="" src={featuredImage} alt="Illustration">
{/if}