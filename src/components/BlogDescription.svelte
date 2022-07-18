<script>
  export let description;
</script>

{#if description}
  <p class="text-lg font-normal italic">{description}</p>
{/if}