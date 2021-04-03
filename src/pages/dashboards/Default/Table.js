import React from "react";
import styled from "styled-components/macro";

import {
  Card as MuiCard,
  CardHeader,
  IconButton,
  Chip as MuiChip,
  Paper as MuiPaper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { red, green, orange } from "@material-ui/core/colors";

import { spacing } from "@material-ui/system";

import { MoreVertical } from "react-feather";

const Card = styled(MuiCard)(spacing);

const Chip = styled(MuiChip)`
  height: 20px;
  padding: 4px 0;
  font-size: 90%;
  background-color: ${(props) => props.rgbcolor};
  color: ${(props) => props.theme.palette.common.white};
`;

const Paper = styled(MuiPaper)(spacing);

const TableWrapper = styled.div`
  overflow-y: auto;
  max-width: calc(100vw - ${(props) => props.theme.spacing(12)}px);
`;

// Data
let id = 0;
function createData(name, start, end, state, assignee) {
  id += 1;
  return { id, name, start, end, state, assignee };
}

const rows = [
  createData(
    "Project Aurora",
    "01/01/2020",
    "31/06/2020",
    <Chip label="Done" rgbcolor={green[500]} />,
    "James Dalton"
  ),
  createData(
    "Project Eagle",
    "01/01/2020",
    "31/06/2020",
    <Chip label="In Progress" rgbcolor={orange[500]} />,
    "Tracy Mack"
  ),
  createData(
    "Project Fireball",
    "01/01/2020",
    "31/06/2020",
    <Chip label="Done" rgbcolor={green[500]} />,
    "Sallie Love"
  ),
  createData(
    "Project Omega",
    "01/01/2020",
    "31/06/2020",
    <Chip label="Cancelled" rgbcolor={red[500]} />,
    "Glenda Jang"
  ),
  createData(
    "Project Yoda",
    "01/01/2020",
    "31/06/2020",
    <Chip label="Done" rgbcolor={green[500]} />,
    "Raymond Ennis"
  ),
  createData(
    "Project Zulu",
    "01/01/2020",
    "31/06/2020",
    <Chip label="Done" rgbcolor={green[500]} />,
    "Matthew Winters"
  ),
];

const DashboardTable = () => (
  <Card mb={6}>
    <CardHeader
      action={
        <IconButton aria-label="settings">
          <MoreVertical />
        </IconButton>
      }
      title="Latest projects"
    />
    <Paper>
      <TableWrapper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Assignee</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.start}</TableCell>
                <TableCell>{row.end}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.assignee}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </Paper>
  </Card>
);

export default DashboardTable;
