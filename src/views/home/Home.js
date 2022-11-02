import Header from '../../components/Header';
import LastProjects from '../../components/LastProjects';

import './Home.css';
import face_eclipse from '../../ressources/face-eclipse.png';
import Footer from '../../components/Footer';

function App() {
  return (
    <div className="home-container">
      <Header />
      <div className='first-home-wrapper'>
        <div className='container'>
          <div className='home-wrapper'>
            <div className='big-home-text'>
              <h1 className='big-title-xl'>Kamil Biczyk<span className='blue-text'>.</span></h1>
              <h2 className='big-title-m blue-text'>frontend dev</h2>
            </div>
            <div className='big-home-photo'>
              <img src={face_eclipse} alt=''></img>  
            </div>
            <div className='clear'></div>
          </div>
        </div>
      </div>
      <div className='second-home-wrapper wrapper'>
        <div className='container'>
          <h2 className='title-m'>Enchanté<span className='blue-text'>.</span></h2>
          <div className='text-box'>
            <p className='p-m'>Développeur front passionné depuis mon plus jeune âge. Durant mon parcours j’ai été amené à travailler avec des clients ce qui m’a aidé à améliorer ma capacité d’adaptation. Ayant toujours voulu travailler dans ce domaine, je suis allé à 42 en pensant que cela m’aiderait dans ma recherche d’emploi. Entre dépassement de soi, de programmation et de très belles rencontres, j'ai découvert un petit monde parallèle très passionnant. Je faisais en complément de cela des études de marketing, car mon rêve est de fonder une agence digitale et marketing.</p>
          </div>
          <div className='btn-blue m-t-paragraph'>
            <a href="/about">Plus sur moi</a>
          </div>
        </div>
      </div>
      <LastProjects />
      <div className='wrapper'>
        <div className='container'>
          <h2 className='title-m'>Mon 'journal intime'<span className='blue-text'>.</span></h2>
          <div className='text-box'>
            <p className='p-m'>Depuis des années j'adore créer ou transmettre des choses qui peuvent aider la communauté. C'est à 42 que j'ai appris la nécessité de l'entraide, au vu du fait que les problèmes étaient extrêmement complexes et les solutions innexistantes. Travailler en collaboration était un des pilier. Quand j'ai été admis à 42 j'ai su qu'un de mes amis n'as pas été admis et qu'il voulait poursuivre avec le développement web à Becode, sachat que j'avais déjà des connaissances sur ce sujet je l'ai pris sous mon épaule pour le début de son parcour. Je l'aidais à se surpasser, à résoudre des problèmes complexes, et beaucoup d'autres choses. Aujourd'hui il cherche du travail en tant que consultant salesforce.</p>
          </div>
          <div className='btn-blue m-t-paragraph'>
            <a href="/blog">Soif de connaissances?</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
