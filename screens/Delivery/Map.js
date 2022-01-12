import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import LinearGradient from "react-native-linear-gradient";
import { IconButton } from "../../components";
import {
  COLORS,
  FONTS,
  icons,
  images,
  SIZES,
  dummyData,
  constants,
} from "../../constants";
import MapViewDirections from "react-native-maps-directions";
import utils from "../../utils/Utils";

const Map = ({ navigation }) => {
  const mapView = useRef();
  const [region, setRegion] = useState(null);
  const [toLoc, setToLoc] = useState(null);
  const [fromLoc, setFromLoc] = useState(null);
  const [angle, setAngle] = useState(0);

  const [isReady, setIsReady] = useState(false);
  const [duration, setDuration] = useState("");

  React.useEffect(() => {
    let initialRegion = {
      latitude: 21.933091390101715,
      longitude: 86.72629649772016,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };

    let destination = {
      latitude: 21.9512529217027,
      longitude: 86.7369908512785,
    };
    setToLoc(destination);
    setFromLoc(initialRegion);
    setRegion(initialRegion);
  }, []);

  function renderMap() {
    return (
      <MapView
        ref={mapView}
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
      >
        <Marker
          key={`FromLoc`}
          coordinate={fromLoc}
          tracksViewChanges={false}
          icon={icons.hotel_map}
          style={{ width: 40, height: 40 }}
          rotation={angle}
          anchor={{ x: 0, y: 0.5 }}
        />

        {toLoc && (
          <Marker
            key={"ToLoc"}
            coordinate={toLoc}
            tracksViewChanges={false}
            icon={icons.location_pin_map}
            anchor={{ x: 0.5, y: 0.5 }}
          />
        )}

        {/* <MapViewDirections
          origin={fromLoc}
          destination={toLoc}
          apikey={constants.GOOGLE_MAP_API_KEY}
          strokeWidth={5}
          strokeColor={COLORS.primary}
          optimizeWaypoints={true}
          onReady={(result) => {
            setDuration(Math.ceil(result.duration));

            if (!isReady) {
              //fit the map based on the route
              mapView.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: SIZES.width * 0.1,
                  bottom: 400,
                  left: SIZES.width * 0.1,
                  top: SIZES.height * 0.1,
                },
              });

              // Reposition the navigator

              if (result.coordinates.length >= 2) {
                let angle = utils.calculateAngle(result.coordinates);
                setAngle(angle);
              }

              setIsReady(true);
            }
          }}
        /> */}
      </MapView>
    );
  }

  function renderHeaderButtons() {
    return (
      <>
        <IconButton
          icon={icons.back}
          containerStyle={{
            position: "absolute",
            top: SIZES.padding * 2,
            left: SIZES.padding,
            ...styles.buttonStyle,
          }}
          iconStyle={{
            width: 20,
            height: 20,
            tintColor: COLORS.gray2,
          }}
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            position: "absolute",
            top: SIZES.padding * 2,
            right: SIZES.padding,
          }}
        >
          <IconButton
            icon={icons.globe}
            containerStyle={{
              ...styles.buttonStyle,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray,
            }}
          />

          <IconButton
            icon={icons.focus}
            containerStyle={{
              marginTop: SIZES.radius,
              ...styles.buttonStyle,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray,
            }}
          />
        </View>
      </>
    );
  }

  function renderInfo() {
    return (
      <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
        {/* Linear gradient */}
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[COLORS.transparent, COLORS.lightGray1]}
          style={{
            position: "absolute",
            top: -20,
            left: 0,
            right: 0,
            height: Platform.OS === "android" ? 50 : 200,
          }}
        />

        {/* Inof container */}
        <View
          style={{
            padding: SIZES.padding,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: COLORS.white,
          }}
        >
          {/* Delivery Time */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.clock}
              style={{
                width: 40,
                height: 40,
                tintColor: COLORS.black,
              }}
            />
            <View
              style={{
                marginLeft: SIZES.padding,
              }}
            >
              <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                Your delivery time
              </Text>
              <Text style={{ ...FONTS.h3 }}>{duration} minutes</Text>
            </View>
          </View>
          {/* Addrress */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: SIZES.padding,
            }}
          >
            <Image
              source={icons.focus}
              style={{
                width: 40,
                height: 40,
                tintColor: COLORS.black,
              }}
            />
            <View
              style={{
                marginLeft: SIZES.padding,
              }}
            >
              <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                Your Address
              </Text>
              <Text style={{ ...FONTS.h3 }}>
                Bijay RamChandra Pur , Ward No-21
              </Text>
            </View>
          </View>

          {/* Delivery main */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              height: 70,
              marginTop: SIZES.padding,
              borderRadius: SIZES.radius,
              paddingHorizontal: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.primary,
            }}
          >
            <Image
              source={images.golden_inn}
              style={{
                width: 40,
                height: 40,
                borderRadius: 5,
              }}
            />
            <View
              style={{
                flex: 1,
                marginLeft: SIZES.radius,
              }}
            >
              <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                Golden Inn
              </Text>
              <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
                Delivery Time
              </Text>
            </View>

            <View
              style={{
                height: 40,
                width: 40,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: 5,
                borderColor: COLORS.white,
                backgroundColor: COLORS.transparentWhite1,
              }}
            >
              <Image
                source={icons.call}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Map */}
      {renderMap()}

      {/* Header Button */}
      {renderHeaderButtons()}

      {/* FOoter */}

      {renderInfo()}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: 40,
    height: 40,
    borderRadius: SIZES.radius,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.gray2,
    backgroundColor: COLORS.white,
  },
});

export default Map;
