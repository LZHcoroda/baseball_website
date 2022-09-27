import styles from '/styles/BB.module.scss'
import Link from 'next/link';
import Image from "next/image"

export default function BB_home() {
  return (
    <div className={styles.home_container}>
      <div className='emptyblock'></div>
      <div className={styles.header}>
        <div className={styles.hero_wrapper}>
          <div className={styles.hero__image}>
            <Image
              src='/images/hero_bb.jpg'
              alt=''
              layout="fill"
              objectFit="cover"
              objectPosition='center'
            />
          </div>
          <p>play hard,</p>
          <p>swing harder</p>
          <br />
          <br />
          <Link href = "#body"><a><button className={styles.hero__btn}>learn more</button></a></Link>
        </div>
      </div>
      <div className={styles.home_divider}/>
      <div className={styles.body} id="body">
        <Link href="/broken_bats/game_schedule">
          <a>
            <div className={styles.card}>
              <div className={styles.card__image}>
                <Image
                  src="/images/calendar.jpg"
                  alt=''
                  layout="fill"
                />
              </div>
              <div className={styles.card__body}>
                <p className={styles.card__title}>game schedule</p>
                <div className={styles.card__description}>
                  <p>League game schedule for the ongoing or upcoming season.</p>
                </div>
                <button>more info</button>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/broken_bats/join_us">
          <a>
            <div className={styles.card}>
              <div className={styles.card__image}>
                <Image
                  src="/images/balls_bats.jpg"
                  alt=''
                  layout="fill"
                />
              </div>
              <div className={styles.card__body}>
                <p className={styles.card__title}>join broken bats</p>
                <div className={styles.card__description}>
                  <p>Join the broken bats baseball family! </p>
                </div>
                <button>more info</button>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/broken_bats/about_us">
          <a>
            <div className={styles.card}>
              <div className={styles.card__image}>
                <Image
                  src="/images/Brokenbats2.jpg"
                  alt=''
                  layout="fill"
                />
              </div>
              <div className={styles.card__body}>
                <p className={styles.card__title}>about us</p>
                <div className={styles.card__description}>
                  <p>Find out more about where we started and how we came to be, as well as our team&apos;s goal!</p>
                </div>
                <button>more info</button>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}