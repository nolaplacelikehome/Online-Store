import React from 'react';
import '../css/Navbar.css';
import { desktopNavItems } from './desktopNavItems';

export default function Navbar() {
	return (
		<div className='nav-container'>
			<div className='nav-brand'>Buy and Sell</div>
			<ul className='nav-list'>
				{desktopNavItems.map(item =>
					<li className='list-item' key={item.id}><a href={item.path}>{item.name}</a></li>
				)}
			</ul>
		</div>
	);
}