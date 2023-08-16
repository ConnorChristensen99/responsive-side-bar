import logo from "./logo.svg";
import {
	FaAsymmetrik,
	FaTimes,
	FaSearch,
	FaBorderAll,
	FaUserAlt,
	FaRocketchat,
	FaStackOverflow,
	FaFolder,
	FaShoppingCart,
	FaHeart,
	FaCog,
	FaSignInAlt,
  FaBars
} from "react-icons/fa";

import "./App.css";

function App() {
  window.addEventListener("load", (event) => {
    let close = document.getElementById('closeSide')
    let open = document.getElementById('closeSideSmall')
    close.addEventListener('click', () => {
    
      let bigNav = document.getElementById('sideBarContainer')
      let smallNav = document.getElementById('sideBarContainerContainer')

      if (smallNav.classList.contains('invisible')) {
        bigNav.classList.add('invisible')
        smallNav.classList.remove('invisible')
      }  
  })
  open.addEventListener('click', () => {
    let bigNav = document.getElementById('sideBarContainer')
      let smallNav = document.getElementById('sideBarContainerContainer')

    if (bigNav.classList.contains('invisible')) {
      bigNav.classList.remove('invisible')
      smallNav.classList.add('invisible')
    }  
})

  });
  




	return (
		<div className="App">
			<header className="App-header">
				<h2>My Cool Responsive Side Bar</h2>
				<img src={logo} className="App-logo" alt="logo" />
			</header>
      {/* BIG NAV */}
			<div className="sideBarContainer" id='sideBarContainer'>
				<div className="sideBarHeader">
					<span>
						<FaAsymmetrik className="headerIcon" />
						CodingLab
					</span>
					<FaTimes className="closeSideBar" id='closeSide'/>
				</div>
				<div className="sideBarSearch">
					<FaSearch className="sideBarSearchIcon" />
					<input type="text" placeholder="Search..." />
				</div>
				<nav classnmae="sideBar">
					<ul className="navList">
						<li>
							<span>
								<FaBorderAll />
							</span>
							Dahsboard
						</li>
						<li>
							<span>
								<FaUserAlt />
							</span>
							User
						</li>
						<li>
							<span>
								<FaRocketchat />
							</span>
							Messages
						</li>
						<li>
							<span>
								<FaStackOverflow />
							</span>
							Analytics
						</li>
						<li>
							<span>
								<FaFolder />
							</span>
							File Manager
						</li>
						<li>
							<span>
								<FaShoppingCart />
							</span>
							Order
						</li>
						<li>
							<span>
								<FaHeart />
							</span>
							Saved
						</li>
						<li>
							<span>
								<FaCog />
							</span>
							Setting
						</li>
					</ul>
				</nav>
				<div className="sideBarBottom">
					<div className="profileImage"></div>
					<div className="infoProfile">
						<p>Connor Christensen</p>
						<p className="sideBarBottomP">Web Developer/Designer</p>
					</div>
					<FaSignInAlt className="signOut" />
				</div>
			</div>

      {/* SMALL NAV */}
      <div className='invisible' id='sideBarContainerContainer' title='Menu'>
      <div className="sideBarContainer smallContainer" id='sideBarContainer'>
				<div className="sideBarHeaderSmall">
        <div className="searchBack"><FaBars className="closeSideBarSmall" id='closeSideSmall'/></div>
				</div>
				<div className="sideBarSearch" title='Search' >
					<div className="searchBack"><FaSearch className="smallSearch" /></div>
				</div>
				<nav className="sideBarSmall">
					<ul className="navListSmall">
						<li>
							<span title='dashboard'>
								<FaBorderAll />
							</span>
						</li>
						<li>
							<span title='User'>
								<FaUserAlt />
							</span>
						</li>
						<li>
							<span title='Messages'>
								<FaRocketchat />
							</span>
						</li>
						<li>
							<span title='Analytics'>
								<FaStackOverflow />
							</span>
						</li>
						<li>
							<span title='File Manager'>
								<FaFolder />
							</span>
						</li>
						<li>
							<span title='Order'>
								<FaShoppingCart />
							</span>
						</li>
						<li>
							<span title='Saved'>
								<FaHeart />
							</span>
						</li>
						<li>
							<span title='Settings'>
								<FaCog />
							</span>
						</li>
					</ul>
				</nav>
				<div className="sideBarBottom">
					<FaSignInAlt className="signOutSmall" />
				</div>
			</div>
      </div>
		</div>
	);
}

export default App;
