import emoji from "react-easy-emoji";

export const greetings = {
	name: "Matias Acosta",
	title: "Hi all, I'm Matias",
	description:
		"I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, PHP, Javascript, Scss.",
	resumeLink:
		"https://drive.google.com/file/d/10wav0DXrIMPf7-Ucdl1h7NDYhCX1ok8S/view?usp=sharing",
};

export const openSource = {
	githubUserName: "MatiasAcosta09",
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/MatiasAcosta09",
	linkedin: "https://www.linkedin.com/in/matiasacosta09/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "50",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "IES University",
		subHeader: "Systems Analyst Engineer",
		duration: "March 2020 - December 2024",
	},
];

export const experience = [
	{
		role: "Frontend Developer",
		company: "INFORMATORIO",
		companylogo: "/img/icons/common/bleedAI.jpg",
		date: "November 2020 – November 2021",
		desc: "In this job I was in Front End development and UX UI Design. I was part of a group where my teammates were in charge of the back end and test automation. It was great because I really enjoy working with other partners. In this position I've used languages like JavaScript, Python, Html5, Css3, Less, Sass, Ajax, Figma, Optimal Workshop.",
	},
];

export const projects = [
	{
		name: "Portfolio",
		desc: "Software Developer Portfolio built with react.js, next.js and bootstrap.",
		github: "https://github.com/MatiasAcosta09/Portfolio",
		link: "https://portfolio-two-flax-46.vercel.app/",
	},
	{
		name: "Gifs Finder",
		desc: "Site that takes care of consuming an API to fetch the gifs we are looking for.",
		github: "https://github.com/MatiasAcosta09/ReactBuscadorGifs",
		link: "https://buscadordegifsconreactjs.netlify.app/"
	},
	{
		name: "Front End Store",
		desc: "Front end store building with HTML and CSS ",
		github: "https://github.com/MatiasAcosta09/FrontEndStore",
	},
	{
		name: "Proyecto Festival Musica",
		desc: "Landing Page",
		github: "https://github.com/MatiasAcosta09/ProyectoFestivalMusica",
	},
];

/* export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	}, 
];*/

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Matias Acosta",
	description:
		"A passionate Full Stack Web Developer.",
	keywords: [
	],
}