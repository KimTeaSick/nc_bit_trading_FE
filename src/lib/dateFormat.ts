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

export const conditionFormat = (group: any, condition: any[]) => {
  // 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
  const groupValues = condition.reduce((acc: any, current) => {
    acc[current.group_idx] = acc[current.group_idx] || [];
    acc[current.group_idx].push(current.condition);
    return acc;
  }, {});

  const groups = Object.keys(groupValues).map((key) => {
    return {
      group: group[Number(key) - 1]?.group_name,
      condition: groupValues[key],
    };
  });
  return groups;
};

export function SUB_DATE(date: string) {
  if (typeof date !== "string") return;
  return date.substring(0, 19);
}
