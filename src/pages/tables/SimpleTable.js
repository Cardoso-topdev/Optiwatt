import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import {
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Divider as MuiDivider,
  Paper as MuiPaper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import { withStyles } from "@material-ui/core/styles";

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const CustomTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.025);
  }
`;

// Data
let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function SimpleTableDemo() {
  return (
    <Card mb={6}>
      <CardContent pb={1}>
        <Typography variant="h6" gutterBottom>
          Simple Table
        </Typography>
        <Typography variant="body2" gutterBottom>
          A simple example with no frills.
        </Typography>
      </CardContent>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat (g)</TableCell>
              <TableCell align="right">Carbs (g)</TableCell>
              <TableCell align="right">Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Card>
  );
}

function CustomizedTableDemo() {
  return (
    <Card mb={6}>
      <CardContent pb={1}>
        <Typography variant="h6" gutterBottom>
          Customized Table
        </Typography>
        <Typography variant="body2" gutterBottom>
          If you have been reading the overrides documentation page but you are
          not confident jumping in, here are examples of how you can change the
          look of a <code>TableCell</code>.
        </Typography>
      </CardContent>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <CustomTableCell>Dessert (100g serving)</CustomTableCell>
              <CustomTableCell align="right">Calories</CustomTableCell>
              <CustomTableCell align="right">Fat (g)</CustomTableCell>
              <CustomTableCell align="right">Carbs (g)</CustomTableCell>
              <CustomTableCell align="right">Protein (g)</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <CustomTableRow key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.name}
                </CustomTableCell>
                <CustomTableCell align="right">{row.calories}</CustomTableCell>
                <CustomTableCell align="right">{row.fat}</CustomTableCell>
                <CustomTableCell align="right">{row.carbs}</CustomTableCell>
                <CustomTableCell align="right">{row.protein}</CustomTableCell>
              </CustomTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Card>
  );
}

function SimpleTable() {
  return (
    <React.Fragment>
      <Helmet title="Simple Table" />
      <Typography variant="h3" gutterBottom display="inline">
        Simple Table
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/">
          Dashboard
        </Link>
        <Link component={NavLink} exact to="/">
          Tables
        </Link>
        <Typography>Simple Table</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <SimpleTableDemo />
          <CustomizedTableDemo />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default SimpleTable;
