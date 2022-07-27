<script lang="ts">
  export let type: 'submit' | 'a';
  export let style: 'Primary' | 'Secondary' | 'Tertiary' | 'Alert' | 'Danger';
  export let link: string;
</script>

{#if type === 'a'}
  <a href={link} class="block bg-opacity-70 hover:bg-opacity-90 shadow-md py-3 px-6 rounded-md font-semibold cursor-pointer transition-all duration-300 w-fit focus:outline-none focus:ring focus:ring-current" data-style={style}>
    <slot />
  </a>
{:else}
  <button type="submit" class="block bg-opacity-70 hover:bg-opacity-90 shadow-md py-3 px-6 rounded-md font-semibold cursor-pointer transition-all duration-300 w-fit focus:outline-none focus:ring focus:ring-current" data-style={style}>
    <slot />
  </button>
{/if}

<style lang="scss">
  [data-style="Primary"] {
    @apply bg-[rgba(var(--primaryColor),0.8)] hover:bg-[rgba(var(--primaryColor),1)];
  }
  [data-style="Secondary"] {
    @apply bg-[rgba(var(--secondaryColor),0.8)] hover:bg-[rgba(var(--secondaryColor),1)];
  }
  [data-style="Tertiary"] {
    @apply bg-[rgba(var(--tertiaryColor),0.8)] hover:bg-[rgba(var(--tertiaryColor),1)];
  }
  a, button {
      @apply  after:content-[''] after:w-5 after:h-5 after:inline-block after:relative after:top-1 after:bg-no-repeat after:bg-right-top after:bg-[url('../assets/icon-arrow-top.svg')];
  }
</style>
