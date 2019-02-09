import React from 'react';
import './representative-details.scss';

class RepresentativeDetails extends React.Component {


  render() {
    return (
      <div className="detail-container">
        <h2>Info</h2>
        <form className="d-form">
            <input type="text" placeholder="First Name" name="First Name" />
            <input type="text" placeholder="Last Name" name="Last Name" />
            <input type="text" placeholder="District" name="District" />
            <input type="text" placeholder="Phone" name="Phone" />
            <input type="text" placeholder="Office" name="Office" />
        </form>
      </div>
    )
  }
}

export default RepresentativeDetails;