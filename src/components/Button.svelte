<script lang="ts">
  export let type: 'submit' | 'a';
  export let style: 'Primary' | 'Secondary' | 'Tertiary' | 'Alert' | 'Danger';
  export let link: string;
</script>

{#if type === 'a'}
  <a href={link} class="block bg-opacity-70 hover:bg-opacity-90 shadow-md py-3 px-6 rounded-md font-semibold cursor-pointer transition-all duration-300 w-fit" data-style={style}>
    <slot />
  </a>
{:else}
  <button type="submit" class="block bg-opacity-70 hover:bg-opacity-90 shadow-md py-3 px-6 rounded-md font-semibold cursor-pointer transition-all duration-300 w-fit" data-style={style}>
    <slot />
  </button>
{/if}

<style lang="scss">
  [data-style="Primary"] {
    background-color: rgb(var(--primaryColor));
  }
  [data-style="Secondary"] {
    background-color: rgb(var(--secondaryColor));
  }
  [data-style="Tertiary"] {
    background-color: rgb(var(--tertiaryColor));
  }
  [data-style="Alert"] {
    background-color: rgb(var(--alertColor));
  }
  [data-style="Danger"] {
    background-color: rgb(var(--dangerColor));
  }
  a, button {
    &:after {
      content: "";
      width: 20px;
      height: 20px;
      display: inline-block;
      position: relative;
      top: 4px;
      background-image: url(../assets/arrow-top.svg);
      background-repeat: no-repeat;
      background-position: right top;
    }
  }
</style>
