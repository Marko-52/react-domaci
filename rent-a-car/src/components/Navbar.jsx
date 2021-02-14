import {Link, NavLink} from "react-router-dom";

function Navbar() {
	return (<nav>
		<div className="nav-wrapper container">
			<Link to="/cars" className="brand-logo">Rent-a-car</Link>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li><NavLink exact to="/cars/new" activeClassName={"active"}>New car</NavLink></li>
				<li><NavLink exact to="/cars" activeClassName={"active"}>Cars</NavLink></li>
				<li><NavLink exact to="/rent" activeClassName={"active"}>Rent</NavLink></li>
			</ul>
		</div>
	</nav>);
}

export default Navbar;
