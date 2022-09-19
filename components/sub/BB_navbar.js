import Link from 'next/link'
import Image from 'next/image'

export default function BB_navbar() {
    return(
        <>
            <nav>
                <div className='nav-container'>
                    {/* Logo */}
                    <div className='logo'>
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
                        
                        {/* <div>Broken Bats</div> */}
                    </div>
                    
                    {/* Navigation */}
                    <Link href="/">
                        <a>portal</a>
                    </Link>
                    <Link href="/broken_bats">
                        <a>home</a>
                    </Link>
                    <Link href="/broken_bats/game_schedule">
                        <a>schedule</a>
                    </Link>
                    <Link href="/broken_bats/join_us">
                        <a>join us</a>
                    </Link>
                    <Link href="/broken_bats/about_us">
                        <a>about us</a>
                    </Link>
                    {/* <Link href="/">
                        <a>contact us</a>
                    </Link> */}
                </div>
            </nav>
        </>
    )
}