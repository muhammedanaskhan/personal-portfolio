import ProjectBox from './project-box';
import classes from './projetcs.module.css';
import Section from './section';
function Projects() {
    const projects = [
        {
            name: "Movie App",
            tech: "React.js, TMDB API, Firebase, CSS",
            github: "https://github.com/muhammedanaskhan/react-movie",
            live: "https://react-movie-tau-ten.vercel.app/"
        },
        {
            name: "Cryptobase - Dashboard App",
            tech: "React, ANT DESIGN, Chart Js",
            github: "https://github.com/muhammedanaskhan/Cryptobase",
            live: "https://cryptobase-one.vercel.app/"
        },
        {
            name: "ShopX - Ecommerce site",
            tech: "React, ContextAPI, Stripe",
            github: "https://github.com/muhammedanaskhan/shopx",
            live: "http://shopx-one.vercel.app/"
        },
    ]
    return (
        <Section>
            <div className="section_title link">
                Featured Projects 📁
            </div>
            <div className={`${classes.projects_wrapper} section_content`}>
                {projects?.map(project => <ProjectBox key={project.github} name={project.name} tech={project.tech} github={project.github} live={project.live} />)}
            </div>
        </Section>
    )
}
export default Projects;