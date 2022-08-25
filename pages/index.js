import styles from '../styles/landing.module.scss'

// className={`${styles.description} ${styles.yellow}`}

export default function Home() {
  return (
    <div className={styles.background}>
      <h1>BASEBALL</h1>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.imgBoxBB}>
            <a href="/broken_bats">
              <img className={styles.image} src='/images/Banner_BB.jpg'/>
            </a>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.imgBoxBigs}>
            <a href="/">
              <img className={styles.image} src='/images/Banner_BB.jpg'/>
            </a>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
          </div>
        </div>
      </div> 
     </div>
  )
}