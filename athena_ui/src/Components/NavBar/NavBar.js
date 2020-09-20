import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SideBarData} from './SideBarData';
import './NavBar.css';

function NavBar(){

	return(
		<>
			<nav className = 'nav-menu'>
				<ul className = 'nave-menu-items'>
					{SideBarData.map((item, index)=>{
						return(
							<li key={index} className={item.cName}>
								<Link to = {item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</>
	);
};

export default NavBar;

