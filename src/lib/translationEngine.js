const turnToSlug = (text) => {
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

const groupBy = keys => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = keys.map(key => obj[key]).join('-');
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});


export async function translationEngine(posts, structure = "single_file") {

  const metaList = [];
  const siblingTranslatedPosts = [];
  const postList = []

  if (structure === "multiple_folders") {

  } else if (structure === "multiple_files") {

    for (let key of Object.keys(posts)) {
      // Get post file and split it's path
      let fileParts = posts[key].file.split('/');
      // Get post file title and turn to slug
      let postLocalizedSlug = turnToSlug(posts[key].frontmatter.title);
      // Get post filename
      let file = fileParts.pop() || fileParts.pop();
      // Get file language
      let fileLocale = file.slice(-5, -3);
      // Remove locale and file extension
      let postSlug = file.slice(0, -6);
      // Create a meta list of equal slugs
      metaList.push({ 'key': key, 'slug': postSlug, "localizedSlug": postLocalizedSlug, 'locale': fileLocale })
    }
    // Group posts by the common slug
    const groupBySlug = groupBy(['slug']);
    const metaGrouped = groupBySlug(metaList)

    // Loop through the meta posts group
    for (let metaPostsKey of Object.keys(metaGrouped)) {

      // Loop through each post group, pushing each translation to siblingTranslatedPosts  
      for (let translatedPostKey of Object.keys(metaGrouped[metaPostsKey])) {
        siblingTranslatedPosts[metaGrouped[metaPostsKey][translatedPostKey].locale] = metaGrouped[metaPostsKey][translatedPostKey].localizedSlug
      }

      // Loop through each post group, adding the necessary meta tags  
      for (let metaPostKey of Object.keys(metaGrouped[metaPostsKey])) {
        const postKey = parseInt(metaGrouped[metaPostsKey][metaPostKey].key);
        posts[postKey].frontmatter.body = await posts[postKey].compiledContent()
        posts[postKey].frontmatter.slug = metaGrouped[metaPostsKey][metaPostKey].localizedSlug
        posts[postKey].frontmatter.locale = metaGrouped[metaPostsKey][metaPostKey].locale
        posts[postKey].frontmatter.translations = Object.assign({}, siblingTranslatedPosts);
        postList.push(posts[postKey].frontmatter)

        console.log(posts[postKey].frontmatter)
      }
    }

    

  } else if (structure === "single_file") {

    for (let key of Object.keys(posts)) {

      // Get post file and split it's path
      let fileParts = posts[key].file.split('/');
      // Get post filename
      let file = fileParts.pop() || fileParts.pop();
      // Get file language
      let fileName = file.slice(0, -3);
      // Get post file title and turn to slug. If "title" not found use filename 
      let postLocalizedSlug = posts[key].frontmatter.title ? turnToSlug(posts[key].frontmatter.title) : fileName;

      // Loop through each language object, pushing each translation to siblingTranslatedPosts
      for (let translatedPostKey of Object.keys(posts[key].frontmatter)) {
        siblingTranslatedPosts[translatedPostKey] = postLocalizedSlug;
      }

      // Loop through each meta post group, adding the necessary meta tags  
      for (let metaPostKey of Object.keys(posts[key].frontmatter)) {
        posts[key].frontmatter[metaPostKey].slug = postLocalizedSlug
        posts[key].frontmatter[metaPostKey].locale = metaPostKey
        posts[key].frontmatter[metaPostKey].translations = Object.assign({}, siblingTranslatedPosts);
        postList.push(posts[key].frontmatter[metaPostKey])
      }

    }

  }

  return postList;
}