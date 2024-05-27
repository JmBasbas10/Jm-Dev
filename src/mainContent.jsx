import './css/mainContent.css'
import igProfile from "./assets/igProfile.jpg"
import profilePic from "./assets/profilePic.jpg"
import schoolProj1 from "./assets/projects/schoolProj1.png"
import schoolProj2 from "./assets/projects/schoolProj2.png"
import schoolProj3 from "./assets/projects/schoolProj3.png"
import personalProj1 from "./assets/projects/personalProj1.png"
import { useState } from 'react'

const MainContent = (props) => {


    return (
        <main className="mainContent" style={{overflowY: props.clicked != 99 && "scroll"}} id = "mainContent">
            {props.clicked == 182 ? <About/> : props.clicked == 121 && <About/>}
            {props.clicked == 99 ? <Projects/> : props.clicked == 68 && <Projects/>}
            {props.clicked == 16 && <Contact/> }
        </main>
    )
}

const About = () => {
    
    const SchoolComponent = (props) => {
        return(
                <div>
                    <div className="educationHeader">
                        <h2>{props.schoolType}</h2>
                        <h4>{props.program}</h4>
                    </div>
                    <div className="school">
                        <h3>{props.schoolName}</h3>
                        <h4>{props.schoolYear}</h4>
                    </div>
                    <div className="myAwards">
                        <h3>Awards</h3>
                        <div className="awards">
                            {props.schoolAwards.map((award) => {
                                return(
                                    <h5>{award}</h5>
                                )
                            })}
                        </div>
                    </div>
                </div>
        )
    }

    const SkillsComponent  = (props) => {

        return(
            <div className="skills">
                {props.skills.map((skill) => {
                    return(
                        <h5>{skill}</h5>
                    )
                })}
            </div>
        )
    }

    return (
        <div className='main'>
            <div className="contentHeader">
                <h1>About Me</h1>
                <hr/>
                <p>Here you will find all the information about me and what I do, and mainly my skills and knowledge in programming and editing.</p>
            </div>
            <div className="contentFirstRow">
                <div className="name">
                    <h2>JOHN MARC MANUEL BASBAS</h2>
                    <h5 className='meLabel firstName'>First Name</h5>
                    <h5 className='meLabel middleName'>Middle Name</h5>
                    <h5 className='meLabel lastName'>Last Name</h5>
                </div>
                <div className="genderAge">
                    <div className="myBirthday">
                        <h3 className='myBirthday'>August 10, 2005</h3>
                        <h5 className='meLabel birthday'>Date of Birth</h5>
                    </div>
                    <div className="myAge">
                        <h3 className='myAge'>18 Years old</h3>
                        <h5 className='meLabel age'>Age</h5>
                    </div>
                    <div className="myGender">
                        <h3 className='myGender'>Male</h3>
                        <h5 className='meLabel gender'>Gender</h5>
                    </div>
                </div>

            </div>
            <div className="contentSecondRow">
                <div className="knowMe">
                    <h2>Get to know me!</h2>
                    <p>Hi I'm <strong>Jm</strong>, I am a first year student at Cavite State University currently studying for a Bachelor's degree in Information Technology, though I am currently just at my first year, I have a decent amount of knowledge in editing and programmimg, mainly web development, and I am hoping to get more work experience with this portforlio.</p>
                </div>
                <div className="mySkills">
                    <h2>Skills</h2>
                    < SkillsComponent 
                        skills ={["HTML", "CSS", "JavaScript", "React Js", "Node Js", "C#", "C++", "Microsoft Forms", "Figma", "Canva", "Adobe Photoshop"]}
                    />
                </div>
            </div>
            <div className="contentThirdRow">
                <h1>Education</h1>
                <SchoolComponent className = "college" 
                                schoolType = {"College"} 
                                program = {"Bachelor of Science in Information Technology"}
                                schoolName = {"Cavite State University - Carmona Campus"}
                                schoolYear = {"2023 - Present"}
                                schoolAwards = {["AY. 23-24 1st Sem, Vice President's Lister"]}
                />
                <SchoolComponent className = "shs" 
                                schoolType = {"Senior High School"} 
                                program = {"ICT - Information Communication Technology"}
                                schoolName = {"Angelo Levardo Loyola Senior Highschool"}
                                schoolYear = {"2021 - 2023"}
                                schoolAwards = {["SY. 22-23, With Honors", "SY. 22-23 1st Sem, With Honors", "SY. 22-23 2nd Sem, With Honors", "SY. 22-23, 4th ALLSHS Research Summit", "SY. 22-23, Research Summit Poster 1st Place"]}
                />
            </div>
        </div>
    )
}
const Experience = () => {
    return (
        <div>
            <div className="contentHeader">
                <h1>My Experience</h1>
                <hr/>
            </div>
        </div>
    )
}

