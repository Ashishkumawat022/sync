import React, { useState } from "react";
import {
  GoogleMap,
  MarkerF,
  InfoWindow,
  useLoadScript,
  CircleF,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";
import { Spinner } from "react-bootstrap";
import Geocode from "react-geocode";

const MapContainer = () => {
  const OPTIONS = {
    minZoom: 10,
    maxZoom: 13,
  };
  const [clickPin, setClickPin] = useState<any>("");
  const handleOnLoad = (map: any) => {
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend({
      lat: 0,
      lng: 0,
    });
    map.fitBounds(bounds);
  };
  return (
    <GoogleMap
      // onLoad={handleOnLoad}
      // onClick={(e: any) => {
      //   console.log(e, "eeeeee");
      //   const { latLng } = e;
      //   const lat: any = latLng.lat();
      //   const long: any = latLng.long();
      //   console.log(lat, long, "latlng");
      //   Geocode.fromLatLng(lat, long).then((error: any) => {
      //     console.error(error);
      //   });
      //   // setGlobalBooking((prev: BookingRideLocations) => {
      //   //   return {
      //   //     ...prev,
      //   //     pickuplat: lat,
      //   //     pickuplong: long,
      //   //   };
      //   // });
      // }}
      mapContainerStyle={{
        height: "100%",
        width: "100%",
        display: "block",
        pointerEvents: clickPin,
      }}
      //options={OPTIONS}
      zoom={15}
      center={{
        lat: 26.8505,
        lng: 75.7628,
      }}
    >
      {/* <MarkerF
          position={{
            lat: 26.8505,
            lng: 75.7628,
          }}
          onLoad={(marker: any) => {
            console.log(marker, "marker");
            const customIcon = () =>
              Object.assign({
                path: "M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",
                fillColor: "#0096FF",
                fillOpacity: 1,
              });

            marker.setIcon(customIcon());
            return marker;
          }}
        ></MarkerF> */}
    </GoogleMap>
  );
};

export default MapContainer;
