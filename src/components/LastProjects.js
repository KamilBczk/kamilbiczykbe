import React from 'react'

import recre_logo from '../ressources/projects/recre-a-tifs/logo.svg';
import artenadev_logo from '../ressources/projects/artena-dev/logo.svg';
import bild_logo from '../ressources/projects/bild-construct/logo.svg';
import greedy_glide from '../ressources/projects/greedy-glide/logo.svg';

import bild_l_p from '../ressources/projects/bild-construct/l-p.png';
import recre_l_p from '../ressources/projects/recre-a-tifs/l-p.png';
import artenadev_l_p from '../ressources/projects/artena-dev/l-p.png';
import greedyglide_l_p from '../ressources/projects/greedy-glide/l-p.png';


function LastProjects() {
  return (
    <div className='third-home-wrapper wrapper'>
			<div className='container'>
				<h2 className='title-m'>Mes derniers projets<span className='blue-text'>.</span></h2>
				<div className='last-projects'>
					<div className='l-projects-elem l-project-left'>
						<div className='l-p-image-box'>
							<img src={bild_l_p} alt="" />
							<div className='l-p-image-shadow'></div>
						</div>
						<div className='l-p-text-box'>
							<div className='text-box-all'>
								<div className='company-logo'>
									<img src={bild_logo} alt="" />
								</div>
								<p className='p-m'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis congue neque. Phasellus non efficitur mi. Donec dolor enim, scelerisque sit amet facilisis vitae, tristique at nisl. Donec cursus risus et urna egestas laoreet at quis felis. Aenean in sem ac ante ornare dapibus ut vitae elit. Sed ornare felis ut ex rutrum gravida. Etiam mattis at lacus non congue. Class</p>
								<div className='btn-box'>
									<div className='btn-blue'>
										<div className='btn-center'>
											<a href="/project/bild-construct-srl">Découvrez le projet</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='l-projects-elem l-project-right'>
						<div className='l-p-image-box'>
							<img src={recre_l_p} alt="" />
							<div className='l-p-image-shadow'></div>
						</div>
						<div className='l-p-text-box'>
							<div className='text-box-all'>
								<div className='company-logo'>
									<img src={recre_logo} alt="" />
								</div>
								<p className='p-m'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis congue neque. Phasellus non efficitur mi. Donec dolor enim, scelerisque sit amet facilisis vitae, tristique at nisl. Donec cursus risus et urna egestas laoreet at quis felis. Aenean in sem ac ante ornare dapibus ut vitae elit. Sed ornare felis ut ex rutrum gravida. Etiam mattis at lacus non congue. Class</p>
								<div className='btn-box'>
									<div className='btn-blue'>
										<div className='btn-center'>
											<a href="/project/recre-a-tifs">Découvrez le projet</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='l-projects-elem l-project-left'>
						<div className='l-p-image-box'>
							<img src={greedyglide_l_p} alt="" />
							<div className='l-p-image-shadow'></div>
						</div>
						<div className='l-p-text-box'>
							<div className='text-box-all'>
								<div className='company-logo'>
									<img src={greedy_glide} alt="" />
								</div>
								<p className='p-m'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis congue neque. Phasellus non efficitur mi. Donec dolor enim, scelerisque sit amet facilisis vitae, tristique at nisl. Donec cursus risus et urna egestas laoreet at quis felis. Aenean in sem ac ante ornare dapibus ut vitae elit. Sed ornare felis ut ex rutrum gravida. Etiam mattis at lacus non congue. Class</p>
								<div className='btn-box'>
									<div className='btn-blue'>
										<div className='btn-center'>
											<a href="/project/greedy-glide">Découvrez le projet</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default LastProjects