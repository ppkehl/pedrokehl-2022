<script>
  import { onMount } from "svelte";
  import menuItems from "../../_data/settings/menuMain.json";
  export let locale;

  onMount(async () => {
    // Add "selected" class to menu on scroll
    const sections = document.querySelectorAll("section.anchor");
    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-50% 0px -50% 0px"
    };
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        sections.forEach((el) => {
          let elSel = document.querySelector("nav a[href*='"+el.id+"']");
          if(elSel){
            elSel.classList.remove("selected");
          }
        })
        let elSel = document.querySelector("nav a[href*='" + entry.target.id + "']");
        if(elSel){
          elSel.classList.add("selected");
        }
      });
    }, options);
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Close mobile menu on click
    document.addEventListener('click', function (event) {
      var hamburguerEl = document.getElementById("menu-toggle");
      var isClickHamburguer = hamburguerEl.contains(event.target);
      if (!isClickHamburguer) {
          hamburguerEl.checked = false;
      }
    });

  });
</script>

<input
  class="cursor-pointer lg:hidden z-50 h-6 w-6 block absolute rounded opacity-0 right-6"
  title="Toggle Menu"
  id="menu-toggle"
  type="checkbox"
/>
<label
  class="cursor-pointer lg:hidden z-10 h-6 w-6 block absolute rounded opacity-100 right-6"
  for="menu-toggle"
  aria-label="Menu"
>
  <span
    class="bg-gray-900 dark:bg-white block absolute h-[3px] w-full rounded opacity-100 left-0 rotate-0 transition-all top-0"
  />
  <span
    class="bg-gray-900 dark:bg-white block absolute h-[3px] w-full rounded opacity-100 left-0 rotate-0 transition-all top-1/2 -translate-y-1/2"
  />
  <span
    class="bg-gray-900 dark:bg-white block absolute h-[3px] w-full rounded opacity-100 left-0 rotate-0 transition-all top-1/2 -translate-y-1/2"
  />
  <span
    class="bg-gray-900 dark:bg-white block absolute h-[3px] w-full rounded opacity-100 left-0 rotate-0 transition-all bottom-0"
  />
</label>

{#if menuItems[locale].mainMenu.length}
  <nav
    class="fixed lg:relative top-16 lg:top-0 w-full lg:w-auto left-full lg:left-0 h-screen lg:h-auto transition-all duration-200 bg-gray-200 dark:bg-gray-900 lg:dark:bg-transparent lg:bg-transparent bg-opacity-50 dark:bg-opacity-50 lg:bg-opacity-100 backdrop-blur-xl lg:backdrop-blur-none"
  >
    <ul
      class="relative top-16 lg:top-0 container m-auto px-6 pt-20 lg:pt-0 space-y-4 lg:space-y-0 lg:space-x-6 flex flex-col lg:flex-row dark:text-white border-gray-900 dark:border-white"
    >
      {#each Object.keys(menuItems[locale].mainMenu) as [key]}
        <li class="relative block">
          <a
            class="before:content-[''] before:opacity-0 before:w-0 before:h-[2px] before:-left-3 lg:before:left-0 before:pl-3 lg:before:pl-0 lg:before:-top-2 before:absolute before:border-l-4 lg:before:border-t-2 lg:before:border-l-0 before:border-black lg:before:border-black before:dark:border-white before:bg-opacity-100 before:transition-all"
            href={"/" + menuItems[locale].mainMenu[key].url}
          >
            <div class="relative z-10">
              <div class="text-base relative font-semibold pr-6 after:content-[''] after:w-5 after:h-5 after:bg-[url(/assets/icon-arrow-top.svg)] after:bg-no-repeat after:bg-right-top after:right-0 after:top-0 after:absolute after:dark:invert">
                {menuItems[locale].mainMenu[key].title}
              </div>
              <div class="font text-sm">
                {menuItems[locale].mainMenu[key].description}
              </div>
            </div>
          </a>
        </li>
      {/each}
    </ul>
  </nav>
{/if}

<style lang="scss" global>
  nav {
    a.selected, a:hover{
      @apply before:z-0 before:w-full before:h-full before:opacity-100;
    }
  }
  #menu-toggle {
    &:checked ~ label {
      span {
        &:nth-child(1) {
          @apply top-1/2 -translate-y-1/2 opacity-0;
        }
        &:nth-child(2) {
          @apply rotate-45;
        }
        &:nth-child(3) {
          @apply -rotate-45;
        }
        &:nth-child(4) {
          @apply top-1/2 -translate-y-1/2 opacity-0;
        }
      }
    }
    &:checked {
      ~ nav {
        @apply left-0;
      }
    }
  }
</style>
