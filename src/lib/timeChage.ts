export const timeChange = (time: number | undefined) => {
  if (time === undefined) {
    return "";
  } else {
    let myDate = new Date(time);

    let date =
      myDate.getFullYear() +
      "-" +
      (myDate.getMonth() + 1) +
      "-" +
      myDate.getDate() +
      " " +
      myDate.getHours() +
      ":" +
      myDate.getMinutes();

    return date;
  }
};
