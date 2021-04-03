import React from "react";
import styled, { withTheme } from "styled-components/macro";

import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardHeader,
  IconButton,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import { MoreVertical } from "react-feather";

import { VectorMap } from "react-jvectormap";

import "../../../vendor/jvectormap.css";

const MapContainer = styled.div`
  height: 344px;
`;

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)`
  &:last-child {
    padding-top: 0;
    padding-bottom: ${(props) => props.theme.spacing(4)}px;
  }
`;

function USAMap(props) {
  const options = {
    map: "us_aea",
    regionStyle: {
      initial: {
        fill:
          props.theme.palette.type === "dark"
            ? "rgba(255, 255, 255, 0.3)"
            : "#e3eaef",
      },
    },
    backgroundColor: "transparent",
    containerStyle: {
      width: "100%",
      height: "100%",
    },
    markerStyle: {
      initial: {
        r: 9,
        fill: props.theme.palette.secondary.main,
        "fill-opacity": 1,
        stroke: "#fff",
        "stroke-width": 7,
        "stroke-opacity": 0.4,
      },
      hover: {
        stroke: "#fff",
        "fill-opacity": 1,
        "stroke-width": 1.5,
      },
    },
    zoomOnScroll: false,
    markers: [
      {
        latLng: [37.77, -122.41],
        name: "San Francisco: 375",
      },
      {
        latLng: [40.71, -74.0],
        name: "New York: 350",
      },
      {
        latLng: [39.09, -94.57],
        name: "Kansas City: 250",
      },
      {
        latLng: [36.16, -115.13],
        name: "Las Vegas: 275",
      },
      {
        latLng: [32.77, -96.79],
        name: "Dallas: 225",
      },
    ],
  };

  return (
    <Card mb={4}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertical />
          </IconButton>
        }
        title="Real-Time"
      />
      <CardContent>
        <MapContainer>
          <VectorMap {...options} />
        </MapContainer>
      </CardContent>
    </Card>
  );
}

export default withTheme(USAMap);
