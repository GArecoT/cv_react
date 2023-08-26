import './navbar.css'
export default function Navbar() {
	return (
		<div className="navbar bg-base-100 lg:bg-base-200 z-10 sticky">
			<h1 className="ml-5 font-sans font-semibold text-primary text-lg hidden lg:flex">Curriculo</h1>
			<div className="navbar-start">
			</div>
			<div className="navbar-center hidden lg:flex  ">
				<h1 className="ml-5 font-sans font-semibold text-primary text-lg lg:hidden">Curriculo</h1>
				<li className="btn btn-ghost"><a>Home</a></li>
				<li className="btn btn-ghost"><a>Portfolio</a></li>
				<li className="btn btn-ghost"><a>About</a></li>
			</div>
			<div className="navbar-end">
			</div>
		</div>
	)
}
