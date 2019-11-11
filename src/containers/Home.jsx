import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';
import '../styles/components/Home.scss';
import bgHome from '../static/images/bg_home.jpg';

const Home = () => (
  <div className="home-section" style={{ backgroundImage: `url(${bgHome})` }}>
    <Header />
    <section className="wrapper-content">
      <div className="container">
        <Search />
      </div>
    </section>
    <Footer />
  </div>
);

export default Home;
