import React from 'react';
import { connect } from 'react-redux';
import { routeTo } from '../../routes';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/currentDeliveryActions';
import * as boxActions from '../../actions/boxActions';


class BoxDetails extends React.Component {

  onClick() {
    if(this.props.produce === 0 && this.props.dairy === 0 && this.props.bakedGoods === 0) {
      return alert('Please select at least one box.');
    } else {
    let actions = this.props.actions;
    let boxActions = this.props.boxActions;

    actions.allProduce(this.props.produce);
    actions.allDairy(this.props.dairy);
    actions.allBakedGoods(this.props.bakedGoods);
    boxActions.clearBakedGoods();
    boxActions.clearDairy();
    boxActions.clearProduce();
    routeTo('/shelters');
    }
  };

  render() {
    return (
      <div className = "panel panel-default">
       <div className = "panel-heading">
         Package Details
       </div>
       <div className = "panel-body">
         <ul className="list-group">
           <li className="list-group-item">
             <span className="badge">{this.props.produce}</span>
             Produce
           </li>
           <li className="list-group-item">
             <span className="badge">{this.props.dairy}</span>
             Dairy
           </li>
           <li className="list-group-item">
             <span className="badge">{this.props.bakedGoods}</span>
             Baked Goods
           </li>
         </ul>
       </div>
       <div className = "panel-footer">
         <button className="btn btn-primary btn-block" onClick={() => this.onClick()}>Next</button>
       </div>
     </div>
    );
  }
}

const mapStateToProps = (state) => ({
  produce: state.produce,
  dairy: state.dairy,
  bakedGoods: state.bakedGoods
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
  boxActions: bindActionCreators(boxActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BoxDetails);