import React from 'react'
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './landing-page.css';

import logoimg from '../../assets/images/logo.svg'; 

function LandingPage() {
  return (
    <div id="landing-page">
      <div className="content-wrapper">
        <img src={logoimg} alt="Happy" />
        
        <main>
          <h1>Leve felicidade para o mundo!</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        
        <div className="location">
          <strong>Santos</strong>
          <span>São Paulo</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size="26" color="rgba(0, 0, 0, 0.6)" /> 
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
