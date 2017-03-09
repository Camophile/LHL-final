import React from 'react';
import { connect } from 'react-redux';

class DashboardDetails extends React.Component {

  render() {

    return (
      <div className = "panel panel-default">
         <div className = "panel-heading">
          JON DOE
         </div>

         <div className = "panel-body">
         <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
         </div>
         <div className = "panel-footer">
         </div>
      </div>
    );
  }
}

export default connect(null)(DashboardDetails);