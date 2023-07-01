import { useRouter } from 'next/router';

const ProjectPage = () => {
    const router = useRouter()
    const project = JSON.parse(router.query.project)

    return (
        <div id="project-">
            <p>{project.title} page</p>
        </div>
    )
}

export default ProjectPage