import { useRouter } from "next/router"

const About = () => {
    const router = useRouter()
    return (
        <div id="about">
            <h2>About Me</h2>
            <div className="divider"></div>
            <div className="story">
                <h3>My Story</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo perferendis quae dolore tempora modi quidem qui voluptas sunt error minus amet illum adipisci sit quo eligendi, quisquam repudiandae, pariatur facilis!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos consequuntur consequatur commodi optio! Vel itaque adipisci optio tenetur totam voluptate perspiciatis vero quisquam soluta molestias laborum temporibus voluptas, eaque quidem omnis aut suscipit nulla iste incidunt. Repellat, aliquid? Voluptas, doloremque neque! Harum non quae sit nam asperiores iusto repudiandae inventore ipsum rerum sequi. Perferendis quibusdam, harum suscipit reiciendis porro rerum.</p>
                <button className="btn-secondary" onClick={() => router.push('/#contact')}>Contact</button>
            </div>
        </div>
    )
}

export default About