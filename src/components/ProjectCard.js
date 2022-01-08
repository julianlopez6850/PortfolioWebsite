

function ProjectCard(props) {

    let devpostButton;
    let githubButton;
    let playButton;
  
    props.devpost_link ? devpostButton = <button onClick={() => {window.open(props.devpost_link)}}>Devpost Page</button> : devpostButton = "";
    props.github_link ? githubButton = <button onClick={() => {window.open(props.github_link)}}>Github Repo</button> : githubButton = "";
    props.webgl_link ? playButton = <button onClick={() => {window.open(props.webgl_link)}}>Play It!</button> : playButton = "";
  
    if(props.img2 != "null")
    {
      if(props.devpost_link == "" || props.github_link == "" || props.webgl_link == "")
      {
        return(
          <div className="project__card">
          <div id ="project__card__body">
            <div id="project__card__left">
              <div className="project__card__header">
                <img style={{margin: "10px"}} src={props.img} width="83px"></img>
                <h3 style = {{margin: "0", marginLeft: "20px"}}>{props.name}</h3>
              </div>
              
              <p style={{marginTop: "10px", marginLeft: "20px", fontSize: "0.8em"}}>{props.desc}</p>
              <div id ="project__card__btnp">
                {devpostButton}
                {githubButton}
                {playButton}
              </div>
            </div>
            <div id="project__card__right">
              <img style={{margin: "10px"}} src={props.img2} width="400px"></img>
              
            </div>
          </div>
        </div>
        )
      }
      return (
        <div className="project__card">
          <div id ="project__card__body">
            <div id="project__card__left">
              <div className="project__card__header">
                <img style={{margin: "10px"}} src={props.img} width="83px"></img>
                <h3 style = {{margin: "0", marginLeft: "20px"}}>{props.name}</h3>
              </div>
              
              <p style={{marginTop: "10px", marginLeft: "20px", fontSize: "0.8em"}}>{props.desc}</p>
              
              
            </div>
            <div id="project__card__right">
              <img style={{margin: "10px"}} src={props.img2} width="400px"></img>
            </div>
          </div>
          
          <div id ="project__card__btn">
                {devpostButton}
                {githubButton}
                {playButton}
          </div>
        </div>
      )
    }
      
    return (
      <div className="project__card">
        <div className="project__card__header">
          <img style={{margin: "10px"}} src={props.img} width="83px"></img>
          <h3 style = {{margin: "0", marginLeft: "20px"}}>{props.name}</h3>
        </div>
  
        <p style={{marginTop: "10px", marginLeft: "20px", fontSize: "0.8em"}}>{props.desc}</p>
        
        <div id ="project__card__btn">
          {devpostButton}
          {githubButton}
          {playButton}
        </div>
      </div>
    )
  }

  export default ProjectCard