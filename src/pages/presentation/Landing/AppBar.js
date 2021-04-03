import React from "react";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import { Link } from "react-router-dom";

import {
  AppBar,
  Button as MuiButton,
  Container,
  Grid,
  Hidden,
  Toolbar,
} from "@material-ui/core";

import { ReactComponent as Logo } from "../../../vendor/logo.svg";

const Button = styled(MuiButton)(spacing);

const Brand = styled.div`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

const BrandIcon = styled(Logo)`
  margin-right: ${(props) => props.theme.spacing(2)}px;
  margin-top: -2px;
  color: ${(props) => props.theme.sidebar.header.brand.color};
  fill: ${(props) => props.theme.sidebar.header.brand.color};
  width: 32px;
  height: 32px;

  vertical-align: middle;
  display: inline;
`;

const AppBarComponent = () => (
  <React.Fragment>
    <AppBar position="relative" color="transparent" elevation={0}>
      <Toolbar>
        <Container>
          <Grid container alignItems="center">
            <Grid item>
              <Brand>
                <BrandIcon />
                Material App
              </Brand>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Hidden smDown>
                <Button
                  ml={2}
                  color="inherit"
                  component={Link}
                  to="/dashboard/analytics"
                  target="_blank"
                >
                  Live Preview
                </Button>
                <Button
                  ml={2}
                  color="inherit"
                  component={Link}
                  to="/documentation/welcome"
                  target="_blank"
                >
                  Documentation
                </Button>
                <Button ml={2} color="inherit" href="mailto:info@bootlab.io">
                  Support
                </Button>
              </Hidden>
              <Button
                ml={2}
                color="primary"
                variant="contained"
                href="https://material-ui.com/store/items/material-app/"
                target="_blank"
              >
                Get Material App
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  </React.Fragment>
);

export default AppBarComponent;
