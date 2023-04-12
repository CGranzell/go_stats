export const teamOptions = {
  layout: {},
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },

  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Visar genomsnittlig poäng per lag',
    },
  },
};


export const userOptions = {
  layout: {},
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },

  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Visar totala poäng per deltagare ( TOP 10 )',
    },
  },
};
