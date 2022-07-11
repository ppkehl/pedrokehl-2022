<script lang="ts">
  export let locale:string
  export let translationsURL:object
  export let path:string
  export let siteHome:URL

  import {locales} from '../lib/translations'

  // Filter URL removing common url between path (current url: http://localhost:3000/test/en/article-name/) 
  // and siteHome (home url: http://localhost:3000/). Result (test/en/article-name/)
  let filteredPath = path.toString().replace(siteHome.toString(), '')
  // Filter URL removing translation path. Result (test/en/)
  let filteredTranslation = filteredPath.replace(translationsURL[locale] + '/', '')
  // Filter URL removing url locale. Result (test/)
  let filteredLocale = filteredTranslation.replace(locale + '/', '')
  // Return absPath to post http://localhost:3000/test/
  let absPath = '/' + filteredLocale

  // console.log("filteredPath:", filteredPath)
  // console.log("filteredTranslation:", filteredTranslation)
  // console.log("filteredLocale:", filteredLocale)
  // console.log("absPath:", absPath)
</script>

{#if Object.keys(locales).length}
  <div class="relative z-10 dark:text-white mr-4"> 
    <ul class="flex space-x-2">
      {#each Object.entries(locales[locale]) as [languageCode]}
        {#if locale != languageCode}
          <li>
            {#if filteredPath == '' || filteredLocale == ''}
              <a href="{absPath + languageCode}">{languageCode}</a>
            {:else}
              <a href="{absPath + languageCode + '/' + translationsURL[languageCode]}">{languageCode}</a>
            {/if}
          </li>
        {/if}
      {/each}
    </ul>
  </div>
{/if}
