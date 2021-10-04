import React from 'react'
import profilePhoto from './../../assets/profilePhoto.png'
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={profilePhoto} alt="" />
      <h1 className={styles.profileName}>Lottie Curtis</h1>
      <div className={styles.profileInfo}>You have 3 products</div>
    </div>
  )
}

export default Profile
