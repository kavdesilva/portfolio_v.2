import { useState } from "react";

const Projects = () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'GIT', 'GitHub', 'SQL', 'Express', 'MongoDB', 'Python', 'Django']

    const [skillSelected, setButtonClass] = useState([]);

    const handleButtonClass = (index) => {
        if (skillSelected.includes(index)){
            setButtonClass(skillSelected.filter((i)=> i !== index))
        } else {
            setButtonClass([...skillSelected, index])
        }
      
    };

    return (
        <div id="projects">
            <h2>Projects</h2>
            <div className="divider"></div>
            <div className="skills">
                    <h3>My Skills</h3>
                    {
                        skills.map((skill, i) => (
                            <button key={i} className={skillSelected.includes(i) ? "btn-skill btn-selected" : "btn-skill"} onClick={() => handleButtonClass(i)}><p className="gradient-text">{skill}</p></button>
                        ))
                    }
            </div>
        </div>
    )
}

export default Projects