import React from 'react';
import './representatives-list.scss';
import Table from '../representatives-table/representatives-table';

const reps = [
  { name: 'John Appleseed', party: 'R'}, 
  { name: 'John Cena', party: 'D'}, 
  { name: 'John Doe', party: 'R'}, 
  { name: 'John Snow', party: 'I'}, 
  ];

class RepresentativesList extends React.Component {

  render() {
    return (
      <div className="container">
        <h3>List / <b className="primary">Representatives</b></h3>
        <Table data={ reps } />
      </div>
    )
  }
}

export default RepresentativesList;