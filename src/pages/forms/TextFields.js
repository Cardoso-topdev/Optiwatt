import React from "react";
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
  TextField as MuiTextField,
  Typography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const TextFieldSpacing = styled(MuiTextField)(spacing);

const TextField = styled(TextFieldSpacing)`
  width: 200px;
`;

function DefaultTextFields() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Text Fields
        </Typography>
        <Typography variant="body2" gutterBottom>
          The <code>TextField</code> wrapper component is a complete form
          control including a label, input and help text.
        </Typography>
        <Paper mt={3}>
          <form noValidate autoComplete="off">
            <TextField
              m={2}
              required
              id="standard-required"
              label="Required"
              defaultValue="Hello World"
            />
            <TextField
              m={2}
              disabled
              id="standard-disabled"
              label="Disabled"
              defaultValue="Hello World"
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              m={2}
            />
            <TextField
              id="standard-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
              m={2}
            />
            <TextField
              id="standard-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              m={2}
            />
            <TextField
              m={2}
              id="standard-search"
              label="Search field"
              type="search"
            />
            <TextField
              id="standard-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
              m={2}
            />
          </form>
        </Paper>
      </CardContent>
    </Card>
  );
}

function OutlinedTextFields() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Outlined Text Fields
        </Typography>
        <Typography variant="body2" gutterBottom>
          <code>TextField</code> supports outlined styling.
        </Typography>
        <Paper mt={3}>
          <form noValidate autoComplete="off">
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="Hello World"
              variant="outlined"
              m={2}
            />
            <TextField
              disabled
              id="standard-disabled"
              label="Disabled"
              defaultValue="Hello World"
              variant="outlined"
              m={2}
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              m={2}
            />
            <TextField
              id="standard-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              m={2}
            />
            <TextField
              id="standard-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              m={2}
            />
            <TextField
              id="standard-search"
              label="Search field"
              type="search"
              variant="outlined"
              m={2}
            />
            <TextField
              id="standard-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
              variant="outlined"
              m={2}
            />
          </form>
        </Paper>
      </CardContent>
    </Card>
  );
}

function TextFields() {
  return (
    <React.Fragment>
      <Helmet title="Text Fields" />
      <Typography variant="h3" gutterBottom display="inline">
        Text Fields
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/">
          Dashboard
        </Link>
        <Link component={NavLink} exact to="/">
          Forms
        </Link>
        <Typography>Text Fields</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <DefaultTextFields />
          <OutlinedTextFields />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default TextFields;
