import Link from 'next/link'

const NoResult = () => {
    return ( 
        <div>
            <h1>Yikes.</h1>
            <h2>The page you are looking for does not exist.</h2>
            <p>Back to </p>
            <Link href="/"><a>Homepage</a></Link>
        </div>
     );
}
 
export default NoResult