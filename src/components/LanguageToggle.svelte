<script lang="ts">
  export let locale:string
  export let translationsURL:object
  import { getDefaultLocale } from "../lib/translations"
  import locales from "../../_data/settings/localesSettings.json"
</script>

{#if Object.keys(locales.locales).length}
  <div class="relative z-10 dark:text-white mr-4"> 
    <ul class="flex space-x-2">
      {#each Object.values(locales.locales) as localeGroup}
        {#if locale != localeGroup.code}
          <li>
            {#if translationsURL[locale].split('/').pop().includes("home")}
              {#if locale !== getDefaultLocale()}
                <a href="/">{localeGroup.code}</a>
              {:else}
                <a href="/{localeGroup.code}">{localeGroup.code}</a>
              {/if}
            {:else}
              <a href="/{translationsURL[localeGroup.code]}">{localeGroup.code}</a>
            {/if}
          </li>
        {/if}
      {/each}
    </ul>
  </div>
{/if}