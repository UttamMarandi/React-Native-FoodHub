import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  Header,
  IconButton,
  FormInput,
  CardItem,
  FooterTotal,
} from "../../components";

import { COLORS, FONTS, SIZES, icons, dummyData } from "../../constants";

const Checkout = ({ navigation, route }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  let { dataSend } = route.params;

  useEffect(() => {
    let { selectedCard } = route.params;
    setSelectedCard(selectedCard);
  });

  function renderHeader() {
    return (
      <Header
        title="CHECKOUT"
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
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={<View style={{ width: 40 }} />}
        // to make the title to center
      />
    );
  }

  function renderMyCard() {
    return (
      <View>
        {selectedCard &&
          dummyData.myCards.map((item, index) => {
            return (
              <CardItem
                key={`MyCard-${item.id}`}
                item={item}
                isSelected={
                  `${selectedCard?.key}-${selectedCard?.id}` ==
                  `MyCard-${item.id}`
                }
                onPress={() => setSelectedCard({ ...item, key: "MyCard" })}
              />
            );
          })}
      </View>
    );
  }

  function renderDeliveryAddress() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Text style={{ ...FONTS.h3 }}>Delivery Address</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: SIZES.radius,
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            borderWidth: 2,
            borderRadius: SIZES.radius,
            borderColor: COLORS.lightGray2,
          }}
        >
          <Image
            source={icons.location1}
            style={{
              width: 40,
              height: 40,
              tintColor: COLORS.darkGray,
            }}
          />
          <Text
            style={{
              marginLeft: SIZES.radius,
              width: "85%",
              ...FONTS.body3,
            }}
          >
            Bijay Ramchandra Pur , Ward NO-21
          </Text>
        </View>
      </View>
    );
  }

  function renderCoupen() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Text style={{ ...FONTS.h3 }}>Add Coupen</Text>

        <FormInput
          inputContainerStyle={{
            marginTop: 0,
            paddingLeft: SIZES.padding,
            paddingRight: 0,
            borderWidth: 2,
            borderColor: COLORS.lightGray2,
            backgroundColor: COLORS.white,
            overflow: "hidden",
          }}
          placeholder="Coupen Code"
          appendComponent={
            <View
              style={{
                width: 60,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.primary,
              }}
            >
              <Image
                source={icons.discount}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            </View>
          }
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
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraScrollHeight={-200} //the distance between the input field and the keyboard
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
          paddingBottom: 20,
        }}
      >
        {/* My Cards */}
        {renderMyCard()}

        {/* Delivery Address */}
        {renderDeliveryAddress()}

        {/* COupen */}
        {renderCoupen()}
      </KeyboardAwareScrollView>

      <FooterTotal
        subtotal={dataSend.subtotal}
        shippingFee={dataSend.shippingFee}
        total={dataSend.total}
        onPress={() => navigation.replace("Success")}
      />
    </View>
  );
};

export default Checkout;

//  Prop drilling issue
//Refactor : May use redux to get the total values
