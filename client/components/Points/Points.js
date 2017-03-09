import React from 'react';
import { connect } from 'react-redux';

class Points extends React.Component {

  showPoints(points) {
    if (!points) {
      return this.props.auth.user.reward_points;
    } else {
      return points;
    }
  }

  render() {
    return (
      <div className = "panel panel-default">
         <div className = "panel-heading">
           User Points
         </div>

         <div className = "panel-body">
          <div className="circle">
            <div className="copy"><h1>{this.showPoints(this.props.reward_points)}</h1></div>
          </div>
         </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  reward_points: state.userPoints,
  redeem: state.redeem
});

export default connect(mapStateToProps)(Points);