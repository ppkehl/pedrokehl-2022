<script>
  export let project;
  console.log(project.frontmatter);


</script>

<div class="w-full lg:w-4/12 mb-8 dark:text-white">

  <a href="" class="block space-y-5">
    <div class="w-full aspect-video bg-slate-300">
      <img class="object-cover w-full h-full" src="{project.frontmatter.featuredImage}" alt="">
    </div>
    <h4 class="text-2xl font-semibold">
      {project.frontmatter.title}
    </h4>
    <div class="text-xl">
      {project.frontmatter.description}
    </div>
  </a>

</div>