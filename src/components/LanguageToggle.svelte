<script lang="ts">
  export let locale:string
  export let translationsURL:object
  import locales from "../../_data/settings/locales.json"
</script>


{#if Object.keys(locales).length}
  <div class="relative z-10 dark:text-white mr-4"> 
    <ul class="flex space-x-2">
      {#each Object.values(locales[locale]["locales"]) as localeGroup}
        {#if locale != localeGroup['code']}
          <li>
            
            {#if translationsURL[locale].split('/').pop().includes("home")}
              <a href="/{localeGroup['code']}">{localeGroup['code']}</a>
            {:else}
              <a href="/{translationsURL[localeGroup['code']]}">{localeGroup['locale']}</a>
            {/if}

          </li>
        {/if}
      {/each}
    </ul>
  </div>
{/if}