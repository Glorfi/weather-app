function getDayOrNightString(num) {
  let string;
  if (num === 1) {
    string = "day";
    return string;
  } else if (num === 0) {
    string = "night";
    return string;
  }
}

export default getDayOrNightString;
