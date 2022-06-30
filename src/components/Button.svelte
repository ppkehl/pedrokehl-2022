<script>
  export let classes;
</script>

<div
  class="{classes} bg-opacity-70 hover:bg-opacity-90 shadow-md py-3 px-6 rounded-md font-semibold cursor-pointer transition-all duration-300 w-fit"
>
  <slot />
</div>

<style lang="scss">
  div {
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
