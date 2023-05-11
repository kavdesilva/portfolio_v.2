import { useRouter } from 'next/router';

const Home = () => {
    const router = useRouter()
    return (
    <div id="home">
        <h1>Hi, I'm Kristina.</h1>
        <button className="btn-primary" onClick={() => router.push('/#projects')}>Projects</button>
    </div>
    )
}

export default Home