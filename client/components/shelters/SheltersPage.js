import React from 'react';
import Points from '../Points/Points';
import ShelterDetails from './ShelterDetails';
import ShelterList from './ShelterList';
import { routeTo } from '../../routes';
import { connect } from 'react-redux';

class SheltersPage extends React.Component {

  componentDidMount() {
    if(!this.props.deliveryGrocery || (this.props.produce === 0 && this.props.deliveryGrocery === 0 && this.props.deliveryGrocery === 0)) {
      routeTo('boxes');
      alert('Please select at least one box.');
    }
  }

  render() {
    return (
      <div>
        <div className="col-md-3">
          <div className="row">
            <Points />
          </div>
          <div className="row">
            <ShelterDetails />
          </div>
        </div>
        <div className="col-md-9">
          <ShelterList />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    deliveryGrocery: state.currentDelivery.deliveryGrocery,
    produce: state.currentDelivery.produce,
    dairy: state.currentDelivery.dairy,
    bakedGoods: state.currentDelivery.bakedGoods
  };
}

export default connect(mapStateToProps)(SheltersPage);