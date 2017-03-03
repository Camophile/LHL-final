import { connect } from 'react-redux';
import React from 'react';

class ShelterList extends React.Component {

  className(id) {
    return `grocery-panel panel panel-default ${this.props.selectedShelter === id ? 'active' : ''}`
  }

  render() {
    console.log(this.props.shelters);
    // console.log(this.props.selectedShelter);
    return (
      <div>
        {this.props.shelters.map(shelter => (
            <div key={shelter.id} className="col-md-3" onClick={this.props.selectShelter(shelter.id)}>
              <div className={this.className(shelter.id)}>
                 <div className = "panel-heading">
                  {shelter.name}
                 </div>
                <img className="panel-img" src="http://placehold.it/950x650" alt="Shelter Image"/>
                <div className = "panel-body">
                  <dl>
                    <dt>Drop-off hours:</dt>
                    <dd></dd>
                  </dl>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  shelters: state.shelters,
  selectedShelter: state.selectedShelter
});

const shelterSelectedAction = (id) => ({ type: 'SHELTER_SELECTED', payload: id });

const mapDispatchToProps = (dispatch) => ({
  selectShelter(id) {
    return () => dispatch(shelterSelectedAction(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShelterList);