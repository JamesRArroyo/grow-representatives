import React from 'react';
import './representatives-table.scss';

class TableRow extends React.Component {
  render() {
    const { data } = this.props;
    const row = data.map((data) =>
      <tr>
        <td key={data.name}>{data.name}</td>
        <td key={data.party}>{data.party}</td>
      </tr>
    );
    row.unshift(
      <tr>
        <th>Name</th>
        <th>Party</th>
      </tr>
    )
    return (
      <span>{row}</span>
    );
  }
}

class Table extends React.Component {
  render() {
    return (
      <table>
        <TableRow data={this.props.data} />
      </table>
    );
  }
}

export default Table;
