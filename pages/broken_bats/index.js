import styles from '/styles/BB.module.scss'
import Link from 'next/link';
import Image from "next/image"

export default function BB_home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.hero_wrapper}>
        <div className={styles.banner_content}>
          <div className={styles.banner_image}>
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
          <Link href = "#section2"><a><button className={styles.btn1}>learn more</button></a></Link>
        </div>
      </div>
      <div className={styles.divider}/>
      <div className={styles.home_content_container} id="section2">
        <Link href="/broken_bats/game-schedule">
          <a>
            <div className={styles.home_portal}>
              <div className={styles.image_container}>
                <Image
                  src="/images/calendar.jpg"
                  alt=''
                  layout="fill"
                />
              </div>
              <div className={styles.portal_container}>
                <p className={styles.card_title}>game schedule</p>
                <div className={styles.description}>
                  <p>League game schedule for the ongoing or upcoming season.</p>
                </div>
                <button>more info</button>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/broken_bats/join-us">
          <a>
            <div className={styles.home_portal}>
              <div className={styles.image_container}>
                <Image
                  src="/images/balls_bats.jpg"
                  alt=''
                  layout="fill"
                />
              </div>
              <div className={styles.portal_container}>
                <p className={styles.card_title}>join broken bats</p>
                <div className={styles.description}>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere eligendi culpa labore non a odit optio.</p>
                </div>
                <button>more info</button>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/broken_bats/about-us">
          <a>
            <div className={styles.home_portal}>
              <div className={styles.image_container}>
                <Image
                  src="/images/Brokenbats2.jpg"
                  alt=''
                  layout="fill"
                />
              </div>
              <div className={styles.portal_container}>
                <p className={styles.card_title}>about us</p>
                <div className={styles.description}>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere eligendi culpa labore non a odit optio.</p>
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