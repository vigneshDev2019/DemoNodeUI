import React, { useState } from 'react';
// import { makeStyles } from '@mui/styles';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });



export default function CheckboxTable(props) {
 
const rows = props.rows
  const handleCheckboxChange = (id) => {
    const currentIndex = props.checked.indexOf(id);
    const newChecked = [...props.checked];
    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    props.setChecked(newChecked);
  };

  return (
    <TableContainer component={Paper}>
      <Table  aria-label="checkbox table">
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Trim</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.filter(c => c.Status == 0).map((row) => (
            <TableRow key={row.Id}>
              <TableCell>
                <Checkbox
                  checked={props.checked.indexOf(row.Id) !== -1}
                  onChange={() => {
                    handleCheckboxChange(row.Id)}}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.Make}
              </TableCell>
              <TableCell>{row.Model}</TableCell>
              <TableCell>{row.Year}</TableCell>
              <TableCell>{row.Trim}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
