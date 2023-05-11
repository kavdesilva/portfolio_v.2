import { useRouter } from "next/router"

const About = () => {
    const router = useRouter()

    return (
        <div id="about">
            <h1>About Me</h1>
            <div className="blurb">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos eveniet, dolores, maxime culpa ea veritatis, nulla omnis voluptates cupiditate voluptatem! Ducimus, modi! Vitae commodi iure aperiam minus tenetur, consequuntur magnam dolor architecto corrupti facere cumque perspiciatis eius nemo sint? Eveniet beatae eligendi quis culpa praesentium fuga nam aut inventore.</p>
            </div>
            <div className="story-skills-container">
                <div className="story">
                    <p>story</p>
                    <button className="btn-primary" onClick={() => router.push('/#contact')}>Contact</button>
                </div>
                <div className="skills">
                    <p>skills</p>
                </div>
            </div>
        </div>
    )
}

export default About