import React from 'react';
import './representatives-table.scss';

class TableRow extends React.Component {
  render() {
    const { data } = this.props;
    const row = data.map((data, i) =>
      <tr key={i}>
        <td key={data.name}>{data.name}</td>
        <td key={data.party}>{data.party}</td>
      </tr>
    );
    row.unshift(
      <tr key="hr">
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
  render() {
    return (
      <table>
          <TableRow data={this.props.data} />
      </table>
    );
  }
}

export default Table;
