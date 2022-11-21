import React from 'react'

import old_buisness_card from '../../ressources/projects/recre-a-tifs/old-buisness-card.png'

function RecreATifs() {
  return (
    <div className='recre'>
      <div className='wrapper'>
        <div className='container'>
          <h2 className='title-m'>Récré à tifs<span className='blue-text'>.</span></h2>
          <div className='text-box'>
            <p className='p-m'>Ce client m'a contacté pour la création de cartes de visite. J'ai été très heureux de cette proposition, car je suis d'une grande admiration du monde de la coiffure. Le client avait déjà en avait déjà une très simpliste, c'est pourquoi j'ai conseillé de moderniser le design et de faire une carte recto verso.</p>
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='container'>
          <h2 className='title-m'>L'ancien design<span className='blue-text'>.</span></h2>
          <div className='text-box'>
            <p className='p-m'>Comme dit précédemment, le design n'était que recto. Je trouve vraiment dommage de ne pas profiter de tout l'espace qui se trouve à l'arrière. J'ai fortement accroché à la couleur de la carte, le rose très doux était en accord avec la cible de ce salon. La gérante à pris la décision de faire une devanture de couleur noire (qui signifie le luxe en marketing), en discutant avec elle j'ai eu l'occasion de lui exposer mes idées et nous nous sommes rendu compte que cela n'était pas en accord avec la tranche de prix ou se situait le salon (le milieu de gamme).</p>
          </div>
          <div className='img-box-60'>
            <img src={old_buisness_card} alt="" />
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='container'>
          <h2 className='title-m'>Deux concepts<span className='blue-text'>.</span></h2>
          <div className='text-box'>
            <p className='p-m'>La cliente voulait que je vectorise l'ancienne carte et que je la commande auprès de mon fournisseur, mais j'ai décidé de partir sur deux concepts, ce afin de lui montrer que les cartes actuelles pouvaient être améliorées. Finalement, elle a choisi le troisième concept.</p>
          </div>
          <div className='figma-100-box'>
            <iframe width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FtQJfD5s0Gf1szwRpQF4pKQ%2FCarte-de-visite%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='container'>
          <h2 className='title-m text-center'>Vous avez apprecié<span className='blue-text'> ?</span></h2>
          <div className='m-t-50'>
            <div className='btn-blue m-t-paragraph'>
              <div className='btn-center'>
                <a target="_blank" href="https://www.behance.net/gallery/153560847/Brand-identity-Hairdresser-Rcr-a-tifs">Ce projet sur Behance</a>
                <a href="/project/greedy-glide">Projet suivant</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecreATifs