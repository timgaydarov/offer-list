import "./App.css";
import Listing from "./components/Listing";

export default function App(props) {
	return (
		<div className="App">
			<Listing items={props.items} />
		</div>
	);
}


