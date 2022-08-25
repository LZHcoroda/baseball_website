import Footer from "./sub/Footer";
import Navbar from "./sub/Navbar";
import { useRouter } from 'next/router'

export default function Layout( {children} ){

    const router = useRouter();
    const showHeader = router.pathname === '/' ? false : true;

    return (
        <>
            <div className="content-space">
                {showHeader && <Navbar/>}
                { children }
                {showHeader && <Footer/>}
            </div>
        </>
    )
}