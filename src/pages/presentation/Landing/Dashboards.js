import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

import { Box, Chip, Container, Grid, Typography } from "@material-ui/core";

import { spacing } from "@material-ui/system";

const Wrapper = styled.div`
  ${spacing};
  text-align: center;
`;

const DemoContent = styled.div(spacing);

const DemoImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  box-shadow: 0 4px 12px 0 rgba(18, 38, 63, 0.125);
  transition: 0.15s ease-in-out;

  &:hover {
    transform: scale(1.0325);
  }
`;

const DemoChip = styled(Chip)`
  background-color: ${(props) => props.theme.palette.secondary.main};
  border-radius: 5px;
  color: ${(props) => props.theme.palette.common.white};
  font-size: 55%;
  height: 18px;
  margin-top: -16px;
  padding: 3px 0;

  span {
    padding-left: ${(props) => props.theme.spacing(1.375)}px;
    padding-right: ${(props) => props.theme.spacing(1.375)}px;
  }
`;

const TypographyOverline = styled(Typography)`
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

const Demo = ({ to, title, img, newDemo = false }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <DemoContent px={4}>
        <NavLink to={to}>
          <DemoImage
            alt={`${title} - React Admin Template`}
            src={`/static/img/screenshots/${img}.jpg`}
          />
        </NavLink>
        <Box mb={3} />
        <Typography variant="h6">
          {title} {newDemo && <DemoChip label="New" />}
        </Typography>
      </DemoContent>
    </Grid>
  );
};

function Dashboards() {
  return (
    <Wrapper py={20}>
      <Container>
        <TypographyOverline variant="body2" gutterBottom>
          Demos
        </TypographyOverline>
        <Typography variant="h2" component="h3" gutterBottom>
          Multiple dashboards
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          The package includes 50+ prebuilt pages, 6 theme variants and 3
          prebuilt dashboards.
        </Typography>
        <Box mb={8} />

        <Grid container spacing={6}>
          <Demo
            to="/dashboard/default"
            title="Default dashboard"
            img="dashboard-default"
          />
          <Demo
            to="/dashboard/analytics"
            title="Analytics dashboard"
            img="dashboard-analytics"
          />
          <Demo
            to="/dashboard/saas"
            title="SaaS dashboard"
            img="dashboard-saas"
            newDemo
          />
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default Dashboards;
