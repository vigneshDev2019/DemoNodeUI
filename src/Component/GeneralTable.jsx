import React from 'react';

function GeneralTable(props) {
  return (
    <table style={{display: "inline", width: "100%"}}>
      <thead>
        <tr >
          <th style={{border: "2px solid"}}>Make</th>
          <th style={{border: "2px solid"}}>Model</th>
          <th style={{border: "2px solid"}}>Year</th>
          <th style={{border: "2px solid"}}>Trim</th>
        </tr>
      </thead>
      <tbody>
        {props.data.filter(row => props.selected.indexOf(row.Id) !== -1).map((item, index) => (
          <tr key={index} >
            <td style={{border: "2px solid"}}>{item.Make}</td>
            <td style={{border: "2px solid"}}>{item.Model}</td>
            <td style={{border: "2px solid"}}>{item.Year}</td>
            <td style={{border: "2px solid"}}>{item.Trim}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GeneralTable;
