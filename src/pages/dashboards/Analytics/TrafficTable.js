import React from "react";
import styled from "styled-components/macro";

import {
  Card as MuiCard,
  CardHeader,
  Chip as MuiChip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { red, green } from "@material-ui/core/colors";

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

const TableWrapper = styled.div`
  overflow-y: auto;
  max-width: calc(100vw - ${(props) => props.theme.spacing(12)}px);
`;

// Data
let id = 0;
function createData(source, users, sessions, bounce, avg) {
  id += 1;
  return { id, source, users, sessions, bounce, avg };
}

const rows = [
  createData(
    "Google",
    "1023",
    "1265",
    <Chip label="30%" rgbcolor={green[500]} />,
    "00:06:25"
  ),
  createData(
    "Direct",
    "872",
    "1077",
    <Chip label="63%" rgbcolor={red[500]} />,
    "00:09:18"
  ),
  createData(
    "Twitter",
    "812",
    "1003",
    <Chip label="28%" rgbcolor={green[500]} />,
    "00:05:56"
  ),
  createData(
    "GitHub",
    "713",
    "881",
    <Chip label="22%" rgbcolor={green[500]} />,
    "00:06:19"
  ),
  createData(
    "DuckDuckGo",
    "693",
    "856",
    <Chip label="56%" rgbcolor={red[500]} />,
    "00:09:12"
  ),
  createData(
    "Facebook",
    "623",
    "770",
    <Chip label="20%" rgbcolor={green[500]} />,
    "00:04:42"
  ),
];

const TrafficTable = () => (
  <Card mb={3}>
    <CardHeader
      action={
        <IconButton aria-label="settings">
          <MoreVertical />
        </IconButton>
      }
      title="Traffic sources"
    />

    <Paper>
      <TableWrapper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Source</TableCell>
              <TableCell align="right">Users</TableCell>
              <TableCell align="right">Sessions</TableCell>
              <TableCell align="right">Bounce Rate</TableCell>
              <TableCell align="right">Avg. Session Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.source}
                </TableCell>
                <TableCell align="right">{row.users}</TableCell>
                <TableCell align="right">{row.sessions}</TableCell>
                <TableCell align="right">{row.bounce}</TableCell>
                <TableCell align="right">{row.avg}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </Paper>
  </Card>
);

export default TrafficTable;
