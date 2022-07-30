import { turnToSlug, groupBy } from "./utils";
import locales from "../../_data/settings/localesSettings.json"

export function getDefaultLocale() {
  return locales.locales[0].code
}

export function getLocaleFromURL(pathname: string) {
  const langCodeMatch = pathname.match(/\/([a-z]{2}-?[A-Z]{0,2})\//);
  return langCodeMatch ? langCodeMatch[1] : getDefaultLocale();
}

export interface Translations {
  posts: object | []
  locale?: string
  locales_except?: string
}

export async function getTranslations(options: Translations) {

  const postsList = []

  const t = {
    ...options,
  };

  // Check if "posts" exists
  if (t.posts) {

    // For each file...
    for (let key of Object.keys(t.posts)) {

      // Get file path
      const fullFilePath = t.posts[key].file
      // Split file path
      const fileParts = fullFilePath.split("/")
      // Pop last part, the filename
      const fileName = fileParts.pop() || fileParts.pop()
      // Split the filename in the dots
      const fileNameParts = fileName.split(".")
      // Pop the file format
      const fileNameFormat = fileNameParts.pop() || fileNameParts.pop()
      // Path for data
      const searchPath = "_data/content/"
      // File Path array
      const filePathArray = fullFilePath.substring(fullFilePath.indexOf(searchPath) + searchPath.length, fullFilePath.length).replace(fileName, '').split("/")
      // File path, without languages
      const filteredPath = filePathArray;
      Object.values(locales.locales).map((locale) => {
        // Remove locale items
        let localeIndex = filePathArray.indexOf(locale.code)
        if(localeIndex !== -1){
          filePathArray.splice(localeIndex,1)
        }
        // Remove empty items
        let blankIndex = filePathArray.indexOf('')
        if(blankIndex !== -1){
          filePathArray.splice(blankIndex,1)
        }
      })
      // Post type (the first item on the filePathArray)
      const postType = filePathArray[0]

      // For each locale...
      for (let localeValue of Object.values(locales.locales)) {

        let slug:string = t.posts[key].frontmatter.title ? turnToSlug(t.posts[key].frontmatter.title) : fileNameParts.join('.')
        let id:string

        // If fileParts includes a locale "key" (a multi directory localization) 
        // or
        // If fileNameParts includes a locale "key" (a multi file localization)
        if (fileParts.includes(localeValue.code) || fileNameParts.includes(localeValue.code)) {

          // Get the file name without the localeKey, to create a consistent filename to search for other translation files
          id = fileNameParts.filter(function(f: string) { return f !== localeValue.code }).join('.')

          // Get the body of the markdown file
          t.posts[key].frontmatter.body = await t.posts[key].compiledContent();

        // If the file doesn't have a localization based on path or file, it's probably a single file translation   
        } else if(t.posts[key].frontmatter.hasOwnProperty(localeValue.code)){

          // Get the file name without the localeKey, to create a consistent filename to search for other translation files
          id = slug

        }
        // Push post to postsList array
        if(id !== undefined){
          // If postType is undefined
          if(!postsList.hasOwnProperty(postType)){
            // Create postType array
            postsList[postType] = Array()
          }
          if(!postsList[postType].hasOwnProperty(id)){
            // Create post id array
            postsList[postType][id] = Array()
            // Create meta array
            const meta = Array()
            meta['fileName'] = fileName
            meta['fileNameFormat'] = fileNameFormat
            meta['postType'] = postType
            meta['path'] = filteredPath
            postsList[postType][id]['meta'] = meta
            // Create translations array
            const translations = Array()
            translations[localeValue.code] = localeValue.code + '/' + postType + '/' + slug
            postsList[postType][id]['translations'] = translations
            // Create content array
            const content = Array()
            content[localeValue.code] = t.posts[key].frontmatter
            postsList[postType][id]['content'] = content
          }else{
            // if post id exists in array, add to it
            postsList[postType][id]['translations'][localeValue.code] = localeValue.code + '/' + postType + '/' + slug
            postsList[postType][id]['content'][localeValue.code] = t.posts[key].frontmatter
          }
        }
      }
    }
  }

  return postsList
}
