import React from 'react'
import styles from '../styles/TeamLeader.module.css';
import {  Pie } from 'react-chartjs-2';
import { pieOptions } from '../options';


const TeamLeader = ( { filteredTeamNames, filteredTeamScore, filteredTeamColor}) => {


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


  return (
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
                <p>{Math.round(filteredTeamScore.slice(0, 1))} poäng</p>
              </div>
            </div>
   </div>
   
  )
}

export default TeamLeader