<script>
  import { onMount } from 'svelte';

  let dark;
  onMount(async () => {
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      dark = true;
    } else {
      document.documentElement.classList.remove('dark')
      dark = false;
    }
	});
  
  function toggleTheme() {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        dark = true;
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        dark = false;
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        dark = false;
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        dark = true;
      }
    }
  }
</script>

<div
  class:dark={dark}
  on:click="{() => dark = !dark}"
  on:click={toggleTheme}
  id="theme-toggle"
  class="z-50 cursor-pointer relative flex items-center space-x-3 border-2 p-1 rounded-3xl border-solid border-gray-900 dark:border-white bg-gray-900 dark:bg-white"
>
  <div
    class="bg-contain bg-center bg-no-repeat w-3.5 h-3.5"
    style="background-image: url(assets/icon-sun.svg);"
  />
  <div
    class="bg-contain bg-center bg-no-repeat w-3.5 h-3.5"
    style="background-image: url(assets/icon-moon.svg);"
  />
</div>

<style lang="scss">
  #theme-toggle {
    transition: all 0.3s ease-in-out;
    > div {
      position: relative;
      z-index: 1;

      &:first-child {
        filter: invert(1);
      }

      &:last-child {
        filter: invert(0);
      }
    }

    &::before {
      content: "";
      width: 1.2rem;
      height: 1.2rem;
      display: block;
      position: absolute;
      left: 2px;
      border-radius: 50%;
      background-color: #fff;
      z-index: 0;
      transition: all 0.3s ease-in-out;
    }

    &.dark {
      > div {
        &:first-child {
          filter: invert(1);
        }
      }

      &::before {
        left: calc(100% - 1.2rem - 2px);
        background-color: rgb(17 24 39);
      }
    }
  }
</style>
