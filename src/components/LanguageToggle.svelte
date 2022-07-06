<script>
  export let path;
  export let postType;
  export let locale;
  export let translations;
  const translationBasePath = postType ? path + postType + "/" : path
</script>

{#if translations}
  <div class="relative z-10 dark:text-white mr-4"> 
    <ul class="flex space-x-2">
      {#each Object.entries(translations) as [language, path]}
        {#if language!=locale}
          <li>
            <a href="{translationBasePath  + language + "/" + path}">{language}</a>
          </li>
        {/if}
      {/each}
    </ul>
  </div>
{/if}
