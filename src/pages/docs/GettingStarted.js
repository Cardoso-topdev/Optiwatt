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

function Contents() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Contents
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Inside the zip-file you'll find the following directories and files.
        Both compiled and minified distrubution files, as well as the source
        files are included in the package.
      </Typography>

      <Code>{`theme/
  ├── .gitignore
  ├── package.json
  ├── package-lock.json
  ├── README.md
  ├── build/
  ├── public/
  │   ├── index.html
  │   └── manifest.json
  └── src/
      ├── components/
      ├── layouts/
      ├── pages/
      ├── redux/
      ├── routes/
      ├── vendor/
      ├── App.js
      ├── index.js
      └── theme.js`}</Code>
    </Box>
  );
}

function QuickStart() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Quick start
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        This project was bootstrapped with{" "}
        <Link
          href="https://github.com/facebook/create-react-app"
          target="_blank"
        >
          Create React App
        </Link>
        . You'll need to install Node.js (v12 or up) before using Material App.
      </Typography>

      <Typography variant="subtitle1" gutterBottom my={4}>
        Once{" "}
        <Link href="https://nodejs.org/en/" target="_blank">
          Node.js
        </Link>{" "}
        is installed, run <code>npm install</code> to install the rest of
        Material App's dependencies. All dependencies will be downloaded to the{" "}
        <code>node_modules</code> directory.
        <br />
        <Code>npm install</Code>
      </Typography>

      <Typography variant="subtitle1" gutterBottom my={4}>
        Now you're ready to modify the source files and generate new{" "}
        <code>build/</code>
        files. Material App is using webpack and webpack-serve to automatically
        detect file changes and start a local webserver at{" "}
        <code>http://localhost:3000</code>.
        <br />
        <Code>npm start</Code>
      </Typography>
    </Box>
  );
}

function BuildTools() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Build tools
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Start a local webserver at <code>http://localhost:3000</code> and detect
        file changes:
        <br />
        <Code>npm start</Code>
      </Typography>

      <Typography variant="subtitle1" gutterBottom my={4}>
        Compile, optimize, minify and uglify all source files to build/:
        <br />
        <Code>npm run build</Code>
      </Typography>
    </Box>
  );
}

function GettingStarted() {
  return (
    <React.Fragment>
      <Helmet title="Getting Started" />

      <Grid container spacing={6} justify="center">
        <Grid item xs={12} lg={9} xl={7}>
          <Typography variant="h2" gutterBottom display="inline">
            Getting Started
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} exact to="/">
              Dashboard
            </Link>
            <Link component={NavLink} exact to="/documentation/welcome">
              Documentation
            </Link>
            <Typography>Getting Started</Typography>
          </Breadcrumbs>

          <Divider my={6} />

          <QuickStart />
          <BuildTools />
          <Contents />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default GettingStarted;
