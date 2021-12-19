



function Footer() {
    return(
        <div id="app__footer">
            <h1 id ="name"><br/></h1>
            <div id ="footer_btn__group">
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

export default Footer