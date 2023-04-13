// -------- Lag options -----------
export const teamOptions = {
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: 'white',
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        color: 'white',
      },
    },
  },

  maintainAspectRatio: false,
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
      color: 'white',
    },
  },
};


// -------- Deltagare options -----------
export const userOptions = {
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: 'white',
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        color: 'white',
      },
    },
  },

  maintainAspectRatio: false,
  layout: {},
  // indexAxis: 'y',
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
      color: 'white',
    },
  },
};


// -------- Pie options -----------
export const pieOptions = {
  
  
  maintainAspectRatio: false,
  // layout: {},
  // indexAxis: 'y',
  // elements: {
  //   bar: {
  //     borderWidth: 2,
  //   },
  // },

  // responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: '',
      color: 'white',
    },
  },
};
