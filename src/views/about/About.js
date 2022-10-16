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



function About() {
  return (
    <div className='about-container'>
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
									<img src={tech_css} alt="" />
								</div>
								<div className='tech-text'>
									<p className='p-m'>CSS 3</p>
								</div>
							</div>
							<div className='about-tech-grid-elem'>
								<div className='tech-icon'>
									<img src={tech_js} alt="" />
								</div>
								<div className='tech-text'>
									<p className='p-m'>Javascript</p>
								</div>
							</div>
							<div className='about-tech-grid-elem'>
								<div className='tech-icon'>
									<img src={tech_react} alt="" />
								</div>
								<div className='tech-text'>
									<p className='p-m'>React</p>
								</div>
							</div>
							<div className='about-tech-grid-elem'>
								<div className='tech-icon'>
									<img src={tech_sass} alt="" />
								</div>
								<div className='tech-text'>
									<p className='p-m'>Sass</p>
								</div>
							</div>
							<div className='about-tech-grid-elem'>
								<div className='tech-icon'>
									<img src={tech_html} alt="" />
								</div>
								<div className='tech-text'>
									<p className='p-m'>HTML 5</p>
								</div>
							</div>
							<div className='about-tech-grid-elem'>
								<div className='tech-icon'>
									<img src={tech_php} alt="" />
								</div>
								<div className='tech-text'>
									<p className='p-m'>PHP</p>
								</div>
							</div>
							<div className='about-tech-grid-elem'>
								<div className='tech-icon'>
									<img src={tech_git} alt="" />
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
									<img src={tech_photoshop} alt="" />
								</div>
								<div className='tech-text'>
									<p className='p-m'>Adobe Phostoshop</p>
								</div>
							</div>
							<div className='about-tech-grid-elem'>
								<div className='tech-icon'>
									<img src={tech_illustrator} alt="" />
								</div>
								<div className='tech-text'>
									<p className='p-m'>Adobe Illustrator</p>
								</div>
							</div>
							<div className='about-tech-grid-elem'>
								<div className='tech-icon'>
									<img src={tech_figma} alt="" />
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
						<p className='p-m'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis congue neque. Phasellus non efficitur mi. Donec dolor enim, scelerisque sit amet facilisis vitae, tristique at nisl. Donec cursus risus et urna egestas laoreet at quis felis. Aenean in sem ac ante ornare dapibus ut vitae elit. Sed ornare felis ut ex rutrum gravida. Etiam mattis at lacus non congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam ante dolor, tempus mollis porta ac, molestie at velit.</p>
					</div>
					<h3 className='title-s'>🔍 Mes premiers clients</h3>
					<div className='text-box'>
						<p className='p-m'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis congue neque. Phasellus non efficitur mi. Donec dolor enim, scelerisque sit amet facilisis vitae, tristique at nisl. Donec cursus risus et urna egestas laoreet at quis felis. Aenean in sem ac ante ornare dapibus ut vitae elit. Sed ornare felis ut ex rutrum gravida. Etiam mattis at lacus non congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam ante dolor, tempus mollis porta ac, molestie at velit.</p>
					</div>
					<h3 className='title-s'>🖥️ École 42</h3>
					<div className='text-box'>
						<p className='p-m'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis congue neque. Phasellus non efficitur mi. Donec dolor enim, scelerisque sit amet facilisis vitae, tristique at nisl. Donec cursus risus et urna egestas laoreet at quis felis. Aenean in sem ac ante ornare dapibus ut vitae elit. Sed ornare felis ut ex rutrum gravida. Etiam mattis at lacus non congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam ante dolor, tempus mollis porta ac, molestie at velit.</p>
					</div>
					<h3 className='title-s'>👨🏻‍💻️ Entrée dans le monde profesionnel</h3>
					<div className='text-box'>
						<p className='p-m'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis congue neque. Phasellus non efficitur mi. Donec dolor enim, scelerisque sit amet facilisis vitae, tristique at nisl. Donec cursus risus et urna egestas laoreet at quis felis. Aenean in sem ac ante ornare dapibus ut vitae elit. Sed ornare felis ut ex rutrum gravida. Etiam mattis at lacus non congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam ante dolor, tempus mollis porta ac, molestie at velit.</p>
					</div>
				</div>
			</div>
			<Footer />
    </div>
  )
}

export default About