import React from 'react';
import { connect } from 'react-redux';
import { routeTo } from '../../routes';
import { postPackageData } from '../../actions/packageActions';
import { addPoints } from '../../actions/packageActions';


class PackageDetails extends React.Component {

onClick(data) {
    this.props.sendPackages(data);
    this.props.increasePoints(this.props.auth.user.id, (this.props.auth.user.reward_points + 200));
    routeTo('/dashboard');
    this.props.addFlashMessage({
      type: 'success',
      text: "You've succesfully accepted a package!"
    });
  };

  deliveryDetails(infoType, businessType, deliveryId) {
    let result;
    businessType.forEach(business => {
      if (business.id === deliveryId) {
        result = business[infoType];
      }
    });
    return result;
  }

  packageDetails(currentPackage) {
    let boxes = 0;
    for (let key in currentPackage) {
      if (key === "produce" || key === "dairy" || key === "bakedGoods") {
        let numFoodType = currentPackage[key];
        boxes += numFoodType;
      }
    }
    return boxes;
  }


  render() {
    // const { store, shelter, distance } = this.props.store;

    return (
      <div className = "panel panel-default">
        <div className = "panel-heading">
          Package Details
        </div>

        <div className = "panel-body">
          <dl>
            <dt>Pickup:</dt>
            <dd>{this.deliveryDetails("name", this.props.groceries, this.props.deliveryGrocery)}</dd>
            <dt>Donation:</dt>
            <dd>{this.deliveryDetails("name", this.props.shelters, this.props.deliveryShelter)}</dd>
            <dt>Items in package:</dt>
            <dd>{this.packageDetails(this.props.currentDelivery)}</dd>
          </dl>
          <a href='/' name='cancel'>Cancel Package</a>
        </div>

        <div className="panel-footer">
          <button className="btn btn-primary btn-block" type="submit"
            onClick={() => this.onClick({
              shelter: this.props.deliveryShelter,
              user: this.props.auth.user.id
            })}>Confirm</button>
        </div>
      </div>
    );
  }
}

PackageDetails.propTypes = {
  auth: React.PropTypes.object.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired

}


const mapStateToProps = (state) => ({
  auth: state.auth,
  packages: state.packages,
  groceries: state.groceries,
  shelters: state.shelters,
  deliveryGrocery: state.currentDelivery.deliveryGrocery,
  deliveryShelter: state.currentDelivery.deliveryShelter,
  currentDelivery: state.currentDelivery
});

function mapDispatchToProps(dispatch) {
  return {
    sendPackages: (data) => {
      return dispatch(postPackageData(data));
    },
    increasePoints: (user, data) => {
      return dispatch(addPoints(user, data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PackageDetails);