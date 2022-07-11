<script lang="ts">
  export let locale:string
  export let translationsURL:object
  import {locales} from '../lib/translations'
</script>

{#if Object.keys(locales).length}
  <div class="relative z-10 dark:text-white mr-4"> 
    <ul class="flex space-x-2">
      {#each Object.entries(locales[locale]) as [languageCode]}
        {#if locale != languageCode}
          <li>
            {#if translationsURL[locale].split('/').pop().includes("home")}
              <a href="/{languageCode}">{languageCode}</a>
            {:else}
            <a href="/{translationsURL[languageCode]}">{languageCode}</a>
            {/if}
          </li>
        {/if}
      {/each}
    </ul>
  </div>
{/if}