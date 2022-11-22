import React from 'react'

import recre_logo from '../ressources/projects/recre-a-tifs/logo.svg';
import bild_logo from '../ressources/projects/bild-construct/logo.svg';
import greedy_glide from '../ressources/projects/greedy-glide/logo.svg';

import bild_l_p from '../ressources/projects/bild-construct/l-p.png';
import recre_l_p from '../ressources/projects/recre-a-tifs/l-p.png';
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
								<p className='p-m'>Bild construct est mon premier client. Celui-ci m'a trouvé pour concevoir son site web. Au fur et à mesure du temps, nous sommes rentrés dans une collaboration plus long-termiste. <br/>Découvrez la création du site web, des cartes de visite, du merch et du van design ci-dessous.</p>
								<div className='btn-box'>
									<div className='btn-blue'>
										<div className='btn-center'>
											<a href="/project/bild-construct-srl">Découvrir le projet</a>
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
								<p className='p-m'>Ce client m'a contacté pour la création de cartes de visite. J'ai été très heureux de cette proposition, car je suis d'une grande admiration du monde de la coiffure. Le client avait déjà en avait déjà une très simpliste, c'est pourquoi j'ai conseillé de moderniser le design et de faire une carte recto verso.</p>
								<div className='btn-box'>
									<div className='btn-blue'>
										<div className='btn-center'>
											<a href="/project/recre-a-tifs">Découvrir le projet</a>
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
								<p className='p-m'>Greedy Glide est un projet créé lors de mon BAC 1 en marketing. Au début, notre équipe désirait que nous finissions premiers de notre promotion, mais au fil du temps nous nous sommes rendu compte que celui-ci trouve son public lors des analyses micro-économiques. En clair, plus le temps passait, plus le projet paraissait sérieux, au point d'envisager de créer la start-up. Découvrez toutes les analyses, designs, et conception. </p>
								<div className='btn-box'>
									<div className='btn-blue'>
										<div className='btn-center'>
											<a href="/project/greedy-glide">Découvrir le projet</a>
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