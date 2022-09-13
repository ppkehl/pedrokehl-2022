export const turnToSlug = (text: any) => {
  return text
    .toString()
    .split(" ")
    .slice(0, 12)
    .join(" ")
    .normalize("NFKD")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};

export function generateTagData(localizedTags) {
  let tagData = [];
  Object.entries(localizedTags).map(([locale, tags]) => {
    const tagsArray = Array.from(tags)
    tagsArray.map((tag) => {
      if(!tagData.hasOwnProperty(locale)){
        tagData[locale] = new Array();
      }
      tagData[locale].push({'name':tag, 'slug': turnToSlug(tag)})
    })
  })
  return tagData
}

export const groupBy = (keys) => (array) =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = keys.map((key) => obj[key]).join("-");
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

export function formatDate(date) {
  const inputDate = new Date(date);
  const formatedDate = inputDate.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formatedDate;
}
