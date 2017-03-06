import React from 'react';
import { connect } from 'react-redux';

class Points extends React.Component {

  showPoints(points) {
    if (!points) {
      return 0;
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
  reward_points: state.auth.user.reward_points
});

export default connect(mapStateToProps)(Points);