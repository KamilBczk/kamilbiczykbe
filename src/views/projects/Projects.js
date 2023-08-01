import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header';

import BildConstructSrl from './BildConstructSrl';
import RecreATifs from './RecreATifs';
import GreedyGlide from './GreedyGlide';
import Footer from '../../components/Footer';
import TmfCompta from './TmfCompta';

function Projects() {
	let { project } = useParams();

	if (project === "bild-construct-srl") {
		return (
			<div className='project-container'>
				<Header />
				<BildConstructSrl />
				<Footer />
			</div>
		)
	} else if (project === "recre-a-tifs") {
		return (
			<div className='project-container'>
				<Header />
				<RecreATifs />
				<Footer />
			</div>
		)
	} else if (project === "greedy-glide") {
		return (
			<div className='project-container'>
				<Header />
				<GreedyGlide />
				<Footer />
			</div>
		)
	} else if (project === "tmf-compta") {
		return (
			<div className='project-container'>
				<Header />
				<TmfCompta />
				<Footer />
			</div>
		)
	}
  return (
    <div>
			<h1>404</h1>
		</div>
  )
}

export default Projects