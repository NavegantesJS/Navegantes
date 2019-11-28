import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FlightList from '../components/FlightList';
import '../styles/components/Results.scss';
import bgHome from '../static/images/bg_home.jpg';

const Results = () => (
  <div className="main-section" style={{ backgroundImage: `url(${bgHome})` }}>
    <Header />
    <section className="wrapper-content">
      <div className="container">
        <FlightList />
      </div>
    </section>
    <Footer />
  </div>
);

export default Results;
