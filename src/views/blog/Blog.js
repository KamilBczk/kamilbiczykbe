import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import './Blog.css'

function Blog() {
  return (
    <div className='blog'>
      <Helmet>
        <title>Kamil Biczyk | Blog</title>
      </Helmet>
      <Header />
      <div className='wrapper'>
        <div className='container'>
					<h2 className='title-m'>Mes derniers posts<span className='blue-text'>.</span></h2>
          <div className='text-box'>
            <p className='p-m'>Depuis des années, j'adore créer et transmettre des choses qui peuvent aider la communauté. C'est à 42 que j'ai appris la nécessité de l'entraide, car c'est là que j'ai réalisé que les problèmes étaient extrêmement complexes et les solutions inexistantes. Travailler en collaboration était un des piliers. Quand j'ai été admis à 42 j'ai su qu'un de mes amis n'a pas été admis et qu'il voulait poursuivre avec le développement web à Becode, sachant que j'avais déjà des connaissances sur ce sujet je l'ai pris sous mon épaule pour le début de son parcours. Je l'aidais à se surpasser, à résoudre des problèmes,... Aujourd'hui, il cherche du travail en tant que consultant Salesforce.</p>
          </div>
          <div className='blog-grid'>
            <a href="https://github.com/KamilBczk/NCW" target="_blank" rel='noreferrer'>
              <div className='blog-grid-elem'>
                  <div className='blog-grid-elem-container'>
                    <h1 className='title'>NCW - Framework CSS</h1>
                    <p className='hashtags'><i>#css  #sass  #php</i></p>
                    <p className='desc'><span className='text-left'>09/2022</span><span className='text-right'>15' de lecture</span></p>
                  </div>
              </div>
            </a>
            <a href="https://github.com/KamilBczk/regular-skeleton" target="_blank" rel='noreferrer'>
              <div className='blog-grid-elem'>
                <div className='blog-grid-elem-container'>
                  <h1 className='title'>Basic website skeleton - php</h1>
                  <p className='hashtags'><i>#php  #javascript  #scss #css</i></p>
                  <p className='desc'><span className='text-left'>06/2022</span><span className='text-right'>15' de lecture</span></p>
                </div>
              </div>
            </a>
            <a href="https://github.com/KamilBczk/minitalk-42" target="_blank" rel='noreferrer'>
              <div className='blog-grid-elem'>
                <div className='blog-grid-elem-container'>
                  <h1 className='title'>42 - Minitalk</h1>
                  <p className='hashtags'><i>#c  #makefile</i></p>
                  <p className='desc'><span className='text-left'>03/2022</span><span className='text-right'>15' de lecture</span></p>
                </div>
              </div>
            </a>
            <a href="https://github.com/KamilBczk/get_next_line-42" target="_blank" rel='noreferrer'>
              <div className='blog-grid-elem'>
                <div className='blog-grid-elem-container'>
                  <h1 className='title'>42 - get_next_line()</h1>
                  <p className='hashtags'><i>#c  #makefile</i></p>
                  <p className='desc'><span className='text-left'>11/2021</span><span className='text-right'>15' de lecture</span></p>
                </div>
              </div>
            </a>
            <a href="https://github.com/KamilBczk/ft_printf-42" target="_blank" rel='noreferrer'>
              <div className='blog-grid-elem'>
                <div className='blog-grid-elem-container'>
                  <h1 className='title'>42 - ft_printf()</h1>
                  <p className='hashtags'><i>#c  #makefile</i></p>
                  <p className='desc'><span className='text-left'>10/2021</span><span className='text-right'>15' de lecture</span></p>
                </div>
              </div>
            </a>
            <a href="https://github.com/KamilBczk/Libft-42" target="_blank" rel='noreferrer'>
              <div className='blog-grid-elem'>
                <div className='blog-grid-elem-container'>
                  <h1 className='title'>42 - Libft</h1>
                  <p className='hashtags'><i>#c  #makefile</i></p>
                  <p className='desc'><span className='text-left'>09/2021</span><span className='text-right'>15' de lecture</span></p>
                </div>
              </div>
            </a>
            <a href="https://github.com/KamilBczk/Piscine-42" target="_blank" rel='noreferrer'>
              <div className='blog-grid-elem'>
                <div className='blog-grid-elem-container'>
                  <h1 className='title'>42 - Piscine</h1>
                  <p className='hashtags'><i>#c  #shell</i></p>
                  <p className='desc'><span className='text-left'>08/2021</span><span className='text-right'>15' de lecture</span></p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog