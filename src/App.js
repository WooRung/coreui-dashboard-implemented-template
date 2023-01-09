import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
	// const count = useSelector(state => state.ui);
	// const dispatch = useDispatch();
	// console.log(count);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn Reactadsfsa,jfsdkj
				</a>
			</header>
		</div>
	);
}

export default App;
