import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { CartQuantityButton, Header, IconButton } from "../../components";
import { SIZES, COLORS, FONTS, icons, dummyData } from "../../constants";

const FoodDetail = () => {
  const [foodItem, setFoodItem] = useState(dummyData.vegBiryani);
  // in next phases we will get the data from route params

  function renderHeader() {
    return (
      <Header
        title="DETAILS"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray2,
            }}
            onPress={() => console.log("Back")}
          />
        }
        rightComponent={<CartQuantityButton quantity={3} />}
      />
    );
  }

  function renderDetails() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Food Card */}
        <View
          style={{
            height: 190,
            borderRadius: 15,
            backgroundColor: COLORS.lightGray2,
          }}
        >
          {/* Calories  */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZES.base,
              paddingHorizontal: SIZES.radius,
            }}
          >
            {/* Calories */}
            <View style={{ flexDirection: "row" }}>
              <Image
                source={icons.calories}
                style={{
                  height: 30,
                  width: 30,
                }}
              />

              <Text style={{ color: COLORS.gray2, ...FONTS.body4 }}>
                {foodItem?.calories} calories
              </Text>
            </View>

            {/* Favourite */}

            <Image
              source={icons.love}
              style={{
                width: 20,
                height: 20,
                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray,
              }}
            />
          </View>

          {/* Food Image */}
          <Image
            source={foodItem?.image}
            resizeMode="contain"
            style={{
              height: 170,
              width: "100%",
            }}
          />
        </View>

        {/* Food Info */}
        <View style={{ marginTop: SIZES.padding }}>
          {/* Name and Description */}
          <Text style={{ ...FONTS.h1 }}>{foodItem?.name}</Text>

          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.darkGray,
              textAlign: "justify",
              ...FONTS.body3,
            }}
          >
            {foodItem?.description}
          </Text>
        </View>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}

      {/* Body */}
      <ScrollView>
        {/* FOod detail */}
        {renderDetails()}
        {/* Restaurent */}
      </ScrollView>
    </View>
  );
};

export default FoodDetail;
