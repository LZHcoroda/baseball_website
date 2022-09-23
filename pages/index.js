import styles from '../styles/landing.module.scss';
import { RightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from "next/image";
import React, { useState, useEffect } from 'react';

export default function Home() {

  const [bb_opacity, setBB_opacity] = useState(0);
  const [bigs_opacity, setBigs_opacity] = useState (0);
  const [showBbBtn, setShowBbBtn] = useState(false);
  const [showBigsBtn, setShowBigsBtn] = useState(false);

  function hoverBB() {
    setShowBbBtn(true);
    setBB_opacity(1)
  }

  function leaveBB() {
    setShowBbBtn(false);
    setBB_opacity(0)
  }

  function hoverBigs() {
    setShowBigsBtn(true);
    setBigs_opacity(1);
  }

  function leaveBigs() {
    setShowBigsBtn(false);
    setBigs_opacity(0);
  }

  return (
    <>
      <div className={styles.background}>
        <div className={styles.grid_left}>
          <div className={styles.img_grid}>
            <img style={{opacity: bb_opacity}} className={styles.bb_img} src='/images/Banner_BB.jpg' alt='bb_image'/> 
            <img style={{opacity: bigs_opacity}} className={styles.bigs_img} src='/images/baseball_bigs.jpg' alt='bigs_image'/> 
          </div>
        </div>
        <div className={styles.grid_right}>
          <div onMouseEnter={hoverBB} onMouseLeave={leaveBB} className={styles.grid_r_top}>
            <h1>Broken Bats</h1>
            <h2>Amateur Team With The Will To Compete</h2>
            {showBbBtn && <Link href = "/broken_bats/"><a><button className={styles.btn}>Find Out More <RightOutlined/></button></a></Link>}
            <Link href = "/broken_bats/"><a><button className={styles.mobile__btn}>Learn More</button></a></Link>
            <div className={styles.dot}></div>
          </div> 
          <div onMouseEnter={hoverBigs} onMouseLeave={leaveBigs} className={styles.grid_r_btm}>
            <h1>BIGS</h1>
            <h2>Baseball Interest Group Singapore</h2>
            {showBigsBtn && <button className={styles.btn}>Coming Soon<RightOutlined/></button>}
            <Link href = "/"><a><button className={styles.mobile__btn}>Coming Soon</button></a></Link>
            <div className={styles.dot}></div>
          </div>
        </div>
      </div>
    </>
  )
}