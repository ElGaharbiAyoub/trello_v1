import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const mapStyle = {
  height: '400px',
  width: '100%'
};

function Contact() {
  return (
    <MapContainer
      center={[35.7596, -5.8040]} // Coordonnées du Technopark Tanger
      zoom={12}
      style={mapStyle}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[35.7596, -5.8040]} title="Technopark Tanger" />
    </MapContainer>
  );
}

export default Contact;
