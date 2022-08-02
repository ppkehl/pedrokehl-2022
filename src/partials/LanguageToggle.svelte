<script lang="ts">
  export let translationsURL:object
</script>

{#if Object.keys(translationsURL).length}
  <div class="relative z-10 dark:text-white mr-4 flex"> 
    <ul class="flex space-x-2 list-none">
      {#each Object.keys(translationsURL) as key}
        <li class="uppercase font-semibold text-sm flex items-center">
          <a href={translationsURL[key]}>{key}</a>
        </li>
      {/each}
    </ul>
  </div>
{/if}