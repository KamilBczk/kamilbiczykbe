import React from 'react'
import { Helmet } from 'react-helmet'

function TmfCompta() {
  return (
    <div className='tmf'>
      <Helmet>
        <title>Kamil Biczyk | TMF Compta</title>
      </Helmet>
      <div className='wrapper'>
        <div className='container'>
          <h2 className='title-m'>TMF Compta<span className='blue-text'>.</span></h2>
          <div className='text-box'>
            <p className='p-m'>TMF Compta est un cabinet comptable situé sur Zaventem qui compte une dizaine d'employé. La mission était de moderniser les moyens de communication de ce dernier. Notament en passant par la création d'un site web qui rajeunit l'image de la marque.</p>
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='container'>
          <h2 className='title-m'>Le site web<span className='blue-text'>.</span></h2>
          <div className='text-box'>
            <p className='p-m'>Comme dit précédemment, l'objectif principal était de moderniser l'image de la marque. C'est pourquoi j'ai opté pour un design qui est dans les tendances de 2023. Quelque chose d'épuré et très intuitif. L'UI/UX a été un vrais challenge en tenant compte des différentes requêtes du client. Tout au long du projet nous n'avons pas perdu l'objectif principal de vue. Je vous laisse en juger en jetant un coup d'œil sur le site.</p>
          </div>
          <div className='btn-box'>
            <div className='btn-blue'>
                <a href="https://tmfcompta.be/" target="_blank" rel='noreferrer'>Lien</a>
            </div>
          </div>
          <div className='figma-100-box'>
            <iframe title='bild' width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FuboxbZyVk6i1bFtT1HwnZQ%2FWebsite%3Ftype%3Ddesign%26node-id%3D15%253A175%26mode%3Ddesign%26t%3DgvviB9H0pqiTEUeX-1" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='container'>
          <h2 className='title-m'>L'infrastucture<span className='blue-text'>.</span></h2>
          <div className='text-box'>
            <p className='p-m'>L'infra n'était pas du tout en place quand j'ai commencé ce projet. Pour être transparent, il n'y en avait pas du tout. On a mis en place un serveur VPS pour y héberger le site web en utilisant Nginx et d'autres petit scripts que la société utilisait. Un point a été crucial, lors du transfère du nom de domaine vers ma société d'hébergement partenaire : ne pas causer d'interuption des boîtes mails lors de cette fin d'année comptable (dépôts de bilans). Le service de mail qu'utilise TMF Compta est Google Workspace. Mais cela a été sans accros en causant une interuption de deux minutes à 3h42 un samedi.</p>
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='container'>
          <h2 className='title-m text-center'>Vous avez apprecié<span className='blue-text'> ?</span></h2>
          <div className='m-t-50'>
            <div className='btn-blue m-t-paragraph'>
              <div className='btn-center'>
                <a href="/project/bild-construct-srl">Projet suivant</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TmfCompta