import './App.css';

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

import AppBody from './pages/Home.js';

import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
		<div id="app__background">
			<div className="App">
				
				<Router>
					<Navbar>
						<Routes>
							<Route path="/" exact component />
						</Routes>
					</Navbar>
				</Router>

				
				<AppBody/>
				<Footer/>
			</div>
		</div>
  );
}

export default App;
