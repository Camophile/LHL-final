import React from 'react';
import { connect } from 'react-redux';
import { postDeliveredAt } from '../../actions/shelterConfirmActions';
import { routeTo } from '../../routes';
// import TextFieldGroup from '../common/TextFieldGroup';
import { addFlashMessage } from '../../actions/flashMessages.js';

class ShelterForm extends React.Component {

  onClick() {
    this.props.validateDelivery();
    routeTo('/');
    this.props.addFlashMessage({
      type: 'success',
      text: 'Message received!'
    });
  }

  fetchDeliveryData(infoType, businessType, deliveryID) {
    let result;
    businessType.forEach(business => {
      if (business.id === deliveryId) {
        result = business[infoType];
      }
    });
    return result;
  }

  render() {
    return(
      <div>
        <header className="page-header">
          <h1>New delivery! </h1>
        </header>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>Transporter</th>
              <th>Package Origin</th>
              <th>Boxes of Produce</th>
              <th>Boxes of Baked Goods</th>
              <th>Boxes of Dairy</th>
              <th>Expected Delivery</th>
            </tr>
          </thead>
          <tbody>
            <tr scope="row">
              <td>{this.props.transporter}</td>
              <td>IGA</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>February 7, 2016 at 6:30 pm</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-primary btn-outline" type="submit" onClick={() => this.onClick()}>
          Package Arrived!
        </button>
      </div>
    );
  }
}

ShelterForm.propTypes = {
  addFlashMessage: React.PropTypes.func.isRequired,
  auth: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  packages: state.packages,
  groceries: state.groceries,
  shelters: state.shelters,
  transporter: state.transporter,
  deliveryGrocery: state.currentDelivery.deliveryGrocery,
  deliveryShelter: state.currentDelivery.deliveryShelter,
  currentDelivery: state.currentDelivery
});

function mapDispatchToProps(dispatch){
  return {
    validateDelivery: (data) => {
      return dispatch(postDeliveredAt(data)).then(() => {
        // alert('message sent');
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShelterForm);