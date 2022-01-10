import React, { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const HotelLocation = ({ navigation }) => {
  const mapView = useRef();
  const [region, setRegion] = useState(null);

  useEffect(() => {
    let locDurgaHotel = {
      latitude: 21.92825282617307,
      longitude: 86.72116916239936,
    };
    let locNamesteyBaripada = {
      latitude: 21.930866447758156,
      longitude: 86.74693479772013,
    };
    let locGoldenInn = {
      latitude: 21.933091390101715,
      longitude: 86.72629649772016,
    };
    let locHotelAmbika = {
      latitude: 21.93758245834877,
      longitude: 86.72577382116003,
    };
    let locBrewbakes = {
      latitude: 21.937249029626827,
      longitude: 86.72478287450151,
    };
  }, []);

  function renderMap() {
    return (
      <MapView
        ref={mapView}
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
      ></MapView>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {/* Map */}
      {renderMap()}
    </View>
  );
};

export default HotelLocation;
