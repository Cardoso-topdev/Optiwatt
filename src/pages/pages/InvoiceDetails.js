import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import {
  CardContent,
  Grid,
  Link,
  Button as MuiButton,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography as MuiTypography,
} from "@material-ui/core";

import { spacing, display } from "@material-ui/system";

const Card = styled(MuiCard)`
  ${spacing};

  box-shadow: none;
`;

const Divider = styled(MuiDivider)(spacing);

const Shadow = styled.div`
  box-shadow: ${(props) => props.theme.shadows[1]};
`;

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Button = styled(MuiButton)(spacing);

const Typography = styled(MuiTypography)(display);

function InvoiceDetails() {
  return (
    <React.Fragment>
      <Helmet title="Invoice Details" />

      <Typography variant="h3" gutterBottom display="inline">
        Invoice #000112
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/">
          Dashboard
        </Link>
        <Link component={NavLink} exact to="/">
          Pages
        </Link>
        <Link component={NavLink} exact to="/">
          Invoices
        </Link>
        <Typography>Details</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container justify="center">
        <Grid item xs={12} lg={10}>
          <Shadow>
            <Card px={6} pt={6}>
              <CardContent>
                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <Typography variant="body2" gutterBottom>
                      Hello Anna Walley,
                      <br />
                      This is the receipt for a payment of $268.85 (USD) you
                      made to Material App.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="caption">Payment No.</Typography>
                    <Typography variant="body2">741037024</Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="caption" align="right" display="block">
                      Payment Date
                    </Typography>
                    <Typography variant="body2" align="right">
                      January 2, 2020 - 03:45 pm
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="caption">Client</Typography>
                    <Typography variant="body2">
                      Anna Walley
                      <br />
                      4183 Forest Avenue
                      <br />
                      New York City
                      <br />
                      10011
                      <br />
                      USA
                      <br />
                      <Link href="mailto:anna@walley.com">anna@walley.com</Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="caption" align="right" display="block">
                      Payment To
                    </Typography>
                    <Typography variant="body2" align="right">
                      Material App LLC
                      <br />
                      354 Roy Alley
                      <br />
                      Denver
                      <br />
                      80202
                      <br />
                      USA
                      <br />
                      <Link href="mailto:info@material-app.com">
                        info@material-app.com
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card px={6}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell align="right">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Material App Theme Customization
                    </TableCell>
                    <TableCell>2</TableCell>
                    <TableCell align="right">$150.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Monthly Subscription
                    </TableCell>
                    <TableCell>3</TableCell>
                    <TableCell align="right">$25.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Additional Service
                    </TableCell>
                    <TableCell>2</TableCell>
                    <TableCell align="right">$100.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell />
                    <TableCell>Subtotal</TableCell>
                    <TableCell align="right">$275.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell />
                    <TableCell>Shipping</TableCell>
                    <TableCell align="right">$8.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell />
                    <TableCell>Discount</TableCell>
                    <TableCell align="right">5%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell />
                    <TableCell>Total</TableCell>
                    <TableCell align="right">$268.85</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
            <Card pb={6} px={6}>
              <CardContent style={{ textAlign: "center" }}>
                <div>
                  <Typography variant="caption" gutterBottom align="center">
                    Extra note: Please send all items at the same time to the
                    shipping address. Thanks in advance.
                  </Typography>
                </div>
                <Button variant="contained" color="primary" mt={2}>
                  Print this receipt
                </Button>
              </CardContent>
            </Card>
          </Shadow>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default InvoiceDetails;
