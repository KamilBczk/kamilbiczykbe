import React from 'react'

import bmc from '../../ressources/projects/greedy-glide/bmc.png'
import macro from '../../ressources/projects/greedy-glide/macro.png'
import swot from '../../ressources/projects/greedy-glide/swot.png'
import behance from '../../ressources/projects/greedy-glide/behance.png'
import { Helmet } from 'react-helmet'

function GreedyGlide() {
  return (
    <div className='greedy'>
      <Helmet>
        <title>Kamil Biczyk | Greedy Glide</title>
      </Helmet>
      <div className='wrapper'>
        <div className='container'>
          <h2 className='title-m'>Greedy Glide<span className='blue-text'>.</span></h2>
          <div className='text-box'>
            <p className='p-m'>Greedy Glide est un projet créé lors de mon BAC 1 en marketing. Au début, notre équipe désirait que nous finissions premiers de notre promotion, mais au fil du temps nous nous sommes rendu compte que celui-ci trouve son public lors des analyses micro-économiques. En clair, plus le temps passait, plus le projet paraissait sérieux, au point d'envisager de créer la start-up. Découvrez toutes les analyses, designs, et conception.</p>
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='container'>
          <h2 className='title-m'>Un concept<span className='blue-text'>.</span></h2>
          <div className='text-box'>
            <p className='p-m'>Notre idée de lubrifiant massant aphrodisiaque bio serait composée de fruits invendus de marchés (notre matière première), de vitamines (pour la conservation), d'huiles essentielles (pour accentuer l'odeur), et d'ingrédients possédant des vertus aphrodisiaques comme le gingembre, le thym, le chocolat (pour stimuler et revitaliser l'organisme). Ce lubrifiant pourrait être utilisé pendant vos moments de complicité, mais aussi pendant vos moments de détente personnelle.</p>
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='container'>
          <h2 className='title-m'>Buisness Model Canva<span className='blue-text'>.</span></h2>
          <div className='text-box'>
            <p className='p-m'>Dans le but de donner vie à notre lubrifiant, nous avons décidé de créer ce Business Model Canvas pour mieux visualiser le modèle économique de ce projet. Ce BMC a pu être mis en place grâce aux différentes recherches que nous avons entreprises telles que l’analyse du marché du lubrifiant et l'analyse macro-économique. Cet outil permet de mieux visualiser les différents aspects importants de notre projet tel que le financement de l’entreprise ou encore la clientèle visée.</p>
          </div>
          <div className='img-box-60'>
            <img src={bmc} alt="" />
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='container'>
          <h2 className='title-m'>Analyse SWOT<span className='blue-text'>.</span></h2>
          <div className='img-box-60'>
            <img src={swot} alt="" />
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='container'>
          <h2 className='title-m'>Le produit<span className='blue-text'>.</span></h2>
          <div className='text-box'>
            <p className='p-m'>L’exigence principale dans ce projet, qui a duré tout au long de ce semestre, était de nous inscrire dans l’économie circulaire et c’est avec un grand plaisir que nous avons tout mis en œuvre pour réussir à boucler ce cercle vertueux. Malgré le fait que nos premières idées n’étaient pas forcément viables, nous avons désormais un produit fini et prêt à être mis sur le marché, c’est un lubrifiant massant aphrodisiaque bio circulaire ayant comme composants phares des fruits invendus saisonniers. C’était un grand défi par la complexité des enquêtes concernant ce marché. Nous avions tout d’abord une gêne vis-à-vis de ce sujet et nous avons dû nous professionnaliser afin que les consommateurs potentiels et les différents publics que nous avons eus tout au long de nos présentations nous trouvent crédibles.</p>
          </div>
          <div className='img-box-60'>
            <img src={behance} alt="" />
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='container'>
          <h2 className='title-m text-center'>Vous avez apprecié<span className='blue-text'> ?</span></h2>
          <div className='m-t-50'>
            <div className='btn-blue m-t-paragraph'>
              <div className='btn-center'>
                <a target="_blank" href="https://www.behance.net/gallery/153423081/Product-design-Greedy-Glide">Ce projet sur Behance</a>
                <a href="/project/bild-construct-srl">Projet suivant</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default GreedyGlide