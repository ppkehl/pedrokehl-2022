<script>
  export let coverImg;
</script>

<div class="w-full lg:w-4/12 space-y-5 mb-8 dark:text-white">

  <div class="w-full aspect-video bg-slate-300">
    <img class="object-cover w-full h-full" src="{coverImg}" alt="Project cover">
  </div>
  <h4 class="text-2xl font-semibold">
    <slot name="title"></slot>
  </h4>
  <div class="text-xl">
    <slot name="description"></slot>
  </div>

</div>