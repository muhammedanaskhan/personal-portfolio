import classes from './social.module.css';
import Section from './section';
import SocialLinks from './social-link';


function Social() {
    return (
        <Section>
            <div className="section_title link">
                On the Web 🌐
            </div>
            <div className={`${classes.link_wrapper} section_content`}>
                <SocialLinks image="github" text="github" link="https://github.com/muhammedanaskhan" />
                <SocialLinks image="linkedin" text="linkedIn" link="https://www.linkedin.com/in/mohammad-anas-khan-6591aa197/" />
                <SocialLinks image="stackoverflow" text="Stackoverflow" link="https://stackoverflow.com/users/16754983/mohammad-anas-khan" />
                <SocialLinks image="codepen" text="Codepen" link="https://codepen.io/anaskhandevpro" />
                <SocialLinks image="twitter" text="Twitter" link="https://twitter.com/m_anas_dev" />
                <SocialLinks image="gmail" text="mail" link="mailto:muhammedanas5186@gmail.com" />
            </div>
        </Section>
    )
}
export default Social;