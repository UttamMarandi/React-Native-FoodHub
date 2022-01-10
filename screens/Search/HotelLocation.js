import React, { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { FONTS, icons } from "../../constants";

const HotelLocation = ({ navigation }) => {
  const mapView = useRef();
  const [region, setRegion] = useState(null);

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
  let locDurgaHotel = {
    latitude: 21.92825282617307,
    longitude: 86.72116916239936,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  useEffect(() => {
    let locDurgaHotel = {
      latitude: 21.92825282617307,
      longitude: 86.72116916239936,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };

    setRegion(locDurgaHotel);
  }, []);

  function renderMap() {
    console.log("region", region);
    return (
      <MapView
        ref={mapView}
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
      >
        <Marker
          key={`locDurgaHotel`}
          coordinate={locDurgaHotel}
          tracksViewChanges={false}
          icon={icons.hotel_map}
          style={{ width: 40, height: 40 }}
          // rotation={angle}
          anchor={{ x: 0, y: 0.5 }}
        />
        <Marker
          key={`locNamesteyBaripada`}
          coordinate={locNamesteyBaripada}
          tracksViewChanges={false}
          icon={icons.hotel_map}
          style={{ width: 40, height: 40 }}
          // rotation={angle}
          anchor={{ x: 0, y: 0.5 }}
        />
        <Marker
          key={`locGoldenInn`}
          coordinate={locGoldenInn}
          tracksViewChanges={false}
          icon={icons.hotel_map}
          style={{ width: 40, height: 40 }}
          // rotation={angle}
          anchor={{ x: 0, y: 0.5 }}
        />
        <Marker
          key={`locBrewbakes`}
          coordinate={locBrewbakes}
          tracksViewChanges={false}
          icon={icons.hotel_map}
          style={{ width: 40, height: 40 }}
          // rotation={angle}
          anchor={{ x: 0, y: 0.5 }}
        />
        <Marker
          key={`locHotelAmbika`}
          coordinate={locHotelAmbika}
          tracksViewChanges={false}
          icon={icons.hotel_map}
          style={{ width: 40, height: 40 }}
          // rotation={angle}
          anchor={{ x: 0, y: 0.5 }}
        />
      </MapView>
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
