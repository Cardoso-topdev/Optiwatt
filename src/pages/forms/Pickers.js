import React, { useState } from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import {
  CardContent,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Paper as MuiPaper,
  Typography,
  TextField,
} from "@material-ui/core";

import { TimePicker, DatePicker, DateTimePicker } from "@material-ui/pickers";

import { spacing } from "@material-ui/system";

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

function DatePickers() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Date pickers
        </Typography>
        <Typography variant="body2" gutterBottom>
          A native date picker example with <code>type="date"</code>, it can be
          used as a calendar too.
        </Typography>
        <Paper mt={3}>
          <form noValidate>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </Paper>
      </CardContent>
    </Card>
  );
}

function DateAndTimePickers() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Date & Time pickers
        </Typography>
        <Typography variant="body2" gutterBottom>
          A native date & time picker example with{" "}
          <code>type="datetime-local"</code>.
        </Typography>
        <Paper mt={3}>
          <form noValidate>
            <TextField
              id="datetime-local"
              label="Next appointment"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </Paper>
      </CardContent>
    </Card>
  );
}

function TimePickers() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Time pickers
        </Typography>
        <Typography variant="body2" gutterBottom>
          A native time picker example with <code>type="time"</code>.
        </Typography>
        <Paper mt={3}>
          <form noValidate>
            <TextField
              id="time"
              label="Alarm clock"
              type="time"
              defaultValue="07:30"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </form>
        </Paper>
      </CardContent>
    </Card>
  );
}

function MaterialUIPickersDatePicker() {
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Material-UI pickers | Date picker
        </Typography>
        <Typography variant="body2" gutterBottom>
          Date pickers use a dialog window or an inline popover to select a
          single date.
        </Typography>
        <Paper mt={3}>
          <DatePicker
            margin="normal"
            label="Date picker"
            value={selectedDate}
            onChange={setSelectedDate}
          />
        </Paper>
      </CardContent>
    </Card>
  );
}

function MaterialUIPickersTimePicker() {
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Material-UI pickers | Time picker
        </Typography>
        <Typography variant="body2" gutterBottom>
          Time pickers use a dialog to select a single time (in the
          hours:minutes format).
        </Typography>
        <Paper mt={3}>
          <TimePicker
            margin="normal"
            label="Time picker"
            value={selectedDate}
            onChange={setSelectedDate}
          />
        </Paper>
      </CardContent>
    </Card>
  );
}

function MaterialUIPickersDateAndTimePicker() {
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Material-UI pickers | Date & Time picker
        </Typography>
        <Typography variant="body2" gutterBottom>
          Time pickers use a dialog to select a single time (in the
          hours:minutes format).
        </Typography>
        <Paper mt={3}>
          <DateTimePicker
            margin="normal"
            label="Date & Time picker"
            value={selectedDate}
            onChange={setSelectedDate}
          />
        </Paper>
      </CardContent>
    </Card>
  );
}

function Pickers() {
  return (
    <React.Fragment>
      <Helmet title="Pickers" />
      <Typography variant="h3" gutterBottom display="inline">
        Pickers
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/">
          Dashboard
        </Link>
        <Link component={NavLink} exact to="/">
          Forms
        </Link>
        <Typography>Pickers</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <DatePickers />
          <TimePickers />
          <DateAndTimePickers />
        </Grid>
        <Grid item xs={12} md={6}>
          <MaterialUIPickersDatePicker />
          <MaterialUIPickersTimePicker />
          <MaterialUIPickersDateAndTimePicker />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Pickers;
