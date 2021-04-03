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
        Hello, I hope you find this theme useful. Material App has been crafted
        on top of Material UI. The included demo pages don't replace the
        official ones, but provide a clear view of all new components and
        extended styles that this theme provides on top of Material UI.
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        The docs includes information to understand how the theme is organized,
        how to compile and extend it to fit your needs, and how to make changes
        to the source code.
      </Typography>
    </Box>
  );
}

function TableOfContents() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Table of Contents
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        <ul>
          <li>
            <Link component={NavLink} exact to="/documentation/getting-started">
              Getting Started
            </Link>
          </li>
          <li>
            <Link
              component={NavLink}
              exact
              to="/documentation/environment-variables"
            >
              Environment Variables
            </Link>
          </li>
          <li>
            <Link component={NavLink} exact to="/documentation/deployment">
              Deployment
            </Link>
          </li>
          <li>
            <Link component={NavLink} exact to="/documentation/theming">
              Theming
            </Link>
          </li>
          <li>
            <Link
              component={NavLink}
              exact
              to="/documentation/state-management"
            >
              State Management
            </Link>
          </li>
          <li>
            <Link component={NavLink} exact to="/documentation/api-calls">
              API Calls
            </Link>
          </li>
          <li>
            <Link
              component={NavLink}
              exact
              to="/documentation/eslint-and-prettier"
            >
              ESLint & Prettier
            </Link>
          </li>
          <li>
            <Link component={NavLink} exact to="/documentation/support">
              Support
            </Link>
          </li>
          <li>
            <Link component={NavLink} exact to="/changelog">
              Changelog
            </Link>
          </li>
        </ul>
      </Typography>
    </Box>
  );
}
function SomethingMissing() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Something missing?
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        If something is missing in the documentation or if you found some part
        confusing, please send us an email (
        <Link href="mailto:support@bootlab.io">support@bootlab.io</Link>) with
        your suggestions for improvement. We love hearing from you!
      </Typography>
    </Box>
  );
}

function Welcome() {
  return (
    <React.Fragment>
      <Helmet title="Getting Started" />

      <Grid container spacing={6} justify="center">
        <Grid item xs={12} lg={9} xl={7}>
          <Typography variant="h2" gutterBottom display="inline">
            Documentation
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} exact to="/">
              Dashboard
            </Link>
            <Typography>Documentation</Typography>
          </Breadcrumbs>

          <Divider my={6} />

          <Introduction />
          <TableOfContents />
          <SomethingMissing />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Welcome;
