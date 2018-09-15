// TODO remove me and use momemnt instead

export function dateRangeOfToday() {
  const now = new Date();
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  ).getTime();

  const endOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    23,
    59,
    59
  ).getTime();

  return {
    start: startOfToday,
    end: endOfToday
  };
}

function getMonday(fromDate) {
  fromDate = new Date(fromDate);
  const day = fromDate.getDay();
  const diff = fromDate.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  const monday = new Date(fromDate.setDate(diff));
  monday.setHours(0);
  monday.setMinutes(0);
  monday.setSeconds(0);
  return monday;
}

export function dateRangeOfWeek() {
  const now = new Date();
  const prevMonday = getMonday(now);
  return {
    start: prevMonday.getTime(),
    end: now.getTime()
  };
}

export function dateRangeOfMonth() {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth());
  return {
    start: startOfMonth.getTime(),
    end: now.getTime()
  };
}

export function dateRangeOfYear() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0);
  return {
    start: startOfYear.getTime(),
    end: now.getTime()
  };
}
