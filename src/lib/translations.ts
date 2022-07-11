import { turnToSlug, groupBy } from "./utils";

export const locales = {
  en: {
    en: "English",
    pt: "Portuguese"
  },
  pt: {
    en: "Inglês",
    pt: "Português"
  },
};

export function getLanguageFromURL(pathname: string) {
  const langCodeMatch = pathname.match(/\/([a-z]{2}-?[A-Z]{0,2})\//);
  return langCodeMatch ? langCodeMatch[1] : "en";
}

export interface Translations {
  posts: object | []
  locale?: string
}

export async function getTranslations(options: Translations) {

  const postsList = []
  let groupedPosts = []
  let returnPosts = []

  const t = {
    ...options,
  };

  // Check if "posts" exists
  if (t.posts) {

    // For each file...
    for (let key of Object.keys(t.posts)) {
      // Get file path
      const file = t.posts[key].file;
      // Split file path
      const fileParts = file.split("/");
      // Pop last part, the filename
      const fileName = fileParts.pop() || fileParts.pop();
      // Split the filename in the dots
      const fileNameParts = fileName.split(".");
      // Pop the file format
      const fileNameFormat = fileNameParts.pop() || fileNameParts.pop();

      // For each locale...
      for (let [localeKey, value] of Object.entries(locales)) {

        // If fileParts includes a locale "key" (a multi directory localization) 
        // | or | 
        // If fileNameParts includes a locale "key" (a multi file localization)
        if (fileParts.includes(localeKey) || fileNameParts.includes(localeKey)) {
          // Get the file name without the localeKey, to create a consistent filename to search
          // for other translation files
          let filteredFileName = fileNameParts.filter(function(f) { return f !== localeKey }).join('.')
          // Get the body of the markdown file
          t.posts[key].frontmatter.body = await t.posts[key].compiledContent();
          // Set the "group slug" to filter items later
          t.posts[key].frontmatter.groupSlug = filteredFileName
          // Set the individual translated slug based on the title field
          t.posts[key].frontmatter.slug = turnToSlug(t.posts[key].frontmatter.title)
          // Set the locale
          t.posts[key].frontmatter.locale = localeKey
          // Push post to postsList array
          postsList.push(t.posts[key].frontmatter)

        // If the file doesn't have a localization based on path or file, it's
        // probably a single file translation   
        } else if(t.posts[key].frontmatter.hasOwnProperty(localeKey)){
          // Set the "group slug" to filter items later
          t.posts[key].frontmatter[localeKey].groupSlug = fileNameParts.join('.')
          // Set the individual translated slug based on the filename
          t.posts[key].frontmatter[localeKey].slug = t.posts[key].frontmatter.title ? turnToSlug(t.posts[key].frontmatter.title) : fileNameParts.join('.')
          // Set the locale
          t.posts[key].frontmatter[localeKey].locale = localeKey
          // Push post to postsList array
          postsList.push(t.posts[key].frontmatter[localeKey]);
        }

      }
    }

    // Group posts by common slug
    let groupBySlug = groupBy(["groupSlug"]);
    groupedPosts = groupBySlug(postsList);

    // Loop grouped posts
    for (let [groupedPostKey, groupedPost] of Object.entries(groupedPosts)) {
      // Loop posts group
      for (let [postsKey, posts] of Object.entries(groupedPost)) {
        let translationGroups = []
        for (let [localeKey, value] of Object.entries(locales)) {
          var post = groupedPost.filter(obj => {
            return obj.locale === localeKey
          })
          translationGroups.push({[localeKey]: post[0]['slug']})
        }
        posts['translations'] = translationGroups
      }
      if(t.locale){
        returnPosts.push({"content": groupedPost.filter(obj => {return obj.locale === t.locale})})
      }else{
        returnPosts.push({"content": groupedPost})
      }
    }
  }

  return returnPosts
}
