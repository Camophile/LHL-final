import React from 'react';
import PackageForm from './PackageForm';
import PackageMap from './PackageMap';
import Points from '../Points/Points';
import PackageDetails from './PackageDetails'
import { connect } from 'react-redux';
import { routeTo } from '../../routes';

class PackagePage extends React.Component {

    componentDidMount() {
    if(!this.props.deliveryShelter || !this.props.deliveryGrocery || (this.props.produce === 0 && this.props.deliveryGrocery === 0 && this.props.deliveryGrocery === 0)) {
      routeTo('shelters');
      alert('Please select a shelter.');
    }
  }

  render() {
    return (
      <div>
        <main className="container-fluid">
          <div className="col-md-3">
            <div className="row">
              <Points />
            </div>
            <div className="row">
              <PackageDetails />
            </div>
          </div>
          <div className="col-md-3">
            <PackageForm />
          </div>
          <div className="col-md-6">
            <PackageMap />
          </div>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    deliveryGrocery: state.currentDelivery.deliveryGrocery,
    produce: state.currentDelivery.produce,
    dairy: state.currentDelivery.dairy,
    bakedGoods: state.currentDelivery.bakedGoods,
    deliveryShelter: state.currentDelivery.deliveryShelter
  };
}

export default connect(mapStateToProps)(PackagePage);


