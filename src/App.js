import "./App.css";
import Nav from "./components/nav";
import Events from "./components/events";
import Greeting from "./components/greeting";
import Upcoming from "./components/upcoming";
import Regevents from "./components/regevents";
import Footer from "./components/footer";

function App() {
	return (
		<div>
			<Nav />
			<Events />
			<Greeting />
			<Upcoming />
			<Regevents />
			<Footer />
		</div>
	);
}

export default App;
