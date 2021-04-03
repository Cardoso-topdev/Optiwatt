import React, { useState } from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import {
  CardContent,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  CircularProgress as MuiCircularProgress,
  Divider as MuiDivider,
  LinearProgress as MuiLinearProgress,
  Paper as MuiPaper,
  Typography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const CircularProgress = styled(MuiCircularProgress)(spacing);

const LinearProgress = styled(MuiLinearProgress)(spacing);

function CircularIndeterminate() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Circular Indeterminate
        </Typography>
        <Paper mt={3}>
          <CircularProgress m={2} />
          <CircularProgress m={2} color="secondary" />
        </Paper>
      </CardContent>
    </Card>
  );
}

function CircularDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Circular Determinate
        </Typography>
        <Paper mt={3}>
          <CircularProgress variant="determinate" value={progress} />
        </Paper>
      </CardContent>
    </Card>
  );
}

function CircularStatic() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Circular Static
        </Typography>
        <Paper mt={3}>
          <CircularProgress m={2} variant="determinate" value={5} />
          <CircularProgress m={2} variant="determinate" value={25} />
          <CircularProgress m={2} variant="determinate" value={50} />
          <CircularProgress m={2} variant="determinate" value={75} />
          <CircularProgress m={2} variant="determinate" value={100} />
        </Paper>
      </CardContent>
    </Card>
  );
}

function LinearIndeterminate() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Linear Indeterminate
        </Typography>
        <Paper mt={3}>
          <LinearProgress my={2} />
          <LinearProgress my={2} color="secondary" />
        </Paper>
      </CardContent>
    </Card>
  );
}

function LinearDeterminate() {
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Linear Determinate
        </Typography>
        <Paper mt={3}>
          <LinearProgress my={2} variant="determinate" value={progress} />
          <LinearProgress
            my={2}
            variant="determinate"
            value={progress}
            color="secondary"
          />
        </Paper>
      </CardContent>
    </Card>
  );
}

function LinearBuffer() {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Linear Buffer
        </Typography>
        <Paper mt={3}>
          <LinearProgress
            my={2}
            variant="buffer"
            value={progress}
            valueBuffer={buffer}
          />
          <LinearProgress
            my={2}
            color="secondary"
            variant="buffer"
            value={progress}
            valueBuffer={buffer}
          />
        </Paper>
      </CardContent>
    </Card>
  );
}

function LinearQuery() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Linear Query
        </Typography>
        <Paper mt={3}>
          <LinearProgress my={2} variant="query" />
          <LinearProgress my={2} variant="query" color="secondary" />
        </Paper>
      </CardContent>
    </Card>
  );
}

function Progress() {
  return (
    <React.Fragment>
      <Helmet title="Progress" />
      <Typography variant="h3" gutterBottom display="inline">
        Progress
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/">
          Dashboard
        </Link>
        <Link component={NavLink} exact to="/">
          Components
        </Link>
        <Typography>Progress</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <CircularIndeterminate />
          <CircularDeterminate />
          <CircularStatic />
        </Grid>
        <Grid item xs={12} md={6}>
          <LinearIndeterminate />
          <LinearDeterminate />
          <LinearBuffer />
          <LinearQuery />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Progress;
