import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components/macro";

import { CardContent, Card as MuiCard, Typography } from "@material-ui/core";
import { spacing } from "@material-ui/system";

import GoogleMapReact from "google-map-react";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const GoogleMapReactWrapper = styled.div`
  height: 300px;
  width: 100%;
`;

function Streetview() {
  const options = {
    center: {
      lat: 40.712784,
      lng: -74.005941,
    },
    zoom: 14,
  };

  const getMapOptions = () => {
    return {
      fullscreenControl: true,
      mapTypeControl: true,
      scaleControl: true,
      scrollwheel: false,
      streetViewControl: true,
    };
  };

  const apiIsLoaded = (map, maps) => {
    if (map) {
      const panorama = new maps.StreetViewPanorama(
        ReactDOM.findDOMNode(panoramaRef.current),
        {
          position: {
            lat: 42.345573,
            lng: -71.098326,
          },
          pov: {
            heading: 160,
            pitch: 0,
          },
          visible: true,
        }
      );
      map.setStreetView(panorama);
    }
  };

  const panoramaRef = React.createRef();

  return (
    <Card mb={1}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Streetview
        </Typography>
        <Typography variant="body2" gutterBottom>
          Panoramic 360 degree views from designated roads throughout its
          coverage area.
        </Typography>

        <Spacer mb={6} />

        <GoogleMapReactWrapper>
          <GoogleMapReact
            ref={panoramaRef}
            options={getMapOptions}
            bootstrapURLKeys={{
              key: "AIzaSyA-aWrwgr64q4b3TEZwQ0lkHI4lZK-moM4",
            }}
            defaultCenter={options.center}
            defaultZoom={options.zoom}
            onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
            yesIWantToUseGoogleMapApiInternals={true}
          />
        </GoogleMapReactWrapper>
      </CardContent>
    </Card>
  );
}

export default Streetview;
