import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
// import validateInput from '../../../server/shared/validations/login';
// import classnames from 'classnames';
import { connect } from 'react-redux';
import { postPackageData } from '../../actions/packageActions';


class PackageForm extends React.Component {

  // componentDidMount() {
  //   this.props.getPackageData();
  // }

  deliveryDetails(infoType, businessType, deliveryId) {
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

        <div className="panel panel-default">
          <div className="panel-heading">
            Delivery Details
          </div>
          <div className="panel-body">
            <dl>
              <dt>Pickup Location:</dt>
              <dd>{this.deliveryDetails("name", this.props.groceries, this.props.deliveryGrocery)}</dd>
              <dd>{this.deliveryDetails("location", this.props.groceries, this.props.deliveryGrocery)}</dd>
              <dt>Store phone:</dt>
              <dd>{this.deliveryDetails("phone_number", this.props.groceries, this.props.deliveryGrocery)}</dd>
              <dt>Special notes:</dt>
              <dd>{this.deliveryDetails("notes", this.props.groceries, this.props.deliveryGrocery)}</dd>
              <dt>Drop-off Location:</dt>
              <dd>{this.deliveryDetails("name", this.props.shelters, this.props.deliveryShelter)}</dd>
              <dd>{this.deliveryDetails("location", this.props.shelters, this.props.deliveryShelter)}</dd>
              <dt>Shelter Phone:</dt>
              <dd>{this.deliveryDetails("phone_number", this.props.shelters, this.props.deliveryShelter)}</dd>
              <dt>Special notes:</dt>
              <dd>{this.deliveryDetails("notes", this.props.shelters, this.props.deliveryShelter)}</dd>
            </dl>
          </div>
        </div>

    );
  }
}

// PackageForm.propTypes = {
//   postPackageData: React.PropTypes.func.isRequired
// }

PackageForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  groceries: state.groceries,
  shelters: state.shelters,
  deliveryGrocery: state.currentDelivery.deliveryGrocery,
  deliveryShelter: state.currentDelivery.deliveryShelter
});

export default connect(mapStateToProps, { postPackageData })(PackageForm);