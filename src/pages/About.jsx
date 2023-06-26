import React from 'react';

const aboutStyles = {
  maxWidth: '600px',
  margin: '0 auto',
  marginTop: '40px',
  
  padding: '20px',
  backgroundColor: '#f8f8f8',
  borderRadius: '4px',
};

const headingStyles = {
  fontSize: '24px',
  marginBottom: '10px',
  marginTop: '20px',
};

const paragraphStyles = {
  fontSize: '16px',
  marginBottom: '10px',
  marginTop: '20px',
};

function About() {
  return (
    <div style={aboutStyles}>
      <h1 style={headingStyles}>About</h1>
      <p style={paragraphStyles}>
        Bienvenue sur la page "About" de notre site ! Nous sommes une équipe passionnée qui aime créer des applications
        web incroyables. Notre objectif est de fournir des solutions innovantes et de qualité pour répondre aux besoins
        de nos utilisateurs.
      </p>
      <p style={paragraphStyles}>
        Dans notre équipe, nous avons des développeurs expérimentés, des designers talentueux et des experts en
        expérience utilisateur. Nous travaillons ensemble pour offrir des expériences utilisateur exceptionnelles et
        garantir la satisfaction de nos clients.
      </p>
      <p style={paragraphStyles}>
        Notre mission est de simplifier la vie de nos utilisateurs en proposant des applications intuitives, faciles à
        utiliser et à la pointe de la technologie. Nous nous engageons à rester à jour avec les dernières tendances et
        les meilleures pratiques du développement web.
      </p>
      <p style={paragraphStyles}>
        N'hésitez pas à nous contacter si vous avez des questions, des suggestions ou si vous souhaitez collaborer avec
        nous. Nous sommes impatients de vous fournir des solutions personnalisées qui répondent à vos besoins spécifiques.
      </p>
    </div>
  );
}

export default About;