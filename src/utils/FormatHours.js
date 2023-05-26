function formatHours(dateString) {
  const date = new Date(dateString);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const formatedHours = `${hours}:${minutes}`;

  return formatedHours;
}

export default formatHours;
