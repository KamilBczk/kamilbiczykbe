import React from 'react'

import '../components/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='wrapper'>
        <div className='container'>
          <div className='pre-footer'>
            <div className='buble'></div>
            <div className='text-container'>
              <p className='title-s text-center'>Vos rêves peuvent devenir réalité!</p>
              <div className='btn-box'>
                <div className='btn-blue-bar'>
                  <div className='btn-center'>
                    <a href="/contact" className='p-m'>Entrons en contact!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className='container'>
          <nav className='footer-nav'>
            <ul>
              <li><a className='p-m' href="/home">accueil<span className='point-anim'>.</span></a></li>
              <li><a className='p-m' href="/about">à propos<span className='point-anim'>.</span></a></li>
              <li><a className='p-m' href="/portfolio">portfolio<span className='point-anim'>.</span></a></li>
              <li><a className='p-m' href="/blog">blog<span className='point-anim'>.</span></a></li>
              <li><a className='p-m' href="/contact">contact<span className='point-anim'>.</span></a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Footer