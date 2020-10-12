import React from 'react';
import './orphanages.css';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import MapMarker from '../../assets/images/map_marker.svg';

function OrphanagesMap() { 
  return (
    <div id="page-map">
      <aside>

        <header>
          <img src={MapMarker} alt="Happy"/>

          <h1>Escolha um orfanato no mapa</h1>
          <p>Muitas crianças estão esperando a sua visita! :)</p>
        </header>

        <footer>
          <strong>Santos</strong>
          <span>São Paulo</span>
        </footer>
      </aside>
      
      <Map
        center={[-23.9550537, -46.3204442]}
        zoom={14}
        style={{
          width: '100%',
          height: '100%'}}
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}></TileLayer>
      </Map> 

      <Link to="" className="create-orphanage">
        <FiPlus size="32" color="#FFF"></FiPlus>
      </Link>
    </div>
  );
}

export default OrphanagesMap;