import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(date, name, ship, payment, sale) {
  return { date, name, ship, payment, sale };
}

const rows = [
  createData('16 Mar, 2019	', 'Elvis Presley	', 'Tupelo, MS', 'VISA ⠀•••• 3719	','$312.44' ),
  createData('16 Mar, 2019	', 'Paul McCartney	', 'London, UK	', 'VISA ⠀•••• 2574	', '$866.99'),
  createData('16 Mar, 2019', 'Tom Scholz	', 'Boston, MA	', 'MC ⠀•••• 1253	', '$100.81'),
  createData('16 Mar, 2019', 'Michael Jackson	', 'Gary, IN	', 'AMEX ⠀•••• 2000	', '$654.39'),
  createData('15 Mar, 2019', 'Bruce Springsteen	', 'Long Branch, NJ	', 'VISA ⠀•••• 5919	', '$212.79'),
];

export default function DenseTable() {
  return (
    <TableContainer style={{ width: '100%' }}>
      <Table  size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Date </TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Ship To</TableCell>
            <TableCell align="left">Payment Method	</TableCell>
            <TableCell align="left">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.date}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.ship}</TableCell>
              <TableCell align="left">{row.payment}</TableCell>
              <TableCell align="left">{row.sale}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}