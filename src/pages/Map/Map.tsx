import React, { useState, useCallback, useRef, MutableRefObject } from 'react';
import { GoogleMap, useJsApiLoader, Autocomplete, Marker } from '@react-google-maps/api';

const center = {
  lat: 40.3947365,
  lng: 49.689845
};

const mapContainerStyle = {
  width: '100%',
  height: '80vh'
};

const inputStyle = {
  width: '300px',
  height: '40px',
  paddingLeft: '20px'
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY as string,
    libraries: ['places']
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [markerPosition, setMarkerPosition] = useState(center);
  const searchInputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const onLoadAutocomplete = (autocompleteInstance: google.maps.places.Autocomplete) => {
    setAutocomplete(autocompleteInstance);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        const location = place.geometry.location;
        map?.panTo(location);
        map?.setZoom(12);
        setMarkerPosition({
          lat: location.lat(),
          lng: location.lng()
        });
      } else {
        console.log('No details available for input: ' + place.name);
      }
    }
  };

  return isLoaded ? (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <Autocomplete className='p-3 pl-10'
          onLoad={onLoadAutocomplete}
          onPlaceChanged={onPlaceChanged}
        >
          <input
            className="rounded-lg mr-2"
            type="text"
            placeholder="Search location"
            ref={searchInputRef}
            style={inputStyle}
          />
        </Autocomplete>
      </div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </div>
  ) : <></>;
}

export default React.memo(MyComponent);
