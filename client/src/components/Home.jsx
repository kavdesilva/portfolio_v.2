import { useRouter } from 'next/router';

const Home = ({targetRefs}) => {
    const router = useRouter()
    return (
    <div id="home">
        <h1>Hi, I'm Kristina.</h1>
        <div className="divider" ref={(el) => (targetRefs.current[0] = el)}></div>
        <p>I am a software engineer with ten years of experience in a multitude of client-facing positions. I believe in building high quality products that are beautiful, functional and easy to use.</p>
        <button className="btn-primary" onClick={() => router.push('/#projects')}>Projects</button>
    </div>
    )
}

export default Home