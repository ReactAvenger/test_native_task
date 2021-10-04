import React from 'react'
import styles from './Footer.module.css'
import { ReactComponent as WearablesIcon } from './../../assets/wearables.svg'
import { ReactComponent as ProfileIcon } from './../../assets/profile.svg'
import { ReactComponent as HelpIcon } from './../../assets/help.svg'

const Footer = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <WearablesIcon className={styles.icon} />
        <h4 className={styles.label}>Wearables</h4>
      </button>
      <button className={styles.button}>
        <ProfileIcon className={styles.icon} />
        <h4 className={styles.label}>Profile</h4>
      </button>
      <button className={styles.button}>
        <HelpIcon className={styles.icon} />
        <h4 className={styles.label}>Help</h4>
      </button>
    </div>
  )
}

export default Footer