const Projects = () => {
    const ProjectCard = (props) => {
        return(
                <div className="projectCard" >
                    <img src={props.projectImage} alt="" />
                    <div className="projectDetails">
                        <h2>{props.projectName}</h2>
                        <p>{props.projectDescription}</p>
                        <div className="projectTools">
                            {props.projectTools.map((tools) => {
                                return(
                                    <h5>{tools}</h5>
                                )
                            })}
                        </div>
                    </div>
                </div>
        )
    }
    const [check, setCheck] = useState("About");
    const ifChecked = (id) => {
        if(id == 'About'){
            document.getElementById('About').checked = true;
            document.getElementById('Personal').checked = false;
            document.getElementById('School').checked = false;
        } else  if(id == 'Personal'){
            document.getElementById('About').checked = false;
            document.getElementById('Personal').checked = true;
            document.getElementById('School').checked = false;
        } else if(id == 'School') {
            document.getElementById('About').checked = false;
            document.getElementById('Personal').checked = false;
            document.getElementById('School').checked = true;
        }
        setCheck(id)
    }
    return (
        <div className='main'>
            
            <div className="contentHeader">
                <h1>My Projects</h1>
                <hr/>
            </div>

            <div className="projectsPage" id='projectsPage'
                onScroll={() => {
                                    document.getElementById('projectsPage').scrollTop < 150 && ifChecked('About')
                                    document.getElementById('projectsPage').scrollTop >= 200 && ifChecked('Personal')
                                    document.getElementById('projectsPage').scrollTop >= 500 && ifChecked('School')
                                }
                }
            >
                <nav className='projectsNav'>
                    <input type='checkBox' id='About' onClick={() => {window.location.href =`#aboutProjects`; ifChecked('About');}}/>
                    <label htmlFor="About">
                        <div className={"projectNavLink"}>
                            <hr style={{backgroundColor: check == "About" && '#00ffa2', width: check == "About" && "65px"} }/>
                            <p style={{color: check == "About" && '#00ffa2'}}>About</p>
                        </div>
                    </label>
                    <input type='checkBox' id='Personal' onClick={() => {window.location.href =`#personal`; ifChecked('Personal');}}/>
                    <label htmlFor="Personal">
                        <div className={"projectNavLink"}>
                            <hr style={{backgroundColor: check == "Personal" && '#00ffa2', width: check == "Personal" && "65px"} }/>
                            <p style={{color: check == "Personal" && '#00ffa2'}}>Personal</p>
                        </div>
                    </label>
                    <input type='checkBox' id='School' onClick={() => {window.location.href =`#school`; ifChecked('School');}}/>
                    <label htmlFor="School">
                        <div className={"projectNavLink"}>
                            <hr style={{backgroundColor: check == "School" && '#00ffa2', width: check == "School" && "65px"} }/>
                            <p style={{color: check == "School" && '#00ffa2'}}>School</p>
                        </div>
                    </label>
                </nav>
                <div className="allProjects">
                    <section id="aboutProjects">
                        <p>Here you will find all my projects both <strong>personal</strong> and <strong>school projects</strong>. I created these personal projects as a challenge for my self so that I am always learning new things and growing as a programmer.  </p>
                        <p>As a student I also have requirments that I need to accomplish that is why I created these school projects to comply with our universities requirments</p>
                    </section>
                    <section id='personal'>
                        <h1>Personal Projects</h1>
                        <div className="projectsContainer">
                            <ProjectCard 
                                        projectTools = {["React Js","HTML", "CSS"]} 
                                        projectImage = {personalProj1} 
                                        projectName = {"Jm Dev Portfolio"} 
                                        projectDescription = {"This Project is my very first ever portfolio, I created this to start my freelance career so that I can get many experience before I graduate and so that I can have an extra source of income"}
                            />
                        </div>
                    </section>
                    <section id='school'>
                        <h1>School Projects</h1>
                        <div className="projectsContainer">
                            <ProjectCard 
                                        projectTools = {["HTML", "CSS"]} 
                                        projectImage = {schoolProj1} 
                                        projectName = {"TECHPark"} 
                                        projectDescription = {"This project was created in my first year as a midterm examination for web systems and technologies"}
                            />
                            <ProjectCard 
                                        projectTools = {["HTML", "CSS"]} 
                                        projectImage = {schoolProj2} 
                                        projectName = {"Activity Portfolio"} 
                                        projectDescription = {"This project was created in my first year as an activity to create a landing page with css animations"}
                            />
                            <ProjectCard 
                                        projectTools = {["HTML", "CSS", "JavaScript"]} 
                                        projectImage = {schoolProj3} 
                                        projectName = {"Carmona City Chronicles"} 
                                        projectDescription = {"This project was created in my first year as a final project for the AY. 23 - 24 in which we were tasked to create a full on website"}
                            />
                            
                        </div>
                    </section>
                

                </div>
            </div>

            
        </div>
    )

}
const Contact = () => {
    return (
        <div>
            <div className="contentHeader">
                <h1>Contact Me</h1>
                <hr/>
            </div>
            <div className="contactContainer2">
                <div className="accounts">
                    <div className="email account">
                        <h2>Email Me!</h2>
                        <h3>basbasjohnmarc@gmail.com</h3>
                    </div>
                    <div className="socialMedia account">
                        <h2>Follow Me!</h2>
                        <div className="socAccContainer">
                            <div className="socAcc">
                                <div className="socAccDetails">
                                    <div className="socAccImg">
                                        <div className="socialIcon fbIcon"></div>
                                        <img src={profilePic} alt="" />
                                    </div>
                                    <div className="socAccText">
                                        <h3>John Marc Basbas</h3>
                                        <a href="https://www.facebook.com/johnmarc.basbas.7" target='_blank'>
                                            <input type="button" value="View" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="socAcc">
                                <div className="socAccDetails">
                                    <div className="socAccImg">
                                        <div className="socialIcon igIcon"></div>
                                        <img src={igProfile} alt="" />
                                    </div>
                                    <div className="socAccText">
                                        <h3>@john10_mb</h3>
                                        <a href="https://www.instagram.com/john10_mb" target='_blank'>
                                            <input type="button" value="View" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="messageMe">
                    <h1>Message Me!</h1>
                    <input type="text" placeholder='Name' required />
                    <input type="email" placeholder='Email' required />
                    <textarea rows = "10"cols="60" placeholder = "Message" required></textarea>
                    <input className='submit' type="submit" value="Submit" onClick={() => {alert("Message is currently not working, email us instead!")}}/>
                </form>
            </div>
        </div>
    )
}

export default MainContent