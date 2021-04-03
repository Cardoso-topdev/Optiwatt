import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import {
  Button,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Typography,
} from "@material-ui/core";

import { Close as CloseIcon } from "@material-ui/icons";

import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";

import { spacing } from "@material-ui/system";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Alert = styled(MuiAlert)(spacing);

function SimpleAlerts() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Simple alerts
        </Typography>
        <Typography variant="body2" gutterBottom>
          The alert offers four severity levels that set a distinctive icon and
          color.
        </Typography>

        <Spacer mb={4} />

        <Alert mb={4} severity="error">
          This is an error alert — check it out!
        </Alert>
        <Alert mb={4} severity="warning">
          This is a warning alert — check it out!
        </Alert>
        <Alert mb={4} severity="info">
          This is an info alert — check it out!
        </Alert>
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      </CardContent>
    </Card>
  );
}

function OutlinedAlerts() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Outlined alerts
        </Typography>
        <Typography variant="body2" gutterBottom>
          Two additional variants are available – outlined, and filled:
        </Typography>

        <Spacer mb={4} />

        <Alert mb={4} variant="outlined" severity="error">
          This is an error alert — check it out!
        </Alert>
        <Alert mb={4} variant="outlined" severity="warning">
          This is a warning alert — check it out!
        </Alert>
        <Alert mb={4} variant="outlined" severity="info">
          This is an info alert — check it out!
        </Alert>
        <Alert variant="outlined" severity="success">
          This is a success alert — check it out!
        </Alert>
      </CardContent>
    </Card>
  );
}

function FilledAlerts() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Filled alerts
        </Typography>
        <Typography variant="body2" gutterBottom>
          Two additional variants are available – outlined, and filled:
        </Typography>

        <Spacer mb={4} />

        <Alert mb={4} variant="filled" severity="error">
          This is an error alert — check it out!
        </Alert>
        <Alert mb={4} variant="filled" severity="warning">
          This is a warning alert — check it out!
        </Alert>
        <Alert mb={4} variant="filled" severity="info">
          This is an info alert — check it out!
        </Alert>
        <Alert variant="filled" severity="success">
          This is a success alert — check it out!
        </Alert>
      </CardContent>
    </Card>
  );
}

function AdvancedAlerts() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Advanced alerts
        </Typography>
        <Typography variant="body2" gutterBottom>
          You can use the AlertTitle component to display a formatted title
          above the content.
        </Typography>

        <Spacer mb={4} />

        <Alert mb={4} severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
        <Alert mb={4} severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
        <Alert mb={4} severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
        </Alert>
        <Alert mb={4} severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </CardContent>
    </Card>
  );
}

function ActionAlerts() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Actions
        </Typography>
        <Typography variant="body2" gutterBottom>
          An alert can have an action, such as a close or undo button. It is
          rendered after the message, at the end of the alert.
        </Typography>

        <Spacer mb={4} />

        <Alert mb={4} onClose={() => {}}>
          This is a success alert — check it out!
        </Alert>
        <Alert
          action={
            <Button color="inherit" size="small">
              UNDO
            </Button>
          }
        >
          This is a success alert — check it out!
        </Alert>
      </CardContent>
    </Card>
  );
}

function TransitionAlerts() {
  const [open, setOpen] = React.useState(true);

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Transition
        </Typography>
        <Typography variant="body2" gutterBottom>
          You can use a transition component such as Collapse to transition the
          appearance of the alert.
        </Typography>

        <Spacer mb={4} />

        <Collapse in={open}>
          <Alert
            mb={4}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Close me!
          </Alert>
        </Collapse>
        <Button
          disabled={open}
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
        >
          Re-open
        </Button>
      </CardContent>
    </Card>
  );
}

function Alerts() {
  return (
    <React.Fragment>
      <Helmet title="Alerts" />
      <Typography variant="h3" gutterBottom display="inline">
        Alerts
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/">
          Dashboard
        </Link>
        <Link component={NavLink} exact to="/">
          Components
        </Link>
        <Typography>Alerts</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <SimpleAlerts />
          <OutlinedAlerts />
          <FilledAlerts />
        </Grid>
        <Grid item xs={12} md={6}>
          <AdvancedAlerts />
          <ActionAlerts />
          <TransitionAlerts />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Alerts;
