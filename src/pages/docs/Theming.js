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
        This theme uses Material-UI in combination with Styled-Components. On
        this page we try to cover the basics on how to adjust the color palette
        and other styles.
      </Typography>
    </Box>
  );
}

function HowItWorks() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        How it works
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Material-UI's{" "}
        <Link
          href="https://material-ui.com/customization/theming/#createmuitheme-options-args-theme"
          target="_blank"
          rel="noreferrer noopener"
        >
          createMuiTheme
        </Link>{" "}
        is used to extend Material-UI's default styling. Material App is using
        both the Material-UI ThemeProvider as Styled-Components ThemeProvider.
        This way, global theme variables will be applied to both Material-UI's
        components as custom Styled-Components.
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        How to access theme variables from a component:
        <Code>{`const CustomComponent = styled.div\`
  background: \${props => props.theme.palette.primary.main};
  color: \${props => props.theme.palette.common.white};
  padding: \${props => props.theme.spacing(2)}px;
\`;

const Custom = ({children}) => (
  <CustomComponent>
    {children}
  </CustomComponent>
);`}</Code>
      </Typography>
    </Box>
  );
}

function AdjustingTheme() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Adjusting theme variables
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        In the <code>/theme</code> folder you can find all the theme variables.
        They are categorized by palettes, shadows, typography, overrides and
        theme variants. You are able to control each on them inndividually.
        Typography example:
        <Code>{`const typography = {
  h1: {
    fontSize: "2rem",
    fontWeight: 600,
    lineHeight: 1.2
  },
  h2: {
    fontSize: "1.75rem",
    fontWeight: 600,
    lineHeight: 1.2
  },
  h3: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: 1.2
  },
  //etc
};`}</Code>
      </Typography>
    </Box>
  );
}

function Theming() {
  return (
    <React.Fragment>
      <Helmet title="Theming" />

      <Grid container spacing={6} justify="center">
        <Grid item xs={12} lg={9} xl={7}>
          <Typography variant="h2" gutterBottom display="inline">
            Theming
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} exact to="/">
              Dashboard
            </Link>
            <Link component={NavLink} exact to="/documentation/welcome">
              Documentation
            </Link>
            <Typography>Theming</Typography>
          </Breadcrumbs>

          <Divider my={6} />

          <Introduction />
          <HowItWorks />
          <AdjustingTheme />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Theming;
