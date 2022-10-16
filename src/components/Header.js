import React, { useState } from 'react'
import './Header.css';
import '../assets/blobz.min.css';
import logo from '../ressources/logo.svg';
import face_eclipse from '../ressources/face-eclipse.png';

import Socials from '../ressources/socials/Socials';

function Header() {
	const [menu, setMenu] = useState(false);

	if (menu === true) {
		document.body.classList.add('header-active');
	} else {
		document.body.classList.remove('header-active');
	}

  return (
		<>
			<div className='header'>
				<div className='container-header'>
					<div className='logo'>
						<a href='/'>
							<div className='logo-svg'>
								<img src={logo} alt="" />
							</div>
							<div className='logo-text'>
									<h1>Kamil Biczyk<span className='blue-text'>.</span></h1>
							</div>
						</a>
					</div>
					<div className='header-blob'>
						<div className="tk-blob">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 317.5 353.7">
								<path d="M291.8 55.3c30.4 39.9 30.7 102 17 160.4-13.8 58.3-41.6 112.9-84 130.9s-99.3-.6-137-30C50.2 287.1 32 246.9 17 200.5 2.1 154.1-9.6 101.4 11.5 63.6 32.6 25.8 86.6 2.8 143.8.2c57.2-2.6 117.6 15.2 148 55.1z"></path>
							</svg>
						</div>
						<div className='header-opener' onClick={() => {setMenu(!menu)}}>
							<div className="menu-toggle">
								<div className="hamburger">
									<span></span>
									<span></span>
									<span></span>
								</div>
								<div className="cross">
									<span></span>
									<span></span>
								</div>
							</div>
						</div>
					</div>
					<div className='header-nav'>
						<div className='container'>
							<div className='header-nav-centered'>
								<div className='left-nav'>
									<nav>
										<ul className='left-nav-ul'>
											<li className='left-nav-elem'><a href="/home">Accueil</a></li>
											<li className='left-nav-elem'><a href="/about">à propos</a></li>
											<li className='left-nav-elem'><a href="/portfolio">portfolio</a></li>
											<li className='left-nav-elem'><a href="/blog">blog</a></li>
											<li className='left-nav-elem'><a href="/contact">contact</a></li>
										</ul>
									</nav>
								</div>
								<div className='right-nav'>
									<div className='nav-img-box'>
										<img src={face_eclipse} alt="" />
									</div>
									<div className='nav-socials'>
										<ul className='nav-socials-ul'>
											<li className='nav-socials-li'>
												<a href="https://github.com/KamilBczk" target="_blank">
													<Socials icon="github-white" />
												</a>
											</li>
											<li className='nav-socials-li'>
												<a href="https://www.behance.net/kamilbiczyk" target="_blank">
													<Socials icon="behance-white" />
												</a>
											</li>
											<li className='nav-socials-li'>
												<a href="#" target="_blank">
													<Socials icon="twitter-white" />
												</a>
											</li>
											<li className='nav-socials-li'>
												<a href="#" target="_blank">
													<Socials icon="linkedin-white" />
												</a>
											</li>
											<li className='nav-socials-li'>
												<a href="#" target="_blank">
													<Socials icon="instagram-white" />
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div className='clear'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='header-sep'></div>
		</>
  )
}

export default Header