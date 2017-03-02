import React from 'react';
import timezones from '../../data/timezones';
// import map from 'lodash/map';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import { login } from '../../actions/authActions';
import { connect } from 'react-redux';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      password: '',
      passwordConfirmation: '',
      email: '',
      errors: {},
      isLoading: false,
      invalid: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  checkUserExists(e) {
    const field = e.target.name;
    const val = e.target.value;
    if (val !== '') {
      this.props.isUserExists(val).then(res => {
        let errors = this.state.errors;
        let invalid;
        if (res.data.user) {
          errors[field] = 'User with ${field} exists';
          invalid = true;
        } else {
          errors[field] = '';
          invalid = false;
        }
        this.setState({ errors, invalid });
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Welcome!'
          });
          this.context.router.push('/');

      }).catch((err) => this.setState({ errors: err.response.data, isLoading: false }));

    }
  }

  render() {
    const { errors } = this.state;
    // const options = map(timezones, (val, key) =>
    //   <option key={val} value={val}>{key}</option>
    // );
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>

        <TextFieldGroup
          error={errors.first_name}
          label="First Name"
          onChange={this.onChange}
          checkUserExists={this.checkUserExists}
          value={this.state.first_name}
          field="first_name"
        />

        <TextFieldGroup
          error={errors.last_name}
          label="Last Name"
          onChange={this.onChange}
          checkUserExists={this.checkUserExists}
          value={this.state.last_name}
          field="last_name"
        />

        <TextFieldGroup
          error={errors.email}
          label="Email"
          onChange={this.onChange}
          checkUserExists={this.checkUserExists}
          value={this.state.email}
          field="email"
        />

        <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          field="password"
          type="password"
        />

        <TextFieldGroup
          error={errors.passwordConfirmation}
          label="Password Confirmation"
          onChange={this.onChange}
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
          type="password"
        />

        <div className="form-group">
          <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

// export default SignupForm;

export default connect(null, { login })(SignupForm);
