const months = [
  '01', '02', '03', '04', '05', '06',
  '07', '08', '09', '10', '11', '12',
];

const days = [
  '01', '02', '03', '04', '05', '06',
  '07', '08', '09', '10', '11', '12',
  '13', '14', '15', '16', '17', '18',
  '19', '20', '21', '22', '23', '24',
  '25', '26', '27', '28', '29', '30',
  '31'
];

const randomDateMaker = () => {
  const randomYear = Math.floor(Math.random() * (2021-2012) + 2012);
  const randomMonth = Math.floor(Math.random() * 12);
  const randomDay = Math.floor(Math.random() * 32);

  const randomDate = new Date(randomYear, randomMonth, randomDay);

  const formattedDay = days[randomDate.getDate() - 1];
  console.log(randomDate.getDate());
  const formattedYear = randomDate.getYear() + 1900;
  const formattedMonth = months[randomDate.getMonth()];
  return `${formattedYear}-${formattedMonth}-${formattedDay}`;
};

console.log(randomDateMaker());