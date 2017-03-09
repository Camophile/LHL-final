import React from 'react';
import { connect } from 'react-redux';
import { routeTo } from '../../routes';
import { setDeliveryGrocery } from '../../actions/currentDeliveryActions';

class GroceryDetails extends React.Component {

  onClick(groceryId) {
    this.props.selectDeliveryGrocery(groceryId)
    routeTo('/boxes');
  };

  render() {
    if(!this.props.grocery) {
      return (
      <div className = "panel panel-default">
         <div className = "panel-heading">
          Grocery Store Details
         </div>
         <div className = "panel-body">
          Please select a grocery store.
         </div>
      </div>
      );
    }

    const { name, location, notes, phone_number, id } = this.props.grocery;

    return (
      <div className = "panel panel-default">
         <div className = "panel-heading">
          Grocery Store Details
         </div>

         <div className = "panel-body">
          <dl>
            <dt>Grocery Store name:</dt>
            <dd>{name}</dd>
            <dt>Pickup hours:</dt>
            <dd></dd>
            <dt>Address:</dt>
            <dd>{location}</dd>
            <dt>Phone number:</dt>
            <dd>{phone_number}</dd>
            <dt>Notes:</dt>
            <dd>{notes}</dd>
            <dt></dt>
          </dl>
         </div>
         <div className = "panel-footer">
          <button className="btn btn-primary btn-block" onClick={() => this.onClick(id)}>Next</button>
         </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  const grocery = state.groceries.find(x=> x.id === state.selectedGrocery);

  return { grocery };
}

function mapDispatchToProps(dispatch) {
  return {
    selectDeliveryGrocery: (id) => {
      return dispatch(setDeliveryGrocery(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryDetails);