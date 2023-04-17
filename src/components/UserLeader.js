import React from 'react'
import styles from '../styles/UserLeader.module.css'

const UserLeader = ({ filteredUserNames, filteredUserScore}) => {
  return (
    <div className={styles.bottomRightContainer}>
    <div className={styles.bottomTextContainer}>
      <p>Deltagare i ledning</p>
    </div>
    <div className={styles.bottomLeaderContainer}>
      <p> {filteredUserNames.slice(0, 1)} </p>
    </div>
    <div className={styles.bottomTeamPointContainer}>
      <p>{Math.round(filteredUserScore.slice(0, 1))} poäng</p>
    </div>
  </div>
  )
}

export default UserLeader