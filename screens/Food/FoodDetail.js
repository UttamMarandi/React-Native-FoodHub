import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import {
  CartQuantityButton,
  Header,
  IconButton,
  IconLabel,
  LineDivider,
  Rating,
  StepperInput,
  TextButton,
} from "../../components";
import {
  SIZES,
  COLORS,
  FONTS,
  icons,
  dummyData,
  images,
} from "../../constants";

const FoodDetail = ({ navigation }) => {
  const [foodItem, setFoodItem] = useState(dummyData.vegBiryani);
  // in next phases we will get the data from route params

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(0);

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

          {/* Ratings, duration and Shipping */}

          <View style={{ flexDirection: "row", marginTop: SIZES.padding }}>
            {/* Ratings */}
            <IconLabel
              containerStyle={{ backgroundColor: COLORS.primary }}
              icon={icons.star}
              label="4.5"
              labelStyle={{ color: COLORS.white }}
            />

            {/* Duration */}
            <IconLabel
              containerStyle={{
                marginLeft: SIZES.radius,
                paddingHorizontal: 0,
              }}
              icon={icons.clock}
              label="30 mins"
              iconStyle={{ tintColor: COLORS.black }}
            />

            {/* Shipping */}
            <IconLabel
              containerStyle={{
                marginLeft: SIZES.radius,
                paddingHorizontal: 0,
              }}
              icon={icons.dollar}
              label="Free Shipping"
              iconStyle={{ tintColor: COLORS.black }}
            />
          </View>
        </View>

        {/* Sizes */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
            alignItems: "center",
          }}
        >
          <Text style={{ ...FONTS.h3 }}>Sizes:</Text>

          {/* Size buttons */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginLeft: SIZES.padding,
            }}
          >
            {dummyData.sizes.map((item, index) => {
              return (
                <TextButton
                  key={`Sizes-${index}`}
                  buttonContainerStyle={{
                    width: 55,
                    height: 55,
                    margin: SIZES.base,
                    borderWidth: 1,
                    borderRadius: SIZES.radius,
                    borderColor:
                      selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                    backgroundColor:
                      selectedSize == item.id ? COLORS.primary : null,
                  }}
                  label={item.label}
                  labelStyle={{
                    color:
                      selectedSize == item.id ? COLORS.white : COLORS.gray2,
                    ...FONTS.body2,
                  }}
                  onPress={() => setSelectedSize(item.id)}
                />
              );
            })}
          </View>
        </View>
      </View>
    );
  }

  function renderRestaurent() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        <Image
          source={images.profile}
          style={{ width: 50, height: 50, borderRadius: SIZES.radius }}
        />
        {/* Info */}
        <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ ...FONTS.h3 }}>Balaji Hotel</Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
            1.2 KM away from you
          </Text>
        </View>
        {/* Ratings */}
        <Rating rating={4} iconStyle={{ marginLeft: 3 }} />
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 120,
          alignItems: "center",
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        {/* Stepper Input */}
        <StepperInput
          value={quantity}
          onAdd={() => setQuantity(quantity + 1)}
          onMinus={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
        />

        {/* Text Button */}
        <TextButton
          buttonContainerStyle={{
            flex: 1,
            flexDirection: "row",
            height: 60,
            marginLeft: SIZES.radius,
            paddingHorizontal: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label="Buy Now"
          label2="$ 15.99"
          // label2 is text align right
          onPress={() => navigation.navigate("MyCart")}
        />
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
        <LineDivider />
        {/* Restaurent */}

        {renderRestaurent()}
      </ScrollView>
      {/* Footer */}
      <LineDivider />
      {renderFooter()}
    </View>
  );
};

export default FoodDetail;
