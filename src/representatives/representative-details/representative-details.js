import React from 'react';
import './representative-details.scss';

class RepresentativeDetails extends React.Component {
  render() {
    return (
      <div className="detail-container">
        <h2>Info</h2>
        <form className="d-form">
            <input type="text" placeholder="First Name" name="First Name" value={this.props.representative.firstName} disabled />
            <input type="text" placeholder="Last Name" name="Last Name" value={this.props.representative.lastName} disabled />
            <input type="text" placeholder="District" name="District" value={this.props.representative.district} disabled />
            <input type="text" placeholder="Phone" name="Phone" value={this.props.representative.phone} disabled />
            <input type="text" placeholder="Office" name="Office" value={this.props.representative.office} disabled />
        </form>
      </div>
    )
  }
}

export default RepresentativeDetails;