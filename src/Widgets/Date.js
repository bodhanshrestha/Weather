const GetDate = () => {
  const NewDate = new Date();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const day = days[NewDate.getDay()];
  const month = months[NewDate.getMonth()];
  const date = NewDate.getDate();
  const year = NewDate.getFullYear();
  return `${day} ${date} ${month} ${year}`;
};

export { GetDate };
