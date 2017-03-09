import React from 'react';
import Points from '../Points/Points';
import BoxList from './BoxList';
import BoxDetails from './BoxDetails';
import { routeTo } from '../../routes';
import { connect } from 'react-redux';

class BoxesPage extends React.Component {

  componentDidMount() {
    if(!this.props.deliveryGrocery) {
      routeTo('groceries');
      alert('Please select a Grocery store and click next.');
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
            <BoxDetails />
          </div>
        </div>
        <div className="col-md-9">
          <BoxList type="Produce" />
          <BoxList type="Dairy" />
          <BoxList type="Baked Goods" />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    deliveryGrocery: state.currentDelivery.deliveryGrocery
  };
}

export default connect(mapStateToProps)(BoxesPage);
