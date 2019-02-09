import React from 'react';
import './representatives-list.scss';
import Table from '../representatives-table/representatives-table';

class RepresentativesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRepresentative: {},
    }

    this.setSelectedRepresentative = this.setSelectedRepresentative.bind(this);
  }

  setSelectedRepresentative(rep) {
    this.setState({selectedRepresentative: rep})
    this.props.setRepresentative(rep);
  }

  render() {
    return (
      <div className="list-container">
        <h2>List / <b className="primary">{this.props.representativeType}</b></h2>
        <Table setSelectedRepresentative={this.setSelectedRepresentative} data={ this.props.representatives } />
      </div>
    )
  }
}

export default RepresentativesList;