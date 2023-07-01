import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

const Projects = ({targetRefs, projectsArray}) => {
    const router = useRouter()
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'NextJS', 'Vue', 'GIT', 'GitHub', 'SQL', 'Express', 'MongoDB', 'Python', 'Django']

    const [skillSelected, setButtonClass] = useState([])

    const handleButtonClass = (selected) => {
        if (skillSelected.includes(selected)){
            setButtonClass(skillSelected.filter((skill)=> skill !== selected))
        } else {
            setButtonClass([...skillSelected, selected])
        }
    }

    const [selectedProjects, setSelectedProjects] = useState([])

    const dummyImgUrl = 'https://thumbnails.production.thenounproject.com/EMHMPjlrTtkt-Va_M_YEdSyCJ_Y=/fit-in/1000x1000/photos.production.thenounproject.com/photos/8F5F7243-F55C-494E-B938-B545722D0F14.jpg'

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

    const [cardHover, setCardHover] = useState(null);

    const handleHover = (index) => {
      setCardHover(index);
    };
  
    const handleLeave = () => {
      setCardHover(null);
    };

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
                        <div key={i} className="project-card" onMouseEnter={() => handleHover(i)} onMouseLeave={handleLeave}>    
                            <img src={dummyImgUrl} alt={project.img_alt} />
                            <div className="project-info">
                                <h4>{project.title}</h4>
                                <ul>
                                    {project.tags.map((tag, j) => {return <li className={skillSelected.includes(tag) ? "gradient-tag" : "tag"} key={j}>{tag}</li>})}
                                </ul>
                                <div className={`project-description ${cardHover === i ? 'expanded' : ''}`}>
                                    <p>{project.description}</p>
                                    <button className="btn-project-details" onClick={() => {
                                        router.push({
                                            pathname: '/projects/[title]',
                                            query: { 
                                              project: JSON.stringify(project)
                                            },
                                          }, `/projects/${project.title.toLowerCase().replace(/\s/g, "-")}`);
                                      }}
                                    >Read More</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects