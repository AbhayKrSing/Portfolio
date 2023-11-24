import logo from './Logo.png' //Icon of Web
//Techstack
import react from './TechStack/React.png'
import nodejs from './TechStack/Nodejs.png'
import Express from './TechStack/Express.png'
import Mongo from './TechStack/Mongodb.png'
import NextJs from './TechStack/NextJS.png'
import redux from './TechStack/redux.png';
import git from './TechStack/git.png'
import css from './TechStack/css.png'
import docker from './TechStack/docker.png'
import html from './TechStack/html.png'
import js from './TechStack/javascript.png'
import tailwind from './TechStack/tailwind.png'

//project
import Artifacts from './Projects/Artifacts.jpg'
import ChatApp from './Projects/ChatApp.png'
import Dashboard from './Projects/Dashboard.png'
//github and deploy logo
import GithubLogo from './GitHub_logo.png'
import DeployLogo from './Deploy_logo.png'

//Skills
import wixLogo from './WorkExp/Wixlogo.png'
import androiddev_logo from './Skills/AndroidDev_logo.png'
import backenddev_logo from './Skills/backendDevLogo.png'
import designer_logo from './Skills/Designer_logo.png'
import frontenddev_logo from './Skills/FrontendDev_logo.png'
import webdev_logo from './Skills/webDev_logo.png'
import wixdev_logo from './Skills/WixDev_logo.png'
import wordpressdev_logo from './Skills/Wordpress_logo.png'







const TechStack = [react, nodejs, Express, Mongo, NextJs, redux, git, css, docker, html, js, tailwind
]
const Skills = [{
    name: 'Web Dev',
    logo: webdev_logo
},
{
    name: 'Frontend Dev', logo: frontenddev_logo
},
{
    name: 'Design',
    logo: designer_logo
},
{
    name: 'Backend Dev',
    logo: backenddev_logo
},
{
    name: 'Wordpress',
    logo: wordpressdev_logo
},
{
    name: 'Wix',
    logo: wixdev_logo
}
    , {
    name: 'Android Dev',
    logo: androiddev_logo
}];
const ProjectsPhoto = [{
    name: "Artifacts",
    img: Artifacts,
    url: 'https://github.com/AbhayKrSing/AR-tifacts',
    about: 'Experience, Support, and Embrace Local Businesses through our distinctive blend of augmented reality, interactive maps, and event listings, we forge a connection between users and the diverse cultural legacy and dynamic offerings found their local communities.',
    deploy: 'https://akshitagupta15june.github.io/AR-tifacts/#product'
}, {
    name: "ChatApp",
    img: ChatApp,
    url: 'https://github.com/AbhayKrSing/Project/tree/master/ChatApp',
    about: "This is one of the project in which i learned a lot. Talktive is basically a full stack ChatApp. Technology used is MERN and websocket.",
    deploy: ''
}, {
    name: 'iNoteLamp',
    img: Dashboard,
    url: 'https://github.com/AbhayKrSing/inotelamp',
    about: "This is one of the project in which i learned lot. inotelamp is basically a full stack notetaking app. In this I done everything on my own.Technology used is MERN.",
    deploy: ''
}]

const work_experience = [{
    name: 'plancab',
    date: '2023',
    role: 'Developer',
    place: 'Noida,India',
    service: 'Provides Full stack App to a startup PlanCab startup at bangalore.',
    link: "https://www.plancab.in/",
    image: wixLogo
}]

export { logo, TechStack, ProjectsPhoto, GithubLogo, work_experience, DeployLogo, Skills }