import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return(
        <>
            <nav>
                <div className='nav-container'>
                    {/* Logo */}
                    <div className='logo'>
                        <Link href="/broken_bats/">
                            <a>
                                <Image
                                    src="/logo/BB_test_img.jpg"
                                    alt="Broken Bats's logo"
                                    width = {44}
                                    height = {44}
                                />
                            </a>
                        </Link>
                    </div>
                    
                    {/* Navigation */}
                    <Link href="/">
                        <a>Events</a>
                    </Link>
                    <Link href="/">
                        <a>About Us</a>
                    </Link>
                    <Link href="/">
                        <a>Contact Us</a>
                    </Link>
                </div>
            </nav>
        </>
    )
}