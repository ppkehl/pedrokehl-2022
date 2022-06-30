<script>
  export let project;
  // console.log(project);

  const img = project.attributes.Cover.data.attributes.formats.hasOwnProperty('medium') ? project.attributes.Cover.data.attributes.formats.medium.url : project.attributes.Cover.data.attributes.url;
  const alt = project.attributes.Cover.data.attributes.alternativeText;
  const url = 'projects/' + project.attributes.slug;
</script>

<div class="w-full lg:w-4/12 mb-8 dark:text-white">

  <a href="{url}" class="block space-y-5">
    <div class="w-full aspect-video bg-slate-300">
      <img class="object-cover w-full h-full" src="{img}" alt="{alt}">
    </div>
    <h4 class="text-2xl font-semibold">
      {project.attributes.Name}
    </h4>
    <div class="text-xl">
      {project.attributes.Description}
    </div>
  </a>

</div>