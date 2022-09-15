import Footer from "./sub/Footer";
import BB_navbar from "./sub/BB_navbar";
import { useRouter } from 'next/router'

export default function Layout( {children} ){

    const router = useRouter();
    // const bb_site = router.pathname === '/broken_bats' ? true : false;
    const home_path = router.pathname === '/' ? false : true; //check if at home page, if true return false
    const bb_site = /broken_bats/gm.test(router.pathname); //regex

    return (
        <>
            <div className="content-space">
                {bb_site && <BB_navbar/>}
                { children }
                { home_path && <Footer/>} 
            </div>
        </>
    )
}