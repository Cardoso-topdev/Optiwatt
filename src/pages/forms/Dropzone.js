import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import {
  Button,
  CardContent,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Typography,
} from "@material-ui/core";

import { DropzoneArea, DropzoneDialog } from "material-ui-dropzone";

import { spacing } from "@material-ui/system";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const GlobalStyleDropzone = createGlobalStyle`
  [class^="DropzoneArea-dropZone"] {
    min-height: 160px;
  }
`;

function DefaultDropzone() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Default Dropzone
        </Typography>
        <Typography variant="body2" gutterBottom>
          Material-UI-Dropzone is a React component using Material-UI and is
          based on the excellent react-dropzone library.
        </Typography>

        <Spacer mb={4} />
        <DropzoneArea showFileNamesInPreview={true} showFileNames={true} />
      </CardContent>
    </Card>
  );
}

function DialogDropzone() {
  const [open, setOpen] = useState(false);

  const handleSave = (files) => {
    //Saving files to state for further use and closing Modal.
    console.log("files:", files);

    setOpen(false);
  };

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Dialog Dropzone
        </Typography>
        <Typography variant="body2" gutterBottom>
          Material-UI-Dropzone is a React component using Material-UI and is
          based on the excellent react-dropzone library.
        </Typography>

        <Spacer mb={4} />

        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(true)}
        >
          Open dialog
        </Button>

        <DropzoneDialog
          open={open}
          onSave={handleSave}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={() => setOpen(false)}
        />
      </CardContent>
    </Card>
  );
}

function Dropzone() {
  return (
    <React.Fragment>
      <GlobalStyleDropzone />
      <Helmet title="Dropzone" />
      <Typography variant="h3" gutterBottom display="inline">
        Dropzone
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/">
          Dashboard
        </Link>
        <Link component={NavLink} exact to="/">
          Components
        </Link>
        <Typography>Dropzone</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <DefaultDropzone />
        </Grid>
        <Grid item xs={12} md={6}>
          <DialogDropzone />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Dropzone;
