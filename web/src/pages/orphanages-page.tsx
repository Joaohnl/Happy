import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/orphanages.css';
import MapMarker from '../images/map_marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: MapMarker,
  iconSize: [38, 48],
  iconAnchor: [19, 48],
  popupAnchor: [0, -52]
});

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

        <Marker
          icon={mapIcon}
          position={[-23.9550537, -46.3204442]}
          >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
              Lar das meninas.
              <a href="/orphanage/1">
                <FiArrowRight size={20} color="#FFF"></FiArrowRight>
              </a>
            </Popup>
          </Marker>

      </Map> 

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size="32" color="#FFF"></FiPlus>
      </Link>
    </div>
  );
}

export default OrphanagesMap;