import React, { useEffect, useState } from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styles from './App.module.css';
import { getTeams, getUsers } from './fetch';
import { teamOptions, userOptions } from './options';

// team
let teamLabels = [];
let teamScores = [];
let teamColors = [];
// user
let userLabels = [];
let userScores = [];
let userColors = [];

let id = 0;

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function App() {
  const [teamName, setTeamName] = useState([]);
  const [userName, setUserName] = useState([]);

  //  Filtrerar team namn
  const filteredTeamNames = teamName.map((team) => {
    return team.UnitName;
  });
  //  Filtrerar team poäng
  const filteredTeamScore = teamName.map((team) => {
    return team.UnitScore;
  });
  //  Filtrerar team färg
  const filteredTeamColor = teamName.map((team) => {
    return team.TeamColor;
  });

  teamLabels = filteredTeamNames;
  teamScores = filteredTeamScore;
  teamColors = filteredTeamColor;
  // team data
  const teamData = {
    labels: teamLabels,
    datasets: [
      {
        data: teamScores,
        backgroundColor: teamColors,
        borderColor: 'none',
      },
    ],
  };

  //---------------- user data ---------------
  //  Filtrerar user namn
  const filteredUserNames = userName.map((user) => {
    return user.UnitName;
  });
  //  Filtrerar user poäng
  const filteredUserScore = userName.map((user) => {
    return user.UnitScore;
  });
  //  Filtrerar user färg
  const filteredUserColor = userName.map((user) => {
    return user.TeamColor;
  });

  userLabels = filteredUserNames.slice(0, 10);
  userScores = filteredUserScore.slice(0, 10);
  userColors = filteredUserColor.slice(0, 10);
  const userData = {
    labels: userLabels,
    datasets: [
      {
        data: userScores,
        backgroundColor: userColors,
        borderColor: 'none',
      },
    ],
  };

  useEffect(() => {
    getTeams(id, setTeamName);
    getUsers(id, setUserName);

    const updateTeams = setInterval(() => {
      getTeams(id, setTeamName); // <-- (3) invoke in interval callback
    }, 7000);
    const updateUsers = setInterval(() => {
      getUsers(id, setUserName); // <-- (3) invoke in interval callback
    }, 7000);

    getTeams(id, setTeamName); // <-- (2) invoke on mount
    getUsers(id, setUserName);

    return () => clearInterval(updateTeams, updateUsers);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.topRowContainer}>
        {/* Poängtoppen */}
        <div className={styles.topPointsContainer}>
          <div className={styles.topImgContainer}>
            <Bar options={teamOptions} data={teamData} height={100} />
          </div>
        </div>
        {/* Prestationstoppen */}
        <div className={styles.topAchievementContainer}></div>
      </div>
      <div className={styles.bottomRowContainer}>
        {/* tot poäng deltagare*/}
        <div className={styles.totPointIndividualContainer}>
          <Bar options={userOptions} data={userData} height={100} />
        </div>
        {/* Senaste händelser */}
        <div className={styles.latestEventContainer}>
          {/* <ul>
            {teamName.map((team) => (
              <li>{team.UnitName}</li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default App;
