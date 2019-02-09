import React from 'react';
import './representatives-search.scss';

class RepresentativeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: this.props.selectedType,
      selectedState: 'UT',
      formError: '',
    };

    // Bind instance
    this.setRepType = this.setRepType.bind(this);
    this.setRepState = this.setRepState.bind(this);
    this.searchReps = this.searchReps.bind(this);
  }

  setRepType(e) {
    this.setState({ 'selectedType': e.target.value });
  }

  setRepState(e) {
    this.setState({ 'selectedState': e.target.value });
  }

  searchReps(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    const params = {
      'repType': this.state.selectedType,
      'repState': this.state.selectedState,
    }

    if (params.repType && params.repState) {
      this.props.search(params);
      this.setState({formError: ''});
    } else {
      const formError = "Please select the representative's TYPE and STATE before searching.";
      this.setState({formError: formError});
    }
  }
  render() {
    return (
      <div className="search-container">
        <h2 className="s-title">Search Representatives:</h2>
        <form onSubmit={this.handleFormSubmit} className="search-form">
          <div className="s-rep-type">
              <label className="radio-container" onClick={this.setRepType}>Representative
                <input type="radio" value="Representative" checked={this.state.selectedType === 'Representative'} onChange={this.setRepType} />
                <span className="checkmark"></span>
            </label>
              <label className="radio-container">Senator
                <input type="radio" value="Senator" checked={this.state.selectedType === 'Senator'} onChange={this.setRepType} />
                <span className="checkmark"></span>
            </label>
          </div>
          <div className="s-rep-state select">
            <select name="state" onChange={this.setRepState} value={this.state.selectedState} placeholder="State">
              {statesData.map((s, i) => {
                return <option key={i} value={s.abbreviation}>{s.name}</option>;
              })}
            </select>
          </div>
          <div className="s-actions">
            <button className="button" onClick={this.searchReps}>Search</button>
          </div>
        </form>
        <div className={"s-error " + (this.state.formError !== '' ? 'show' : 'hide')}>
          <h3>Error: {this.state.formError}</h3>
        </div>
      </div>
    )
  }

}

export default RepresentativeSearch;




const statesData = [
  {
    "name": "Alabama",
    "abbreviation": "AL"
  },
  {
    "name": "Alaska",
    "abbreviation": "AK"
  },
  {
    "name": "American Samoa",
    "abbreviation": "AS"
  },
  {
    "name": "Arizona",
    "abbreviation": "AZ"
  },
  {
    "name": "Arkansas",
    "abbreviation": "AR"
  },
  {
    "name": "California",
    "abbreviation": "CA"
  },
  {
    "name": "Colorado",
    "abbreviation": "CO"
  },
  {
    "name": "Connecticut",
    "abbreviation": "CT"
  },
  {
    "name": "Delaware",
    "abbreviation": "DE"
  },
  {
    "name": "District Of Columbia",
    "abbreviation": "DC"
  },
  {
    "name": "Federated States Of Micronesia",
    "abbreviation": "FM"
  },
  {
    "name": "Florida",
    "abbreviation": "FL"
  },
  {
    "name": "Georgia",
    "abbreviation": "GA"
  },
  {
    "name": "Guam",
    "abbreviation": "GU"
  },
  {
    "name": "Hawaii",
    "abbreviation": "HI"
  },
  {
    "name": "Idaho",
    "abbreviation": "ID"
  },
  {
    "name": "Illinois",
    "abbreviation": "IL"
  },
  {
    "name": "Indiana",
    "abbreviation": "IN"
  },
  {
    "name": "Iowa",
    "abbreviation": "IA"
  },
  {
    "name": "Kansas",
    "abbreviation": "KS"
  },
  {
    "name": "Kentucky",
    "abbreviation": "KY"
  },
  {
    "name": "Louisiana",
    "abbreviation": "LA"
  },
  {
    "name": "Maine",
    "abbreviation": "ME"
  },
  {
    "name": "Marshall Islands",
    "abbreviation": "MH"
  },
  {
    "name": "Maryland",
    "abbreviation": "MD"
  },
  {
    "name": "Massachusetts",
    "abbreviation": "MA"
  },
  {
    "name": "Michigan",
    "abbreviation": "MI"
  },
  {
    "name": "Minnesota",
    "abbreviation": "MN"
  },
  {
    "name": "Mississippi",
    "abbreviation": "MS"
  },
  {
    "name": "Missouri",
    "abbreviation": "MO"
  },
  {
    "name": "Montana",
    "abbreviation": "MT"
  },
  {
    "name": "Nebraska",
    "abbreviation": "NE"
  },
  {
    "name": "Nevada",
    "abbreviation": "NV"
  },
  {
    "name": "New Hampshire",
    "abbreviation": "NH"
  },
  {
    "name": "New Jersey",
    "abbreviation": "NJ"
  },
  {
    "name": "New Mexico",
    "abbreviation": "NM"
  },
  {
    "name": "New York",
    "abbreviation": "NY"
  },
  {
    "name": "North Carolina",
    "abbreviation": "NC"
  },
  {
    "name": "North Dakota",
    "abbreviation": "ND"
  },
  {
    "name": "Northern Mariana Islands",
    "abbreviation": "MP"
  },
  {
    "name": "Ohio",
    "abbreviation": "OH"
  },
  {
    "name": "Oklahoma",
    "abbreviation": "OK"
  },
  {
    "name": "Oregon",
    "abbreviation": "OR"
  },
  {
    "name": "Palau",
    "abbreviation": "PW"
  },
  {
    "name": "Pennsylvania",
    "abbreviation": "PA"
  },
  {
    "name": "Puerto Rico",
    "abbreviation": "PR"
  },
  {
    "name": "Rhode Island",
    "abbreviation": "RI"
  },
  {
    "name": "South Carolina",
    "abbreviation": "SC"
  },
  {
    "name": "South Dakota",
    "abbreviation": "SD"
  },
  {
    "name": "Tennessee",
    "abbreviation": "TN"
  },
  {
    "name": "Texas",
    "abbreviation": "TX"
  },
  {
    "name": "Utah",
    "abbreviation": "UT"
  },
  {
    "name": "Vermont",
    "abbreviation": "VT"
  },
  {
    "name": "Virgin Islands",
    "abbreviation": "VI"
  },
  {
    "name": "Virginia",
    "abbreviation": "VA"
  },
  {
    "name": "Washington",
    "abbreviation": "WA"
  },
  {
    "name": "West Virginia",
    "abbreviation": "WV"
  },
  {
    "name": "Wisconsin",
    "abbreviation": "WI"
  },
  {
    "name": "Wyoming",
    "abbreviation": "WY"
  }
];