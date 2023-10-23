import logo from "./icon.svg";
import "./nav.css";
function Nav() {
	return (
		<div className="nav">
			<div className="nav-primary-title">
				<img
					className="nav-primary-title-img"
					src={logo}
					alt="react-icon"
				/>
				<div className="nav-primary-title-name">ReactFacts</div>
			</div>
			<div className="nav-extra-title">
				<p className="nav-extra-title-name">React Course - Project 1</p>
			</div>
		</div>
	);
}

export default Nav;
