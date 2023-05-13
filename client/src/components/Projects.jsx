import { useState, useEffect } from "react";

const Projects = ({targetRefs}) => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'NextJS', 'Vue', 'GIT', 'GitHub', 'SQL', 'Express', 'MongoDB', 'Python', 'Django']

    const [skillSelected, setButtonClass] = useState([])

    const handleButtonClass = (selected) => {
        if (skillSelected.includes(selected)){
            setButtonClass(skillSelected.filter((skill)=> skill !== selected))
        } else {
            setButtonClass([...skillSelected, selected])
        }
    }

    const [projectsArray, setProjectsArray] = useState(null)
    const [selectedProjects, setSelectedProjects] = useState([])

    const dummyImgUrl = 'https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg'

    useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(data => setProjectsArray(data))
            .catch(error => console.error(error))
    }, [])

    useEffect(() => {
        if (!projectsArray) return;
        let filteredProjects = [...projectsArray];
        if (skillSelected.length > 0) {
            filteredProjects = projectsArray.filter(project => {
                return skillSelected.some(skill => project.tags.includes(skill));
            });
        }
        setSelectedProjects(filteredProjects);
    }, [skillSelected, projectsArray]);


    return (
        <div id="projects">
            <h2>Projects</h2>
            <div className="divider" ref={(el) => (targetRefs.current[2] = el)}></div>
            <div className="skills">
                <h3>My Skills</h3>
                {
                    skills.map((skill, i) => (
                        <button key={i} className={skillSelected.includes(skill) ? "btn-skill btn-selected" : "btn-skill"} onClick={() => handleButtonClass(skill)}><p className="gradient-text">{skill}</p></button>
                    ))
                }
                <br />
                <button className="btn-skill" onClick={() => setButtonClass([])}><p className="gradient-text">Clear</p></button>
            </div>
            <div className="projects-container">
                {
                    selectedProjects?.map((project, i) => (
                        <div key={i} className="project-card">
                            <div className="project-image">
                                <img src={dummyImgUrl} alt={project.img_alt} />
                            </div>
                            <div className="project-info">
                                <p>{project.title}</p>
                                <p>{project.description}</p>
                                <ul>
                                    {project.tags.map((tag) => {return <li>{tag}</li>})}
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects