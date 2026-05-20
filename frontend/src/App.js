import React from 'react';
import './App.css';
import PartsList from './components/PartsList';

function App() {

  return (
    <div className="app">

      <header className="navbar">
        <h1>Car Service Platform</h1>

        <nav>
          <a href="#parts">Parts</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Professional Car Service & Parts Management</h2>

          <p>
            Cloud-based platform for managing car services,
            spare parts, orders and delivery costs.
          </p>

          <button>Explore Parts</button>
        </div>
      </section>

      <section id="parts" className="parts-section">
        <h2>Available Car Parts</h2>

        <PartsList />
      </section>

      <section id="services" className="services-section">
        <h2>Our Services</h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>Engine Diagnostics</h3>
            <p>Complete engine diagnostics and troubleshooting.</p>
          </div>

          <div className="service-card">
            <h3>Oil Change</h3>
            <p>Professional oil replacement and maintenance.</p>
          </div>

          <div className="service-card">
            <h3>Brake Service</h3>
            <p>Brake inspection and replacement services.</p>
          </div>

        </div>
      </section>

      <footer id="contact" className="footer">
        <p>© 2026 Car Service Platform</p>
      </footer>

    </div>
  );
}

export default App;