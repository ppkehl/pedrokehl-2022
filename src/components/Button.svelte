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
    background-color: rgba(var(--primaryColor),0.8);
    &:hover{
      background-color: rgba(var(--primaryColor),1);
    }
  }
  [data-style="Secondary"] {
    background-color: rgba(var(--secondaryColor),0.8);
    &:hover{
      background-color: rgba(var(--secondaryColor),1);
    }
  }
  [data-style="Tertiary"] {
    background-color: rgba(var(--tertiaryColor),0.8);
    &:hover{
      background-color: rgba(var(--tertiaryColor),1);
    }
  }
  [data-style="Alert"] {
    background-color: rgba(var(--alertColor),0.8);
    &:hover{
      background-color: rgba(var(--alertColor),1);
    }
  }
  [data-style="Danger"] {
    background-color: rgba(var(--dangerColor),1);
    &:hover{
      background-color: rgba(var(--dangerColor),1);
    }
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
