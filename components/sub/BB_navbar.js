import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function BB_navbar() {

    const mountedStyle = {
        animation: "inAnimation 0.3s ease-in"
      };
      const unmountedStyle = {
        animation: "outAnimation 0.3s ease-out",
        animationFillMode: "forwards"
      };

    const [hamburgerOpen , setHamburgerOpen] = useState(false);
    const [hamburgerClass, setHamburgerClass] = useState("hamburger");
    const [navMobileShown, setNavMobileShown ] = useState(false);

    const toggleHamburgerTrue = () => {

        if(!hamburgerOpen) {
            setHamburgerClass("hamburger clicked");
        }
        else {
            setHamburgerClass("hamburger");
        }
        if(!navMobileShown) {
            setNavMobileShown(true);
        }
        setHamburgerOpen(!hamburgerOpen);
    }

    const resetAllState = () => {
        setHamburgerOpen(false);
        setHamburgerClass("hamburger");
        setNavMobileShown(false);
    }

    return(
        <>
            <nav>
                <div className='nav-container'>
                    <div className='nav__logo'>
                        <Link href="/broken_bats/">
                            <a className = 'logo_tag'>
                                <Image
                                    src="/logo/bb_logo.svg"
                                    alt="Broken Bats's logo"
                                    width = {220}
                                    height = {40}
                                />
                            </a>
                        </Link>
                    </div>
                    
                    <div className='nav-menu'>
                        <Link href="/">
                            <a>portal</a>
                        </Link>
                        <Link href="/broken_bats">
                            <a>Home</a>
                        </Link>
                        <Link href="/broken_bats/game_schedule">
                            <a>Schedule</a>
                        </Link>
                        <Link href="/broken_bats/join_us">
                            <a>Join us</a>
                        </Link>
                        <Link href="/broken_bats/about_us">
                            <a>About us</a>
                        </Link>
                    </div>

                    <div className={hamburgerClass} onClick={toggleHamburgerTrue}>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                    
                    {
                    navMobileShown &&
                        <div className='nav-mobile__menu' style={hamburgerOpen? mountedStyle : unmountedStyle} onAnimationEnd={()=> {if(!hamburgerOpen) setNavMobileShown(false)}} ontouchstart="">
                            <Link href="/">
                                <a onClick={resetAllState}>portal</a>
                            </Link>
                            <Link href="/broken_bats">
                                <a onClick={resetAllState}>home</a>
                            </Link>
                            <Link href="/broken_bats/game_schedule">
                                <a onClick={resetAllState}>schedule</a>
                            </Link>
                            <Link href="/broken_bats/join_us">
                                <a onClick={resetAllState}>join us</a>
                            </Link>
                            <Link href="/broken_bats/about_us">
                                <a onClick={resetAllState}>about us</a>
                            </Link>
                        </div>
                    }
                </div>
            </nav>
        </>
    )
}