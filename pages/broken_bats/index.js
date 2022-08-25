import styles from '../../styles/BB.module.scss'
import Image from "next/image"

export default function BB_home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.home_banner_wrapper}>
        <Image className={styles.home_banner_img}
          src="/images/Banner_BB_Copy.jpg"
          alt='Banner Image'
          layout="intrinsic"
          width={4000}
          height={1500}
        />
        {/* <img src='/images/Banner_BB_Copy.jpg' alt='test'/> */}
        <div className={styles.banner_content}>
          <h1>BROKEN BATS</h1>
          <h2>placeholder</h2>
        </div>
      </div>
      <div className={styles.divider}/>
      <div className={styles.home_content_container}>
        <div className={styles.home_portal}>
          <h1>Game</h1>
          <h2>Schedule</h2>
        </div>
        <div className={styles.home_portal}>Join Us</div>
        <div className={styles.home_portal}>test 2</div>
      </div>
    </div>
  )
}