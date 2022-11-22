import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Portfolio.css';
import LastProjects from '../../components/LastProjects';
import { Helmet } from 'react-helmet';

import Socials from '../../ressources/socials/Socials';

function Portfolio() {
  return (
    <div className='portfolio'>
      <Helmet>
        <title>Kamil Biczyk | Portfolio</title>
      </Helmet>
			<Header />
			<LastProjects />
      <div className='wrapper'>
        <div className='container'>
					<h2 className='title-m'>Tous mes projets<span className='blue-text'>.</span></h2>
          <div className='project-grid'>
            <div className='project-grid-elem project-grid-title'>
              <p className='p-m'>#</p>
              <p className='p-m'>Projet</p>
              <p className='p-m'>Catégorie</p>
            </div>
            <div className='project-grid-elem'>
              <p className='p-m'>01</p>
              <p className='p-m'>Vasi Construct</p>
              <p className='p-m'>Brand identity</p>
              <div className='p-grid-elem-btn'>
                <ul>
                  <li><a target="_blank" href="https://www.behance.net/gallery/153481517/Brand-identity-Vasi-Construct" rel='noreferrer'><Socials icon="behance-blue" width="40" height="40" /></a></li>
                </ul>
              </div>
            </div>
            <div className='project-grid-elem'>
              <p className='p-m'>02</p>
              <p className='p-m'>Hookah Belgium</p>
              <p className='p-m'>Brand identity</p>
              <div className='p-grid-elem-btn'>
                <ul>
                  <li><a target="_blank" href="https://www.behance.net/gallery/153417553/Brand-Identity-Hookah-Belgium" rel='noreferrer'><Socials icon="behance-blue" width="40" height="40" /></a></li>
                </ul>
              </div>
            </div>
            <div className='project-grid-elem'>
              <p className='p-m'>03</p>
              <p className='p-m'>Greedy Glide</p>
              <p className='p-m'>Product design</p>
              <div className='p-grid-elem-btn'>
                <ul>
                  <li><a target="_blank" href="https://www.behance.net/gallery/153423081/Product-design-Greedy-Glide" rel='noreferrer'><Socials icon="behance-blue" width="40" height="40" /></a></li>
                  <li><a href="/project/greedy-glide"><Socials icon="arrow-blue" width="40" height="40" /></a></li>
                </ul>
              </div>
            </div>
            <div className='project-grid-elem'>
              <p className='p-m'>04</p>
              <p className='p-m'>Récré à tifs</p>
              <p className='p-m'>Brand identity</p>
              <div className='p-grid-elem-btn'>
                <ul>
                  <li><a target="_blank" href="https://www.behance.net/gallery/153560847/Brand-identity-Hairdresser-Rcr-a-tifs" rel='noreferrer'><Socials icon="behance-blue" width="40" height="40" /></a></li>
                  <li><a href="/project/recre-a-tifs"><Socials icon="arrow-blue" width="40" height="40" /></a></li>
                </ul>
              </div>
            </div>
            <div className='project-grid-elem'>
              <p className='p-m'>05</p>
              <p className='p-m'>Bild Construct</p>
              <p className='p-m'>Brand identity & Website</p>
              <div className='p-grid-elem-btn'>
                <ul>
                  <li><a target="_blank" href="https://www.behance.net/gallery/153311423/Website-Bild-Construct" rel='noreferrer'><Socials icon="behance-blue" width="40" height="40" /></a></li>
                  <li><a href="/project/bild-construct-srl"><Socials icon="arrow-blue" width="40" height="40" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio