import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import {
  CardContent,
  ClickAwayListener,
  Fab,
  Fade,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  Divider as MuiDivider,
  IconButton as MuiIconButton,
  Paper as MuiPaper,
  Tooltip,
  Typography,
  Zoom,
} from "@material-ui/core";

import { Add as AddIcon, Delete as DeleteIcon } from "@material-ui/icons";

import { spacing } from "@material-ui/system";

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const IconButton = styled(MuiIconButton)(spacing);

const Button = styled(MuiButton)(spacing);

function SimpleTooltips() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Simple Tooltips
        </Typography>
        <Typography variant="body2" gutterBottom>
          Tooltips display informative text when users hover over, focus on, or
          tap an element.
        </Typography>
        <Paper mt={3}>
          <Tooltip title="Delete">
            <IconButton aria-label="Delete" mr={2}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add" aria-label="Add">
            <Fab color="primary">
              <AddIcon />
            </Fab>
          </Tooltip>
        </Paper>
      </CardContent>
    </Card>
  );
}

function PositionedTooltips() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Positioned Tooltips
        </Typography>
        <Typography variant="body2" gutterBottom>
          The Tooltip has 12 placements choice. They don’t have directional
          arrows; instead, they rely on motion emanating from the source to
          convey direction.
        </Typography>
        <Paper mt={3}>
          <Grid container justify="center">
            <Grid item>
              <Tooltip title="Add" placement="top-start">
                <Button variant="contained" color="secondary" m={1}>
                  top-start
                </Button>
              </Tooltip>
              <Tooltip title="Add" placement="top">
                <Button variant="contained" color="secondary" m={1}>
                  top
                </Button>
              </Tooltip>
              <Tooltip title="Add" placement="top-end">
                <Button variant="contained" color="secondary" m={1}>
                  top-end
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={6}>
              <Tooltip title="Add" placement="left-start">
                <Button variant="contained" color="secondary" m={1}>
                  left-start
                </Button>
              </Tooltip>
              <br />
              <Tooltip title="Add" placement="left">
                <Button variant="contained" color="secondary" m={1}>
                  left
                </Button>
              </Tooltip>
              <br />
              <Tooltip title="Add" placement="left-end">
                <Button variant="contained" color="secondary" m={1}>
                  left-end
                </Button>
              </Tooltip>
            </Grid>
            <Grid
              item
              container
              xs={6}
              alignItems="flex-end"
              direction="column"
              spacing={0}
            >
              <Grid item>
                <Tooltip title="Add" placement="right-start">
                  <Button variant="contained" color="secondary" m={1}>
                    right-start
                  </Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Add" placement="right">
                  <Button variant="contained" color="secondary" m={1}>
                    right
                  </Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Add" placement="right-end">
                  <Button variant="contained" color="secondary" m={1}>
                    right-end
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item>
              <Tooltip title="Add" placement="bottom-start">
                <Button variant="contained" color="secondary" m={1}>
                  bottom-start
                </Button>
              </Tooltip>
              <Tooltip title="Add" placement="bottom">
                <Button variant="contained" color="secondary" m={1}>
                  bottom
                </Button>
              </Tooltip>
              <Tooltip title="Add" placement="bottom-end">
                <Button variant="contained" color="secondary" m={1}>
                  bottom-end
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Paper>
      </CardContent>
    </Card>
  );
}

function TriggersTooltips() {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Triggerable Tooltips
        </Typography>
        <Typography variant="body2" gutterBottom>
          You can define the types of events that cause a tooltip to show.
        </Typography>
        <Paper mt={3}>
          <Grid container>
            <Grid item>
              <Tooltip disableFocusListener title="Add">
                <Button variant="contained" color="secondary" mr={2}>
                  Hover or touch
                </Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip disableHoverListener title="Add">
                <Button variant="contained" color="secondary" mr={2}>
                  Focus or touch
                </Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip disableFocusListener disableTouchListener title="Add">
                <Button variant="contained" color="secondary" mr={2}>
                  Hover
                </Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <ClickAwayListener onClickAway={handleTooltipClose}>
                <div>
                  <Tooltip
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Add"
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      mr={2}
                      onClick={handleTooltipOpen}
                    >
                      Click
                    </Button>
                  </Tooltip>
                </div>
              </ClickAwayListener>
            </Grid>
          </Grid>
        </Paper>
      </CardContent>
    </Card>
  );
}

function TransitionsTooltips() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Simple Tooltips
        </Typography>
        <Typography variant="body2" gutterBottom>
          Tooltips display informative text when users hover over, focus on, or
          tap an element.
        </Typography>
        <Paper mt={3}>
          <Tooltip title="Add">
            <Button variant="contained" color="secondary" mr={2}>
              Grow
            </Button>
          </Tooltip>
          <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title="Add"
          >
            <Button variant="contained" color="secondary" mr={2}>
              Fade
            </Button>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Add">
            <Button variant="contained" color="secondary" mr={2}>
              Zoom
            </Button>
          </Tooltip>
        </Paper>
      </CardContent>
    </Card>
  );
}

function Tooltips() {
  return (
    <React.Fragment>
      <Helmet title="Tooltips" />
      <Typography variant="h3" gutterBottom display="inline">
        Tooltips
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/">
          Dashboard
        </Link>
        <Link component={NavLink} exact to="/">
          Components
        </Link>
        <Typography>Tooltips</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <SimpleTooltips />
          <TriggersTooltips />
          <TransitionsTooltips />
        </Grid>
        <Grid item xs={12} md={6}>
          <PositionedTooltips />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Tooltips;
