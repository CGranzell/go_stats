import React from 'react'
import styles from '../styles/UsersScore.module.css'
import { Bar } from 'react-chartjs-2';
import { userOptions } from '../options';

const UsersScore = ({ userLabels, userScores, userColors}) => {
  
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
  return (
    <div className={styles.bottomLeftContainer}>
    <Bar
      options={userOptions}
      data={userData}
      width={100}
      height={100}
    />
  </div>
  )
}

export default UsersScore