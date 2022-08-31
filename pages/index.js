// import styles from '../styles/landing.module.scss'
import styles from '../styles/test.module.scss';
import { RightOutlined } from '@ant-design/icons';
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className={styles.nav}>Amateur Baseball Association - Singapore</div>
      <div className={styles.background}> 
        <div className={styles.container_left}>
          <div className={styles.text}>
            <h1 className={styles.title}>Broken Bats</h1>
            <p className={styles.subtitle}>Amateur Team With The Will To Compete</p>
            <br />
            <Link href="/broken_bats/">
              <a><button className={styles.btn}>Find Out More <RightOutlined /></button></a>
            </Link>
          </div>
        </div> 
        <div className={styles.container_right}>
          <div className={styles.text}>
            <h1 className={styles.title}>BIGS</h1>
            <p className= {styles.title2}>Baseball Interest Group - Singapore</p>
            <p className={styles.subtitle}>Your Gateway Into The World Of Baseball</p>
            <br />
            <Link href="/bigs/">
              <a><button className={styles.btn}>Find Out More <RightOutlined /></button></a>
            </Link>
          </div>
        </div> 
      </div>
    </>
  )
}