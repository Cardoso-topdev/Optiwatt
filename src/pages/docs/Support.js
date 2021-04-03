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

function Support() {
  return (
    <React.Fragment>
      <Helmet title="Support" />

      <Grid container spacing={6} justify="center">
        <Grid item xs={12} lg={9} xl={7}>
          <Typography variant="h2" gutterBottom display="inline">
            Support
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} exact to="/">
              Dashboard
            </Link>
            <Link component={NavLink} exact to="/documentation/welcome">
              Documentation
            </Link>
            <Typography>Support</Typography>
          </Breadcrumbs>

          <Divider my={6} />

          <Box mb={10}>
            <Typography variant="subtitle1" gutterBottom my={4}>
              Our support mainly covers pre-sale questions, basic theme
              questions and bug reports through our support email:{" "}
              <Link href="mailto:support@bootlab.io">support@bootlab.io</Link>.
              To be eligible to request the technical support you must have
              purchased the theme and have at least one Standard, Standard Plus
              or Extended License.
              <br />
              <br />
              When you send a support request please do describe your issue with
              as much detail as possible. If you can provide a link to your
              developing site then this can help us to solve your issue faster.
              Upon submitting a bug report, we will take it as a high priority
              case and we will release the fix with upcoming releases or we can
              send the fix to a customer via email if the customer needs the fix
              urgently.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Support;
