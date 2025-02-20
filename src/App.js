import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TopDoctors from './dashboard/TopDoctors';
import Medications from './dashboard/Medications';
import PopularProducts from './dashboard/PopularProducts';
import HealthPackages from './dashboard/HealthPackages';
import UpcomingConsultation from './dashboard/UpcomingConsultation';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="dashboard">
          <p className="welcome-back text-secondary">Welcome Back</p>
          <h3 className="user-name">Jubed Ahmed</h3>
          
          {/* First row: Top Doctors and Medications */}
          <div className="dashboard-row top-row">
            <div className="col-8">
              <TopDoctors />
            </div>
            <div className="col-4">
              <Medications />
            </div>
          </div>

          {/* Second row: Popular Products, Health Packages, and Upcoming */}
          <div className="dashboard-row bottom-row">
            <div className="col-4">
              <PopularProducts />
            </div>
            <div className="col-4">
              <HealthPackages />
            </div>
            <div className="col-4">
              <UpcomingConsultation />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;