import React from 'react'
import styles from './Card.module.css'

import stone1Img from '../../assets/stone1.png'
import stone2Img from '../../assets/stone2.png'
import addIcon from '../../assets/addIcon.png'

const Card = ({
  handlePointerEvent,
  name,
  imgType,
  type,
  cardStyle,
  description,
}) => {
  return (
    <article className={cardStyle}>
      {type === 'regular-card' && (
        <div
          className={styles.card}
          onMouseDown={handlePointerEvent}
          onTouchStart={handlePointerEvent}
        >
          <img
            className={styles.image}
            src={
              (imgType === 'stone1' && stone1Img) ||
              (imgType === 'stone2' && stone2Img)
            }
            alt="stone"
          />
          <h1 className={styles.title}>{name}</h1>
          <h4 className={styles.description}>{description}</h4>
          <button className={styles.button}>View</button>
        </div>
      )}
      {type === 'add-card' && (
        <div
          className={styles.card}
          onMouseDown={handlePointerEvent}
          onTouchStart={handlePointerEvent}
        >
          <img className={styles.add_image} src={addIcon} alt="cerf" />
          <h1 className={styles.add_title}>{name}</h1>
          <h4 className={styles.add_description}>{description}</h4>
        </div>
      )}
    </article>
  )
}

export default Card
