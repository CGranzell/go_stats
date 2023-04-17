import React, { useEffect, useState } from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import HiQ from './img/HiQ_logo_white.svg';
import styles from './App.module.css';
import { getTeams, getUsers } from './fetch';

import TeamLeader from './components/TeamLeader';
import TeamScore from './components/TeamScore';
import UsersScore from './components/UsersScore';
import UserLeader from './components/UserLeader';

// team
let teamLabels = [];
let teamScores = [];
let teamColors = [];
// user
let userLabels = [];
let userScores = [];
let userColors = [];

let id = 0;

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

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
      <div className={styles.mainWrapper}>
        {/* container logga */}
        <div className={styles.logoContainer}>
          <div className={styles.logoWrapper}>
            <img src={HiQ} alt="" className={styles.logo} />
          </div>
        </div>
        {/* Container övre rad */}
        <div className={styles.topRowMainContainer}>
          {/* Vänster top */}

          <TeamLeader
            filteredTeamNames={filteredTeamNames}
            filteredTeamScore={filteredTeamScore}
            filteredTeamColor={filteredTeamColor}
          />
          {/* Höger top */}
          <TeamScore
            teamLabels={teamLabels}
            teamScores={teamScores}
            teamColors={teamColors}
          />
        </div>
        {/* Container nedre rad */}
        <div className={styles.bottomRowMainContainer}>
          {/* Vänster nedre */}
          <UsersScore
            userLabels={userLabels}
            userScores={userScores}
            userColors={userColors}
          />
          {/* Höger nedre */}
          <UserLeader
            filteredUserNames={filteredUserNames}
            filteredUserScore={filteredUserScore}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
