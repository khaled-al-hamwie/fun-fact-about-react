import logo from "./backgorund-image.svg";
import List from "./list";
import "./main.css";
import Title from "./title";

function Main() {
	return (
		<div className="main">
			<Title />
			<List />
			<img
				className="main-background-image"
				src={logo}
				alt="backgorund"
			/>
		</div>
	);
}
export default Main;
