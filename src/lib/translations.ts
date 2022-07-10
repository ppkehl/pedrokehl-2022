export const turnToSlug = (text:any) => {
  return text
    .toString()
    .split(' ')
    .slice(0, 12)
    .join(' ')
    .normalize('NFKD')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

export const groupBy = keys => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = keys.map(key => obj[key]).join('-');
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

export interface Translations {
  posts: object | []
  structure?: "single_file" | "multiple_files" | "multiple_folders"
  returnObj?: "single_posts" | "grouped_posts"
  returnObjType?: "rendered_obj" | "astro_obj"
}

export async function getTranslations(options: Translations) {

  const postsList = [];

  const defaults = {
    structure: "single_file",
    returnObj: "single_posts",
    returnObjType: "rendered_obj"
  };
  const t = {
    ...defaults,
    ...options,
  };



  if(t.posts){
    for (let key of Object.keys(t.posts)) {
      


      //
      let localizedSlug = t.posts[key].frontmatter //turnToSlug(t.posts[key].frontmatter.title)
      

      console.log(localizedSlug)
    }


  }

  return postsList

}