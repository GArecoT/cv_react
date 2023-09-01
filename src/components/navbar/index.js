import './navbar.css'
import { Link } from "react-router-dom";
export default function Navbar() {
	return (
		<div className="navbar bg-base-100 lg:bg-base-200 z-10 sticky">
			<div className="navbar-start">
			</div>
			<div className="navbar-center hidden lg:flex  ">
				<li className="btn btn-ghost"><Link to='/'>Início</Link></li>
				<li className="btn btn-ghost"><Link to='/sobre'>Portfolio</Link></li>
			</div>
			<div className="navbar-end">
			</div>
		</div>
	)
}
