import React from 'react';
import Points from '../Points/Points';
import DashboardMain from './DashboardMain';
import DashboardDetails from './DashboardDetails';

class DashboardPage extends React.Component {
  render() {
    return (
      <div>
        <main className="container-fluid">
          <div className="col-md-3">
            <div className="row">
              <Points />
            </div>
            <div className="row">
              <DashboardDetails />
            </div>
            <div className="row">
            </div>
          </div>
          <div className="col-md-6">
            <DashboardMain />
          </div>
        </main>
      </div>
    )
  }
}

export default DashboardPage;