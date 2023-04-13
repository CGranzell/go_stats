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
import { Bar, Pie } from 'react-chartjs-2';
import HiQ from './img/HiQ_logo_white.svg';
import styles from './App.module.css';
import { getTeams, getUsers } from './fetch';
import { teamOptions, userOptions, pieOptions } from './options';

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


 

  // ------------- Pie -------
  const pieData = {
    labels: filteredTeamNames.slice(0, 1),
    datasets: [
      {
        data: filteredTeamScore.slice(0, 1),
        backgroundColor: filteredTeamColor.slice(0, 1),
        borderWidth: 0,
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
          <div className={styles.topLeftContainer}>
            <div className={styles.topTextContainer}>
              <h3>Lag i ledning</h3>
              <p>-- {filteredTeamNames.slice(0, 1)} --</p>
            </div>
            <div className={styles.topCircleContainer}>
              <div className={styles.topCircleWrapper}>
                <div className={styles.leftCircle}>
                  <Pie data={pieData} options={pieOptions} height={50} />
                </div>
              </div>
              <div className={styles.topPointContainer}>
                <p>{filteredTeamScore.slice(0, 1)} poäng</p>
              </div>
            </div>
          </div>
          {/* Höger top */}
          <div className={styles.topRightContainer}>
            <Bar
              options={teamOptions}
              data={teamData}
              width={100}
              height={100}
            />
          </div>
        </div>
        {/* Container nedre rad */}
        <div className={styles.bottomRowMainContainer}>
          {/* Vänster nedre */}
          <div className={styles.bottomLeftContainer}>
            <Bar
              options={userOptions}
              data={userData}
              width={100}
              height={100}
            />
          </div>
          {/* Höger nedre */}
          <div className={styles.bottomRightContainer}>
            <div className={styles.bottomTextContainer}>
              <p>Deltagare i ledning</p>
            </div>
            <div className={styles.bottomLeaderContainer}>
              <p> {filteredUserNames.slice(0, 1)} </p>
            </div>
            <div className={styles.bottomTeamPointContainer} >
            <p>{filteredUserScore.slice(0, 1)} poäng</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
