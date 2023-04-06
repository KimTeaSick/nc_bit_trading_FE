export function getCurrentDate(date: any) {
  let year = date.getFullYear().toString();
  let month = date.getMonth() + 1;
  month = month < 10 ? "0" + month.toString() : month.toString();
  let day = date.getDate();
  day = day < 10 ? "0" + day.toString() : day.toString();
  let hour = date.getHours();
  hour = hour < 10 ? "0" + hour.toString() : hour.toString();
  let minites = date.getMinutes();
  minites = minites < 10 ? "0" + minites.toString() : minites.toString();
  let seconds = date.getSeconds();
  seconds = seconds < 10 ? "0" + seconds.toString() : seconds.toString();
  return year + month + day + hour + minites + seconds;
}

export function timeStampToDate(timestamp: number) {
  const DATE_PARAMATER = timestamp / 1000;
  console.log(typeof DATE_PARAMATER);

  var date = new Date(DATE_PARAMATER);
  console.log(date);

  // console.log("year is " + date.getFullYear());
  return (
    date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate()
  );
}

export const YMD = (now: Date) => {
  return `${now.getFullYear()}${
    now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1
  }${now.getDate() < 10 ? "0" + now.getDate() : now.getDate()}`;
};