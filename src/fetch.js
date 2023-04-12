// Team
export const getTeams = async (id, setTeamName) => {
  id = id === 0 ? -1 : 0;
  try {
    const response = await fetch(
      `http://localhost:4000/statistics/Statistics/Statistics`
    );
    // console.log(response);
    const data = await response.json();
    // console.log(data.StatisticsModels);

    setTeamName(data.StatisticsModels);
  } catch (error) {
    console.log(error);
  }
};

// User
export const getUsers = async (id, setUserName) => {
  id = id === 0 ? -1 : 0;
  try {
    const response = await fetch(
      `http://localhost:4000/statistics/Statistics/Statistics?valueFilter=1&officeId=${id}&sortFilter=1`
    );
    // console.log(response);
    const data = await response.json();
    // console.log(data.StatisticsModels);

    setUserName(data.StatisticsModels);
  } catch (error) {
    console.log(error);
  }
};
