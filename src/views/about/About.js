import Header from '../../components/Header';
import './About.css';
import spec_pc from '../../ressources/about/3d/pc.png';
import spec_art from '../../ressources/about/3d/art.png';
import spec_cible from '../../ressources/about/3d/cible.png';

import tech_css from '../../ressources/about/tech/css.svg';
import tech_js from '../../ressources/about/tech/js.svg';
import tech_react from '../../ressources/about/tech/react.svg';
import tech_sass from '../../ressources/about/tech/sass.svg';
import tech_html from '../../ressources/about/tech/html.svg';
import tech_php from '../../ressources/about/tech/php.svg';
import tech_git from '../../ressources/about/tech/git.svg';
import tech_illustrator from '../../ressources/about/tech/illustrator.svg';
import tech_photoshop from '../../ressources/about/tech/photoshop.svg';
import tech_figma from '../../ressources/about/tech/figma.svg';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';



function About() {
  return (
    <div className='about-container'>
			<Helmet>
				<title>Kamil Biczyk | À Propos</title>
			</Helmet>
      <Header />
      <div className='about-spec-wrapper wrapper'>
        <div className='container'>
          <h2 className='title-m'>Spécialisations<span className='blue-text'>.</span></h2>
					<div className='about-spec-grid'>
						<div className='about-spec-elem'>
							<div className='about-spec-img'>
								<img src={spec_pc} alt="" />
							</div>
							<div className='about-spec-text'>
								<h2>Développemement</h2>
							</div>
						</div>
						<div className='about-spec-elem'>
						<div className='about-spec-img'>
								<img src={spec_art} alt="" />
							</div>
							<div className='about-spec-text'>
								<h2>UI UX Design</h2>
							</div>
						</div>
						<div className='about-spec-elem'>
						<div className='about-spec-img'>
								<img src={spec_cible} alt="" />
							</div>
							<div className='about-spec-text'>
								<h2>SEO</h2>
							</div>
						</div>
					</div>
        </div>
      </div>
			<div className='about-tech wrapper'>
				<div className='container'>
					<div className='about-tech-wrapper'>
          	<h2 className='title-m'>Mes technologies<span className='blue-text'>.</span></h2>
						<div className='about-tech-grid'>
							<div className='about-tech-grid-elem'>
								<div className='tech-icon'>
									<img height={71} width={71} src={tech_css} alt="" />
								</div>
								<div className='tech-text'>
									<p className='p-m'>CSS 3</p>
								</div>
							</div>
							<div className='about-tech-grid-elem'>
								<div className='tech-icon'>
									<img height={71} width={71} src={tech_js} alt="" />
								</div>
								<div className='tech-text'>
									<p className='p-m'>Javascript</p>
								</div>
							</div>
							<div className='about-tech-grid-elem'>
								<div className='tech-icon'>
									<img height={71} width={71} src={tech_react} alt="" />
								</div>
								<div className='tech-text'>
									<p className='p-m'>React</p>
								</div>
							</div>
							<div className='about-tech-grid-elem'>
								<div className='tech-icon'>
									<img height={71} width={71} src={tech_sass} alt="" />
								</div>
								<div className='tech-text'>
									<p className='p-m'>Sass</p>
								</div>
							</div>
							<div className='about-tech-grid-elem'>
								<div className='tech-icon'>
									<img height={71} width={71} src={tech_html} alt="" />
								</div>
								<div className='tech-text'>
									<p className='p-m'>HTML 5</p>
								</div>
							</div>
							<div className='about-tech-grid-elem'>
								<div className='tech-icon'>
									<img height={71} width={71} src={tech_php} alt="" />
								</div>
								<div className='tech-text'>
									<p className='p-m'>PHP</p>
								</div>
							</div>
							<div className='about-tech-grid-elem'>
								<div className='tech-icon'>
									<img height={71} width={71} src={tech_git} alt="" />
								</div>
								<div className='tech-text'>
									<p className='p-m'>Git</p>
								</div>
							</div>
						</div>
						<div className='tech-sep'></div>
						<div className='about-tech-grid'>
							<div className='about-tech-grid-elem'>
								<div className='tech-icon'>
									<img height={71} width={71} src={tech_photoshop} alt="" />
								</div>
								<div className='tech-text'>
									<p className='p-m'>Adobe Phostoshop</p>
								</div>
							</div>
							<div className='about-tech-grid-elem'>
								<div className='tech-icon'>
									<img height={71} width={71} src={tech_illustrator} alt="" />
								</div>
								<div className='tech-text'>
									<p className='p-m'>Adobe Illustrator</p>
								</div>
							</div>
							<div className='about-tech-grid-elem'>
								<div className='tech-icon'>
									<img height={71} width={71} src={tech_figma} alt="" />
								</div>
								<div className='tech-text'>
									<p className='p-m'>Figma</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='about-me-wrapper wrapper'>
				<div className='container'>
					<h2 className='title-m'>Mon parcour<span className='blue-text'>.</span></h2>
					<h3 className='title-s'>❤️ Une passion</h3>
					<div className='text-box'>
						<p className='p-m'>Le développement m'a paru être une évidence lorsque j'étais jeune. Mon histoire avec celui-ci a commencé par la création d'un site web très simple pour un ami. Malgré la simplicité de sa demande, je me suis confronté à un monde sans fin. J'ai appris les langages basiques pour réussir ma mission. Avec le temps, j'ai eu l'occasion de me perfectionner dans le domaine du développement front-end. Au-delà du développement, j'ai une passion pour l'UI/UX design. Ce monde infini ne cessera de m'impressionner.</p>
					</div>
					<h3 className='title-s'>🔍 Mes premiers clients</h3>
					<div className='text-box'>
						<p className='p-m'>La recherche de mes premiers clients fut un calvaire. J'ai eu beaucoup de mal à mettre en confiance les prospects sans avoir de réalisations à mon actif. Après avoir enfin réussi à convaincre le premier, mon but était de le satisfaire au maximum quitte à effectuer des tâches qui n'étaient pas spécifiées à la base. C'est pourquoi après ce premier projet réalisé j'étais dans une pente ascendante. Les clients me contactaient par le parrainage de ce dernier. Aujourd'hui, le bouche-à-oreille fait son effet.</p>
					</div>
					<h3 className='title-s'>🖥️ École 42</h3>
					<div className='text-box'>
						<p className='p-m'>Mon aventure à l'école 42, a débuté le <i>02 août 2021</i>, le premier jour de ma piscine. Entre dépassement de soi, programmation et très belles rencontres, j'y ai découvert un petit monde parallèle très passionnant. C'est une école privée de développement qui est connue pour sa très bonne réputation et sa complexité. On y apprend surtout comment fonctionne la programmation en profondeur. Pas de classe, pas de profs : à 42, ce sont les codeurs eux‐mêmes qui sont en charge de leur évolution et de celle de leurs camarades, autour d’une méthode 100% pratique.</p>
					</div>
					<h3 className='title-s'>👨🏻‍💻️ Entrée dans le monde profesionnel</h3>
					<div className='text-box'>
						<p className='p-m'>Comme expliqué précédemment, j'ai toujours été actif professionnellement. J'aimerais passer de la création de petits projets pour des PME vers des projets de plus grande envergure, cela afin de découvrir comment fonctionnent des infrastructures, comment s'organiser en équipe,... J'aimerais apprendre des compétences des autres et avec le temps de former les nouvelles recrues. Je suis quelqu'un d'autodidacte et qui apprend vite, mais je sais qu'on apprend toujours plus vite à plusieurs.</p>
					</div>
				</div>
			</div>
			<Footer />
    </div>
  )
}

export default About