import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/login';
// import classnames from 'classnames';
import { connect } from 'react-redux';
import { getPackageData } from '../../actions/packageActions';

class PackageForm extends React.Component {

  componentDidMount() {
    this.props.getPackageData();
  }

  render() {
    return(
      <div className="jumbotron">
        <h1>Package</h1>
      </div>
    );
  }
}

PackageForm.propTypes = {
  getPackageData: React.PropTypes.func.isRequired
}

PackageForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, { getPackageData })(PackageForm);