import React from 'react';
import './representatives-table.scss';

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow: {},
    }
    this.selectRow = this.selectRow.bind(this);
  }

  selectRow(row){
    this.setState({selectedRow: row});
    this.props.setSelectedRow(row);
  }

  render() {
    const { data } = this.props;
    const row = data.map((data, i) =>
      <tr key={i} 
        onClick={()=> this.selectRow(data)}
        className={"" + (this.state.selectedRow === data ? 'selected-tr' : 'asdf')}>
        <td key={data.name}>{data.name}</td>
        <td key={data.party}>{data.party.charAt(0)}</td>
      </tr>
    );
    row.unshift(
      <tr key="hr" className="header-tr">
        <th key="name">Name</th>
        <th key="party">Party</th>
      </tr>
    )
    return (
      <tbody>{row}</tbody>
    );
  }
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.setSelectedRow = this.setSelectedRow.bind(this);
  }

  setSelectedRow(row){
    const nameParts = row.name.split(' ');
    row.firstName = nameParts[0];
    row.lastName = nameParts[1];
    this.props.setSelectedRepresentative(row);
  }
  render() {
    return (
      <table>
          <TableRow setSelectedRow={this.setSelectedRow} data={this.props.data} />
      </table>
    );
  }
}

export default Table;
