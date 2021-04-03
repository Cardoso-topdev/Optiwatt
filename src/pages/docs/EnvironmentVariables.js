import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import {
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Grid,
  Link,
  Typography as MuiTypography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import Code from "../../components/Code";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Typography = styled(MuiTypography)(spacing);

function Introduction() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Introduction
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Your project can consume variables declared in your environment as if
        they were declared locally in your JS files. By default you will have{" "}
        <code>NODE_ENV</code> defined for you, and any other environment
        variables starting with <code>REACT_APP_</code>.
      </Typography>
    </Box>
  );
}

function AddingEnvironmentVariables() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Adding environment variables
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        To define permanent environment variables, create a file called{" "}
        <code>.env</code> in the root of your project:
        <Code>REACT_APP_NOT_SECRET_CODE=abcdef</Code>
        Note: You need to restart the development server after changing{" "}
        <code>.env</code> files.
      </Typography>
    </Box>
  );
}

function AccessingEnvironmentVariables() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Accessing environment variables
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Environment variables will be defined for you on{" "}
        <code>process.env</code>. For example, having an environment variable
        named <code>REACT_APP_NOT_SECRET_CODE</code> will be exposed in your JS
        as <code>process.env.REACT_APP_NOT_SECRET_CODE</code>.
        <Code>{`if (process.env.NODE_ENV !== 'production') {
  // do something
}`}</Code>
        <Code>{`<title>{process.env.REACT_APP_WEBSITE_NAME}</title>`}</Code>
      </Typography>
    </Box>
  );
}

function LearnMore() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Learn more
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        To learn more about environment variables,{" "}
        <Link
          href="https://create-react-app.dev/docs/adding-custom-environment-variables/"
          target="_blank"
          rel="noreferrer noopener"
        >
          click here
        </Link>
        .
      </Typography>
    </Box>
  );
}

function EnvironmentVariables() {
  return (
    <React.Fragment>
      <Helmet title="Environment Variables" />

      <Grid container spacing={6} justify="center">
        <Grid item xs={12} lg={9} xl={7}>
          <Typography variant="h2" gutterBottom display="inline">
            Environment Variables
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} exact to="/">
              Dashboard
            </Link>
            <Link component={NavLink} exact to="/documentation/welcome">
              Documentation
            </Link>
            <Typography>Environment Variables</Typography>
          </Breadcrumbs>

          <Divider my={6} />

          <Introduction />
          <AddingEnvironmentVariables />
          <AccessingEnvironmentVariables />
          <LearnMore />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default EnvironmentVariables;
