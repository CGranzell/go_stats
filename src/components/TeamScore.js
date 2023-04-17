import React from 'react';
import { teamOptions } from '../options';
import { Bar } from 'react-chartjs-2';
import styles from '../styles/TeamScore.module.css';

const TeamScore = ({ teamLabels, teamScores, teamColors}) => {

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

  return (
   
      <div className={styles.topRightContainer}>

      <Bar options={teamOptions} data={teamData} width={100} height={100} />
          </div>
    
  );
};

export default TeamScore;
