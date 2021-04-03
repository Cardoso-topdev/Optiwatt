import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import {
  CardContent,
  Grid,
  Link,
  Avatar as MuiAvatar,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Typography,
} from "@material-ui/core";

import { deepOrange, deepPurple, green, pink } from "@material-ui/core/colors";

import {
  Assignment as AssignmentIcon,
  Folder as FolderIcon,
  Pageview as PageviewIcon,
} from "@material-ui/icons";
import { spacing } from "@material-ui/system";

const Card = styled(MuiCard)(spacing);

const Avatar = styled(MuiAvatar)`
  margin-right: ${(props) => props.theme.spacing(2)}px;
`;

const BigAvatar = styled(Avatar)`
  width: 60px;
  height: 60px;
`;

const PinkAvatar = styled(Avatar)`
  background-color: ${pink[500]};
`;

const GreenAvatar = styled(Avatar)`
  background-color: ${green[500]};
`;

const OrangeAvatar = styled(Avatar)`
  background-color: ${deepOrange[500]};
`;

const PurpleAvatar = styled(Avatar)`
  background-color: ${deepPurple[500]};
`;

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

function ImageAvatars() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Image Avatars
        </Typography>
        <Typography variant="body2" gutterBottom>
          Image avatars can be created by passing standard img props src or
          srcSet into the component.
        </Typography>

        <Grid container justify="center" alignItems="center">
          <Avatar alt="Remy Sharp" src="/static/img/avatars/avatar-1.jpg" />
          <BigAvatar alt="Remy Sharp" src="/static/img/avatars/avatar-1.jpg" />
        </Grid>
      </CardContent>
    </Card>
  );
}

function LetterAvatars() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Letter avatars
        </Typography>
        <Typography variant="body2" gutterBottom>
          Avatars containing simple characters can be created by passing your
          string as children.
        </Typography>

        <Grid container justify="center" alignItems="center">
          <Avatar>H</Avatar>
          <OrangeAvatar>N</OrangeAvatar>
          <PurpleAvatar>OP</PurpleAvatar>
        </Grid>
      </CardContent>
    </Card>
  );
}

function IconAvatars() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Icon avatars
        </Typography>
        <Typography variant="body2" gutterBottom>
          Icon avatars are created by passing an icon as children.
        </Typography>

        <Grid container justify="center" alignItems="center">
          <Avatar>
            <FolderIcon />
          </Avatar>
          <PinkAvatar>
            <PageviewIcon />
          </PinkAvatar>
          <GreenAvatar>
            <AssignmentIcon />
          </GreenAvatar>
        </Grid>
      </CardContent>
    </Card>
  );
}

function Avatars() {
  return (
    <React.Fragment>
      <Helmet title="Avatars" />
      <Typography variant="h3" gutterBottom display="inline">
        Avatars
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/">
          Dashboard
        </Link>
        <Link component={NavLink} exact to="/">
          Components
        </Link>
        <Typography>Avatars</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <ImageAvatars />
          <LetterAvatars />
        </Grid>
        <Grid item xs={12} md={6}>
          <IconAvatars />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Avatars;
