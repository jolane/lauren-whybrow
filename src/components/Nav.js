import React from 'react'
import styled from 'styled-components';
import Link from 'gatsby-link';



import background from '../pages/img/background.svg'


const Container = styled.nav`
	width: 400px;
	height: 100vh;
	padding: 1.5rem;
	position: fixed;
	box-sizing: border-box;
	top: 0vh;
	right: 0px;
	z-index: 1001;
	transform-origin: left top;
	transform: ${props => props.nav_open ? 'rotate(0deg)' : 'rotate(-93deg)' };
	transition: all 0.3s linear;
`;

const List = styled.ul`
	background-color: #fff;
	width: 100%;
	height: 100%;
	padding: 1.5rem;
	margin: 0;
	position: relative;
	transform-origin: right top;
	z-index: 10;
	display: flex;
	flex-direction: column;
	justify-content: center;
	
	li {
		list-style-type: none;
		font-size: 4rem;
		font-family: sans-serif;
		font-weight: bold;
		line-height: 2;

		span {
			font-family: 'GTSectraFine';
			font-size: 0.35em;
			font-weight: 600;
		}

		a {
			text-decoration: none;
			color: inherit;
		}
		a.active:before {
			content : '__';
			font-weight: 200;
		}
	}
`

const Background = styled.div`
	background-image: url(${background});
	background-size: 200px;
	background-position: -10px 0;
	position: absolute;
	transform: rotate(3deg);
	transform-origin: left top;
	width: 150%;
	height: 150%;
	top: -7%;
	left: 1%;
	z-index: 9;
	background-color: #fff;
`

const Nav = ({ nav_open, data, toggleNav }) => {
	const navItems = [
		{ title: 'About', slug: '/about/' },
		{ title: 'Editing', slug: '/editing/' },
		{ title: 'Writing', slug: '/writing/' },
		{ title: 'Contact', slug: '/contact/' }
	]
		

	return (
		<Container nav_open={nav_open}>
			<Background />
			<List>
				{navItems.map((item, index) =>
					<li key={index} onClick={(e) => toggleNav()}>
						<span>0{index + 1}.</span> <Link activeClassName="active" to={item.slug}>{item.title}</Link>
					</li>
				)}
			</List>
		</Container>
	)
}

export default Nav;