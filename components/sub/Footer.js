import Link from 'next/link';
import { useRouter } from 'next/router';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

export default function Footer() {

    const router = useRouter();
    // const bb_site = router.pathname === '/broken_bats' ? true : false;
    const bb_site = /broken_bats/gm.test(router.pathname); //regex
    
    return ( 
        <div className="foot">
            <div className="footer-container-row">
                <p className="title-bg">follow us out there</p>
            </div>
            
            {
                bb_site && 
                <div className="footer-container-row">
                    <Link href="https://www.facebook.com/brokenbatsbaseball">
                        <a><FacebookOutlined /></a>
                    </Link>
                    <Link href="https://www.instagram.com/brokenbatsbaseball/">
                        <a><InstagramOutlined /></a>
                    </Link>
                </div>
            }
        </div>
     );
}