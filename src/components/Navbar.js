



function Navbar() {
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

export default Navbar