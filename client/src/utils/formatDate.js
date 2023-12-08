export function formatDate(dateToFormat) {
  if (dateToFormat) {
    const date = new Date(dateToFormat);
    const formatDate = Intl.DateTimeFormat("en-us", {
      dateStyle: "short",
    });
    const formatedCreatedOnDate = formatDate.format(date);
    return formatedCreatedOnDate;
  }
}
