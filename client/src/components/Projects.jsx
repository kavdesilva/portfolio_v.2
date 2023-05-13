import { useState, useEffect } from "react";

const Projects = () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'GIT', 'GitHub', 'SQL', 'Express', 'MongoDB', 'Python', 'Django']

    const [skillSelected, setButtonClass] = useState([])

    const handleButtonClass = (selected) => {
        if (skillSelected.includes(selected)){
            setButtonClass(skillSelected.filter((skill)=> skill !== selected))
        } else {
            setButtonClass([...skillSelected, selected])
        }
    };

    useEffect(() => {
        console.log(skillSelected)
    }, [skillSelected])

    return (
        <div id="projects">
            <h2>Projects</h2>
            <div className="divider"></div>
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
                <p>Projects array goes here.</p>
            </div>
        </div>
    )
}

export default Projects