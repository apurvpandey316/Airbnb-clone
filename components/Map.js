import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import { getCenter } from "geolib";
function Map({ searchResults }) {
  const coordinates = searchResults.map((item) => ({
    longitude: item.long,
    latitude: item.lat,
  }));
  //   console.log(coordinates);
  const center = getCenter(coordinates);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    zoom: 11,
    latitude: center.latitude,
    longitude: center.longitude,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/apurv316/ckycr0ms1b1f415nudtk5l1fy"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((item, index) => (
        <div key={index}>
          <Marker longitude={item.long} latitude={item.lat}>
            <p
              className="cursor-pointer text-2xl animate-bounce"
              onClick={() => setSelectedLocation(item)}
              role="img"
              aria-label="push-pin"
            >
              📍
            </p>
          </Marker>
          {selectedLocation.long === item.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={item.lat}
              longitude={item.long}
            >
              {item.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
