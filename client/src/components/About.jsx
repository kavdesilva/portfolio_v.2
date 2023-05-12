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
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo perferendis quae dolore tempora modi quidem qui voluptas sunt error minus amet illum adipisci sit quo eligendi, quisquam repudiandae, pariatur facilis!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos consequuntur consequatur commodi optio! Vel itaque adipisci optio tenetur totam voluptate perspiciatis vero quisquam soluta molestias laborum temporibus voluptas, eaque quidem omnis aut suscipit nulla iste incidunt. Repellat, aliquid? Voluptas, doloremque neque! Harum non quae sit nam asperiores iusto repudiandae inventore ipsum rerum sequi. Perferendis quibusdam, harum suscipit reiciendis porro rerum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, atque similique, enim quae dolor non incidunt modi iste nihil placeat labore molestiae minima commodi perferendis.</p>
                    <button className="btn-secondary" onClick={() => router.push('/#contact')}>Contact</button>
                </div>
                <div className="skills">
                    <p>skills</p>
                </div>
            </div>
        </div>
    )
}

export default About