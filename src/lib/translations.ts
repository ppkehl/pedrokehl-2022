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

  // Create postsList array
  const postsList = Array()
  // Create translations array
  const translationsArray = Array()
  // Get site locales
  const siteLocales = locales.locales

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
      for (let localeValue of Object.values(siteLocales)) {

        let slug:string = t.posts[key].frontmatter.title ? turnToSlug(t.posts[key].frontmatter.title) : fileNameParts.join('.')
        let id:string
        let mdContent:string

        // If fileParts includes a locale "key" (a multi directory localization) 
        // or
        // If fileNameParts includes a locale "key" (a multi file localization)
        if (fileParts.includes(localeValue.code) || fileNameParts.includes(localeValue.code)) {

          // Get the file name without the localeKey, to create a consistent filename to search for other translation files
          id = fileNameParts.filter(function(f: string) { return f !== localeValue.code }).join('.')

          // Set the body of the markdown file
          t.posts[key].frontmatter.body = await t.posts[key].compiledContent()

          // Set the locale of the markdown file
          t.posts[key].frontmatter.locale = localeValue.code

          // Set the content of the file (everything is on the frontmatter now)
          mdContent = t.posts[key].frontmatter

        // If the file doesn't have a localization based on path or file, it's probably a single file translation   
        } else if(t.posts[key].frontmatter.hasOwnProperty(localeValue.code)){

          // Get the file name without the localeKey, to create a consistent filename to search for other translation files
          id = slug

          // Set the locale of the markdown file
          t.posts[key].frontmatter[localeValue.code].locale = localeValue.code

          // Set the content of the file (everything is on the frontmatter now)
          mdContent = t.posts[key].frontmatter[localeValue.code]

        }
        
        // Push post to postsList array
        if(id !== undefined){

          // Create meta array
          const meta = Array()
          meta['fileName'] = fileName
          meta['fileNameFormat'] = fileNameFormat
          meta['postType'] = postType
          meta['path'] = filteredPath

          // If postType is undefined
          if(!postsList.hasOwnProperty(postType)){
            // Create postType array
            postsList[postType] = Array()
          }
          if(!postsList[postType].hasOwnProperty(id)){
            // Create post id array
            postsList[postType][id] = Array()
            // Add locale content
            postsList[postType][id][localeValue.code] = mdContent
            // Add meta content
            postsList[postType][id][localeValue.code]['meta'] = meta
            // Add to translations array
            translationsArray[localeValue.code] = localeValue.code + '/' + postType + '/' + slug
          }else{
            // if post id exists in array, add to it
            postsList[postType][id][localeValue.code] = mdContent
            // Add to translations array
            translationsArray[localeValue.code] = localeValue.code + '/' + postType + '/' + slug
            // Add meta content
            postsList[postType][id][localeValue.code]['meta'] = meta
          }

          Object.values(postsList[postType][id]).map((post)=> {
            post['translations'] = Array()
            post['translations'] = translationsArray
          })

          
        }
      }
    }
  }

  
  return postsList
}
