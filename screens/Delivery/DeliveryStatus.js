import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";

import {
  Header,
  LineDivider,
  TextButton,
  TextIconButton,
} from "../../components";
import { FONTS, COLORS, SIZES, icons, constants } from "../../constants";

const DeliveryStatus = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(2);

  function renderHeader() {
    return (
      <Header
        title="DELIVERY STATUS"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
      />
    );
  }

  function renderInfo() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Text
          style={{ textAlign: "center", color: COLORS.gray, ...FONTS.body4 }}
        >
          Estimated Salary
        </Text>
        <Text style={{ textAlign: "center", ...FONTS.h2 }}>
          21 Sept / 12:30PM
        </Text>
      </View>
    );
  }

  function renderTrackOrder() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          paddingVertical: SIZES.padding,
          borderRadius: SIZES.radius,
          borderWidth: 2,
          borderColor: COLORS.lightGray2,
          backgroundColor: COLORS.white2,
        }}
      >
        {/* Track order */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
            paddingHorizontal: SIZES.padding,
          }}
        >
          <Text style={{ ...FONTS.h3 }}>Track Order</Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>NY012345</Text>
        </View>

        <LineDivider linestyle={{ backgroundColor: COLORS.lightGray2 }} />

        {/* Status */}
        <View
          style={{
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}
        >
          {constants.track_order_status.map((item, index) => {
            return (
              <View key={`StatusList-${index}`}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: -5,
                  }}
                >
                  <Image
                    source={icons.check_circle}
                    style={{
                      width: 40,
                      height: 40,
                      tintColor:
                        index <= currentStep
                          ? COLORS.primary
                          : COLORS.lightGray1,
                    }}
                  />
                  <View style={{ marginLeft: SIZES.radius }}>
                    <Text style={{ ...FONTS.h3 }}>{item.title}</Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                      {item.sub_title}
                    </Text>
                  </View>
                </View>
                {index < constants.track_order_status.length - 1 && (
                  <View>
                    {index < currentStep && (
                      <View
                        style={{
                          height: 50,
                          width: 3,
                          marginLeft: 18,
                          backgroundColor: COLORS.primary,
                          zIndex: -1,
                        }}
                      />
                    )}

                    {index >= currentStep && (
                      <Image
                        source={icons.dotted_line}
                        resizeMode="cover"
                        style={{
                          width: 4,
                          height: 50,
                          marginLeft: 17,
                        }}
                      />
                    )}
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
        }}
      >
        {/* this means it is not the final step */}
        {currentStep < constants.track_order_status.length - 1 && (
          <View style={{ flexDirection: "row" }}>
            {/* Cancel */}
            <TextButton
              buttonContainerStyle={{
                width: "40%",
                height: 55,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.lightGray2,
              }}
              label="Cancel"
              labelStyle={{ color: COLORS.primary }}
              onPress={() => navigation.navigate("FoodDetail")}
            />
            {/* MapView */}
            <TextIconButton
              label="Map View"
              labelStyle={{
                color: COLORS.white,
                ...FONTS.h3,
              }}
              containerStyle={{
                flex: 1,
                marginLeft: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.primary,
                height: 55,
              }}
              icon={icons.map}
              iconStyle={{
                width: 25,
                height: 25,
                marginLeft: SIZES.base,
                tintColor: COLORS.white,
              }}
              onPress={() => navigation.navigate("Map")}
            />
          </View>
        )}

        {currentStep >= constants.track_order_status.length - 1 && (
          <TextButton
            buttonContainerStyle={{ height: 55, borderRadius: SIZES.base }}
            label="DONE"
            onPress={() => navigation.navigate("FoodDetail")}
          />
        )}
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}

      {/* Info */}
      {renderInfo()}

      {/* Track Order */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderTrackOrder()}
      </ScrollView>

      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default DeliveryStatus;
