import logo from './logo.svg';
import weblogo from './weblogo.png';
import gamelogo from './gamelogo.png';
import './App.css';

function AppHeader() {
  return (
    <div id="app__header">
      <h1 id ="name">Julian Lopez</h1>
      <div id ="btn__group">
        <button onClick={function() {
          window.open("https://www.linkedin.com/in/julian-lopez-1906311b8/")
        }}>LinkedIn</button>
        <button onClick={() => {
          window.open("https://github.com/julianlopez6850")
        }}>GitHub</button>
        <button onClick={() => {
          window.open("https://devpost.com/julianlopez6850?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav")
        }}>Devpost</button>
      </div>
    </div>
  )
}

function ProjectCard(props) {

  let devpostButton;
  let githubButton;
  let playButton;

  props.devpost_link ? devpostButton = <button onClick={() => {window.open(props.devpost_link)}}>Devpost Page</button> : devpostButton = "";
  props.github_link ? githubButton = <button onClick={() => {window.open(props.github_link)}}>Github Repo</button> : githubButton = "";
  props.webgl_link ? playButton = <button onClick={() => {window.open(props.webgl_link)}}>Play It!</button> : playButton = "";
  return (

    <div className="project__card">
      <div className="project__card__header">
        <img style={{margin: "10px"}} src={props.img} width="83px"></img>
        <h3 style = {{margin: "0", marginLeft: "20px"}}>{props.name}</h3>
      </div>
      <p style={{marginTop: "10px", marginLeft: "20px", fontSize: "0.8em"}}>{props.desc}</p>
      
      {/*<p style={{marginTop: "10px", marginLeft: "20px", fontSize: "0.7em"}}>{props.devpost_link}</p>

      <div id ="card__btn__group">
      <button onClick={() => {
          window.open(props.devpost_link)
        }}>Devpost</button>
      </div>

      {/*<p style={{marginTop: "10px", marginLeft: "20px", fontSize: "0.7em"}}>{props.github_link}</p>

      <div id ="card__btn__group">
      <button onClick={() => {
          window.open(props.github_link)
        }}>Github Repo</button>
      </div>*/}
      <div id ="card__btn__group">
      {devpostButton}
      {/*</div>
      <div id ="card__btn__group">*/}
      {githubButton}
      {playButton}
      </div>
    </div>
  )
}

function AppBody() {
  return(
    <div id ="app__body">
      <div id="body__left">
      <h1 style={{marginTop: "0px"}}>Welcome to my portfolio!</h1>

        <h1 style={{marginBottom: "10px"}}>About Me</h1>
        <p>I am an aspiring software developer.
          <br />
          I am currently a student at Florida International University, pursuing a B.S. in Computer Science with a minor in Mathematical Sciences.
        </p>

        <h1 style={{marginTop: "70px"}}>Skills</h1>
        <p>'Stuff'</p>

      </div>

      <div id="body__right">
        <h1>Projects</h1>
        <ProjectCard
          img = {weblogo}
          name = "Personal Portolio Website"
          desc = "This website! It is a work in progress. It was made in 2021 using React and Node.js."
          //devpost_link = ""
          //github_link = ""
          webgl_link = ""
        />
        <ProjectCard
          img = {gamelogo}
          name = "InstaSlot"
          desc = "This is a game I created in a team of 4 for the 'GANstant Win' Challenge for ShellHacks 2021 using the Unity Game Engine and C#."
          devpost_link = "https://devpost.com/software/instaslot"
          github_link = "https://github.com/ricardocolom64/InstaSlot"
          webgl_link = "https://play.unity.com/mg/other/instaslot"
        />
        <ProjectCard
          img = {gamelogo}
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

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppBody></AppBody>
    </div>
  );
}

export default App;
