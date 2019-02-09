import React from 'react';
import './representatives-list.scss';
import Table from '../representatives-table/representatives-table';

const reps = [
  {
    "name": "Steven Palazzo",
    "party": "Republican",
    "state": "MS",
    "district": "4",
    "phone": "202-225-5772",
    "office": "2349 Rayburn House Office Building; Washington DC 20515-2404",
    "link": "https://palazzo.house.gov"
},
{
    "name": "Bennie Thompson",
    "party": "Democrat",
    "state": "MS",
    "district": "2",
    "phone": "202-225-5876",
    "office": "2466 Rayburn House Office Building; Washington DC 20515-2402",
    "link": "https://benniethompson.house.gov"
},
{
    "name": "Trent Kelly",
    "party": "Republican",
    "state": "MS",
    "district": "1",
    "phone": "202-225-4306",
    "office": "1005 Longworth House Office Building; Washington DC 20515-2401",
    "link": "https://trentkelly.house.gov"
},
{
    "name": "Michael Guest",
    "party": "Republican",
    "state": "MS",
    "district": "3",
    "phone": "202-225-5031",
    "office": "230 Cannon House Office Building; Washington DC 20515-2403",
    "link": "https://guest.house.gov/"
}
  ];

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
        <Table setSelectedRepresentative={this.setSelectedRepresentative} data={ reps } />
      </div>
    )
  }
}

export default RepresentativesList;