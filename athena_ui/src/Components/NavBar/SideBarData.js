import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SideBarData = [
	{
		title: 'Checkout',
		path: '/checkout',
		icon: <AiIcons.AiFillHome/>,
		cName: 'nav-text'
	},
	{
		title: 'Search',
		path: '/search',
		icon: <AiIcons.AiFillHome/>,
		cName: 'nav-text'
	},
	{
		title: 'My Items',
		path: '/myitems',
		icon: <AiIcons.AiFillHome/>,
		cName: 'nav-text'
	},
	{
		title: 'My Account',
		path: '/myaccount',
		icon: <AiIcons.AiFillHome/>,
		cName: 'nav-text'
	},
	{
		title: 'Logout',
		path: '/logout',
		icon: <AiIcons.AiFillHome/>,
		cName: 'nav-text'
	}
];