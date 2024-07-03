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
import Plancab from './plancab.jpeg'
import Gssoc from './GSSOC.png'
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
    about: "Developed using React, MongoDB, Node.js, Express, and WebSockets.Enables one-on-one chat interactions.Facilitates group chats for collaborative communication.Provides admin controls for efficient management.",
    deploy: 'https://talktive.netlify.app/'
}, {
    name: 'iNoteLamp',
    img: Dashboard,
    url: 'https://github.com/AbhayKrSing/inotelamp',
    about: "Developed using React, MongoDB, Node.js, and Express.Features robust authentication and seamless note- taking capabilities.",
    deploy: 'https://inotelamp.netlify.app'
}]

const work_experience = [{
    name: 'plancab',
    date: 'Sept 2023-Oct 2023',
    role: 'Front-end Developer',
    place: 'Remote',
    service: 'I have worked as a Front-end Developer here, during which I learned a lot about various technologies.I got this opportunity through freelancing.',
    link: "https://www.plancab.in/",
    image: "https://static.wixstatic.com/media/ffe4f9_a94db269b1db42ca96d2f0340aca1bd2~mv2.png/v1/fill/w_190,h_135,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/plancab-removebg-preview.png" || Plancab
}, {
    name: 'GSSOC',
    date: 'May 2023 to July 2023',
    role: 'Contributer',
    place: 'Remote',
    service: 'I participated in GSSOC as a contributor and worked on various full-stack projects. Observing and learning from others has helped me understand problem-solving techniques and best industry practices.',
    link: "https://gssoc.girlscript.tech/",
    image: Gssoc
}]

export { logo, TechStack, ProjectsPhoto, GithubLogo, work_experience, DeployLogo, Skills }