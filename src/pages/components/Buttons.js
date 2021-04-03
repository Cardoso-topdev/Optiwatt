import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import {
  CardContent,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  Divider as MuiDivider,
  Fab as MuiFab,
  IconButton as MuiIconButton,
  Typography,
} from "@material-ui/core";

import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  CloudUpload as CloudUploadIcon,
  KeyboardVoice as KeyboardVoiceIcon,
  Navigation as NavigationIcon,
  Save as SaveIcon,
} from "@material-ui/icons";

import { spacing } from "@material-ui/system";

const Card = styled(MuiCard)(spacing);

const Button = styled(MuiButton)(spacing);

const Fab = styled(MuiFab)(spacing);

const IconButton = styled(MuiIconButton)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

function ContainedButtons() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Contained Buttons
        </Typography>
        <Typography variant="body2" gutterBottom>
          Contained buttons are high-emphasis, distinguished by their use of
          elevation and fill.
        </Typography>
        <Button mr={2} variant="contained">
          Default
        </Button>
        <Button mr={2} variant="contained" color="primary">
          Primary
        </Button>
        <Button mr={2} variant="contained" color="secondary">
          Secondary
        </Button>
        <Button mr={2} variant="contained" color="secondary" disabled>
          Disabled
        </Button>
        <Button mr={2} variant="contained" href="#contained-buttons">
          Link
        </Button>
      </CardContent>
    </Card>
  );
}

function TextButtons() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Text Buttons
        </Typography>
        <Typography variant="body2" gutterBottom>
          Text buttons are typically used for less-pronounced actions in your
          app.
        </Typography>
        <Button mr={2}>Default</Button>
        <Button mr={2} color="primary">
          Primary
        </Button>
        <Button mr={2} color="secondary">
          Secondary
        </Button>
        <Button mr={2} disabled>
          Disabled
        </Button>
        <Button mr={2} href="#text-buttons">
          Link
        </Button>
      </CardContent>
    </Card>
  );
}

function OutlinedButtons() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Outlined Buttons
        </Typography>
        <Typography variant="body2" gutterBottom>
          Outlined buttons are medium-emphasis buttons which contain actions
          that are not that important.
        </Typography>
        <Button mr={2} variant="outlined">
          Default
        </Button>
        <Button mr={2} variant="outlined" color="primary">
          Primary
        </Button>
        <Button mr={2} variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button mr={2} variant="outlined" disabled>
          Disabled
        </Button>
        <Button mr={2} variant="outlined" href="#outlined-buttons">
          Link
        </Button>
      </CardContent>
    </Card>
  );
}

function FloatingActionButtons() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Floating Action Buttons
        </Typography>
        <Typography variant="body2" gutterBottom>
          A floating action button (FAB) performs the primary, or most common,
          action on a screen.
        </Typography>
        <Fab mx={2} color="primary" aria-label="Add">
          <AddIcon />
        </Fab>
        <Fab mx={2} color="secondary" aria-label="Edit">
          <EditIcon />
        </Fab>
        <Fab mx={2} variant="extended" aria-label="Delete">
          <NavigationIcon />
          Extended
        </Fab>
        <Fab mx={2} disabled aria-label="Delete">
          <DeleteIcon />
        </Fab>
      </CardContent>
    </Card>
  );
}

function ButtonSizes() {
  return (
    <Card mb={6}>
      <CardContent>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Button Sizes
          </Typography>
          <Typography variant="body2" gutterBottom>
            Fancy larger or smaller buttons? Use the size property.
          </Typography>
        </React.Fragment>
        <div>
          <Button mr={2} size="small">
            Small
          </Button>
          <Button mr={2} size="medium">
            Medium
          </Button>
          <Button mr={2} size="large">
            Large
          </Button>
        </div>
        <div>
          <Button mr={2} variant="outlined" size="small" color="primary">
            Small
          </Button>
          <Button mr={2} variant="outlined" size="medium" color="primary">
            Medium
          </Button>
          <Button mr={2} variant="outlined" size="large" color="primary">
            Large
          </Button>
        </div>
        <div>
          <Button mr={2} variant="contained" size="small" color="primary">
            Small
          </Button>
          <Button mr={2} variant="contained" size="medium" color="primary">
            Medium
          </Button>
          <Button mr={2} variant="contained" size="large" color="primary">
            Large
          </Button>
        </div>
        <div>
          <Fab mx={2} size="small" color="secondary" aria-label="Add">
            <AddIcon />
          </Fab>
          <Fab mx={2} size="medium" color="secondary" aria-label="Add">
            <AddIcon />
          </Fab>
          <Fab mx={2} color="secondary" aria-label="Add">
            <AddIcon />
          </Fab>
        </div>
        <div>
          <IconButton mx={2} aria-label="Delete">
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton mx={2} aria-label="Delete">
            <DeleteIcon />
          </IconButton>
          <IconButton mx={2} aria-label="Delete">
            <DeleteIcon fontSize="large" />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}

function IconButtons() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Icon Buttons
        </Typography>
        <Typography variant="body2" gutterBottom>
          Sometimes you might want to have icons for certain button to enhance
          the UX.
        </Typography>

        <Button mr={2} variant="contained" color="primary">
          Add
          <AddIcon />
        </Button>
        <Button mr={2} variant="contained" color="secondary">
          Edit
          <EditIcon />
        </Button>
        <Button mr={2} variant="contained" color="default">
          Upload
          <CloudUploadIcon />
        </Button>
        <Button mr={2} variant="contained" disabled color="secondary">
          <KeyboardVoiceIcon />
          Talk
        </Button>
        <Button mr={2} variant="contained" size="small">
          <SaveIcon />
          Save
        </Button>
      </CardContent>
    </Card>
  );
}

function Buttons() {
  return (
    <React.Fragment>
      <Helmet title="Buttons" />
      <Typography variant="h3" gutterBottom display="inline">
        Buttons
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/">
          Dashboard
        </Link>
        <Link component={NavLink} exact to="/">
          Components
        </Link>
        <Typography>Buttons</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <ContainedButtons />
          <OutlinedButtons />
          <TextButtons />
          <IconButtons />
        </Grid>
        <Grid item xs={12} md={6}>
          <ButtonSizes />
          <FloatingActionButtons />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Buttons;
