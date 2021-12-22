import ProjectCard from '../components/ProjectCard.js'

import logo from '../assets/logo.svg';
import weblogo from '../assets/weblogo.png';
import gamelogo from '../assets/gamelogo.png';

import instaSlot from '../assets/InstaSlot.png';
import aliensTookMyFriend from '../assets/AliensTookMyFriend.png';
import portfolio from '../assets/PortfolioWebsite.PNG';

function AppBody() {
	return(
		<div id ="app__body">
			<div id="body__left">
			<h1 style={{marginTop: "0px"}}>Welcome to my portfolio!</h1>

			<h1 style={{marginBottom: "10px"}}>About Me</h1>
			<p>
				I am an aspiring software developer.
				<br />
				I love creating new things, upgrading old ones, and problem-solving.
				<br />
				I am currently a student at Florida International University, pursuing a B.S. in Computer Science with a minor in Mathematical Sciences.
			</p>

			<h1 style={{marginTop: "70px"}}>Skills</h1>

			<h3 >Languages:</h3>
			<ul>
				<li>Java</li>
				<li>C</li>
				<li>C#</li>
			</ul>
			<h3 >Technologies:</h3>
			<ul>
				<li>Git</li>
			</ul>

			<h1 style={{marginTop: "70px"}}>Some Knowledge:</h1>
			<ul>
				<li>Unity</li>
				<li>Javascript</li>
				<li>CSS</li>
				<li>SQL</li>
				<li>Figma</li>
			</ul>

			</div>

			<div id="body__right">
				<h1>Projects</h1>
				<ProjectCard
				img = {weblogo}
				img2 = "null"
				name = "Personal Portfolio Website"
				desc = "This website! It is a work in progress. It was made in 2021 using React and Node.js."
				devpost_link = ""
				github_link = ""
				webgl_link = ""
				/>
				<ProjectCard
				img = {gamelogo}
				img2 = {instaSlot}
				name = "InstaSlot"
				desc = "This is a game I created in a team of 4 for the 'GANstant Win' Challenge for ShellHacks 2021 using the Unity Game Engine and C#."
				devpost_link = "https://devpost.com/software/instaslot"
				github_link = "https://github.com/ricardocolom64/InstaSlot"
				webgl_link = "https://play.unity.com/mg/other/instaslot"
				/>
				<ProjectCard
				img = {gamelogo}
				img2 = {aliensTookMyFriend}
				name = "Aliens Took My Friend"
				desc = "This is a game I created in a team of 2 for the 'Best Space App' Challenge for KnightHacks 2021 using the Unity Game Engine and C#. We won 1st place in this challenge."
				devpost_link = "https://devpost.com/software/spacegame-pxqdgv"
				github_link = "https://github.com/julianlopez6850/AliensTookMyFriend"
				webgl_link = "https://play.unity.com/mg/other/aliens-took-my-friend"
				/>
			</div>
		</div>
	)
}

export default AppBody;