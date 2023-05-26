function extractNumberFromURL(url) {
  const regex = /(\d+)\.png$/;
  const matches = url.match(regex);
  if (matches && matches.length > 1) {
    const iconNumber = parseInt(matches[1]);
    let iconName;
    if (
      iconNumber === 176 ||
      iconNumber === 179 ||
      iconNumber === 293 ||
      iconNumber === 299 ||
      iconNumber === 353
    ) {
      iconName = `176 179 293 299 353`;
      return iconName;
    } else if (iconNumber === 119 || iconNumber === 122) {
      iconName = `119 122`;
      return iconName;
    } else if (iconNumber === 182 || iconNumber === 362) {
      iconName = `182 362`;
      return iconName;
    } else if (iconNumber === 200 || iconNumber === 386) {
      iconName = `200 386`;
      return iconName;
    } else if (iconNumber === 182 || iconNumber === 362) {
      iconName = `182 362`;
      return iconName;
    } else if (iconNumber === 263 || iconNumber === 266) {
      iconName = `263 266`;
      return iconName;
    } else if (iconNumber === 296 || iconNumber === 302) {
      iconName = `296 302`;
      return iconName;
    } else if (iconNumber === 305 || iconNumber === 356) {
      iconName = `305 356`;
      return iconName;
    } else if (iconNumber === 311 || iconNumber === 314) {
      iconName = `311 314`;
      return iconName;
    } else if (iconNumber === 317 || iconNumber === 320) {
      iconName = `317 320`;
      return iconName;
    } else if (iconNumber === 323 || iconNumber === 329 || iconNumber === 368) {
      iconName = `323 329 368`;
      return iconName;
    } else if (iconNumber === 326 || iconNumber === 332) {
      iconName = `326 332`;
      return iconName;
    } else if (iconNumber === 335 || iconNumber === 371) {
      iconName = `335 371`;
      return iconName;
    } else {
      return iconNumber;
    }
  }
  return null;
}
export default extractNumberFromURL;

// function extractNumberFromURL(url) {
//   const regex = /(\d+)\.png$/;
//   const matches = url.match(regex);
//   if (matches && matches.length > 1) {
//     const iconNumber = parseInt(matches[1]);
//     const iconNumbers = [176, 179, 293, 299, 353];
//     if (iconNumbers.includes(iconNumber)) {
//       const iconNames = iconNumbers.join(' ');
//       return iconNames;
//     } else {
//       return iconNumber;
//     }
//   }
//   return null;
// }

// export default extractNumberFromURL;
