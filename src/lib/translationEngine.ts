import { turnToSlug, groupBy } from "./utils";

export function getLanguageFromURL(pathname: string) {
  const langCodeMatch = pathname.match(/\/([a-z]{2}-?[A-Z]{0,2})\//);
  return langCodeMatch ? langCodeMatch[1] : "en";
}

export interface Translation {
  posts: object | []
  structure?: "single_file" | "multiple_files" | "multiple_folders"
  returnObj?: "single_posts" | "grouped_posts"
}

export async function translationEngine(options: Translation) {
  const defaults = {
    structure: "single_file",
    returnObj: "single_posts",
  };
  const t = {
    ...defaults,
    ...options,
  };

  const metaList = [];
  const siblingTranslatedPosts = [];
  let siblingTranslatedPostsGroup = [];
  const postsList = [];
  const postsListGrouped = [];

  if(t.posts){
    if (t.structure === "multiple_folders") {

    } else if (t.structure === "multiple_files") {

      for (let key of Object.keys(t.posts)) {
        // Get post file and split it's path
        let fileParts = t.posts[key].file.split("/");
        // Get post file title and turn to slug
        let postLocalizedSlug = turnToSlug(t.posts[key].frontmatter.title);
        // Get post filename
        let file = fileParts.pop() || fileParts.pop();
        // Get file language
        let fileLocale = file.slice(-5, -3);
        // Remove locale and file extension
        let postSlug = file.slice(0, -6);
        // Create a meta list of equal slugs
        metaList.push({
          key: key,
          translationGroup: postSlug,
          slug: postLocalizedSlug,
          locale: fileLocale,
        });
      }
      // Group posts by the common slug
      const groupBySlug = groupBy(["translationGroup"]);
      const metaGrouped = groupBySlug(metaList);

      // Loop through the meta posts group
      for (let metaPostsKey of Object.keys(metaGrouped)) {
        // Loop through each post group, pushing each translation to siblingTranslatedPosts
        for (let translatedPostKey of Object.keys(metaGrouped[metaPostsKey])) {
          siblingTranslatedPosts[
            metaGrouped[metaPostsKey][translatedPostKey].locale
          ] = metaGrouped[metaPostsKey][translatedPostKey].slug;
        }

        // Loop through each post group, adding the necessary meta tags
        for (let metaPostKey of Object.keys(metaGrouped[metaPostsKey])) {
          const postKey = parseInt(metaGrouped[metaPostsKey][metaPostKey].key);
          t.posts[postKey].frontmatter.body = await t.posts[postKey].compiledContent();
          t.posts[postKey].frontmatter.slug = metaGrouped[metaPostsKey][metaPostKey].slug;
          t.posts[postKey].frontmatter.locale = metaGrouped[metaPostsKey][metaPostKey].locale;
          t.posts[postKey].frontmatter.translations = Object.assign({},siblingTranslatedPosts);
          postsList.push(t.posts[postKey].frontmatter);
          siblingTranslatedPostsGroup.push(t.posts[postKey].frontmatter);
        }

        postsListGrouped.push(siblingTranslatedPostsGroup);
        siblingTranslatedPostsGroup = [];
      }
    } else if (t.structure === "single_file") {
      for (let key of Object.keys(t.posts)) {
        // Get post file and split it's path
        let fileParts = t.posts[key].file.split("/");
        // Get post filename
        let file = fileParts.pop() || fileParts.pop();
        // Get file language
        let fileName = file.slice(0, -3);
        // Get post file title and turn to slug. If "title" not found use filename
        let postLocalizedSlug = t.posts[key].frontmatter.title? turnToSlug(t.posts[key].frontmatter.title): fileName;
        // Loop through each language object, pushing each translation to siblingTranslatedPosts
        for (let translatedPostKey of Object.keys(t.posts[key].frontmatter)) {
          siblingTranslatedPosts[translatedPostKey] = postLocalizedSlug;
        }
        // Loop through each meta post group, adding the necessary meta tags
        for (let metaPostKey of Object.keys(t.posts[key].frontmatter)) {
          t.posts[key].frontmatter[metaPostKey].slug = postLocalizedSlug;
          t.posts[key].frontmatter[metaPostKey].locale = metaPostKey;
          t.posts[key].frontmatter[metaPostKey].translations = Object.assign({},siblingTranslatedPosts);
          postsList.push(t.posts[key].frontmatter[metaPostKey]);
          siblingTranslatedPostsGroup.push(t.posts[key].frontmatter[metaPostKey]);
        }
        postsListGrouped.push(siblingTranslatedPostsGroup);
        siblingTranslatedPostsGroup = [];
      }
    }

    if (t.returnObj === "single_posts") {
      return postsList;
    } else if (t.returnObj === "grouped_posts") {
      return postsListGrouped;
    }

  }
  return [];
}
