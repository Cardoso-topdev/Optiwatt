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
        <code>npm run build</code> creates a build directory with a production
        build of your app. Set up your favorite HTTP server so that a visitor to
        your site is served index.html, and requests to static paths like{" "}
        <code>{`/static/js/main.<hash>.js`}</code> are served with the contents
        of the <code>{`/static/js/main.<hash>.js`}</code> file.
      </Typography>
    </Box>
  );
}

function StaticServer() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Static Server
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        For environments using{" "}
        <Link
          href="https://nodejs.org/en/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Node
        </Link>
        , the easiest way to handle this would be to install{" "}
        <Link
          href="https://github.com/zeit/serve"
          target="_blank"
          rel="noreferrer noopener"
        >
          serve
        </Link>{" "}
        and let it handle the rest:
        <Code>{`npm install -g serve
serve -s build`}</Code>
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        The last command shown above will serve your static site on the port
        5000. Like many of{" "}
        <Link
          href="https://github.com/vercel/serve"
          target="_blank"
          rel="noreferrer noopener"
        >
          serve
        </Link>
        ’s internal settings, the port can be adjusted using the <code>-l</code>{" "}
        or <code>--listen</code> flags:
        <Code>serve -s build -l 4000</Code>
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Run this command to get a full list of the options available:
        <Code>serve -h</Code>
      </Typography>
    </Box>
  );
}

function OtherSolutions() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Other Solutions
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        You don’t necessarily need a static server in order to run a Create
        React App project in production. It also works well when integrated into
        an existing server side app.
      </Typography>
    </Box>
  );
}

function Express() {
  return (
    <Box mb={10}>
      <Typography variant="h4" gutterBottom>
        Express
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Express is a fast, unopinionated, minimalist web framework for Node.js.
        Here’s a programmatic example:
        <Code>{`const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(9000);`}</Code>
      </Typography>
    </Box>
  );
}

function Netlify() {
  return (
    <Box mb={10}>
      <Typography variant="h4" gutterBottom>
        Netlify
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Deploy modern static websites with Netlify. Get CDN, Continuous
        deployment, 1-click HTTPS, and all the services you need.
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        To do a manual deploy to Netlify’s CDN:
        <Code>{`npm install netlify-cli -g
netlify deploy`}</Code>
        Choose <code>build</code> as the path to deploy.
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        To setup continuous delivery:
        <br />
        With this setup Netlify will build and deploy when you push to git or
        open a pull request:
        <ol>
          <li>
            <Link
              href="https://app.netlify.com/signup"
              target="_blank"
              rel="noreferrer noopener"
            >
              Start a new netlify project
            </Link>
          </li>
          <li>Pick your Git hosting service and select your repository</li>
          <li>
            Click <code>Build your site</code>
          </li>
        </ol>
      </Typography>
    </Box>
  );
}

function Deployment() {
  return (
    <React.Fragment>
      <Helmet title="Deployment" />

      <Grid container spacing={6} justify="center">
        <Grid item xs={12} lg={9} xl={7}>
          <Typography variant="h2" gutterBottom display="inline">
            Deployment
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} exact to="/">
              Dashboard
            </Link>
            <Link component={NavLink} exact to="/documentation/welcome">
              Documentation
            </Link>
            <Typography>Deployment</Typography>
          </Breadcrumbs>

          <Divider my={6} />

          <Introduction />
          <StaticServer />
          <OtherSolutions />
          <Express />
          <Netlify />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Deployment;
