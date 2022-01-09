import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import {
  Header,
  StepperInput,
  IconButton,
  CartQuantityButton,
  FooterTotal,
} from "../../components";
import { SwipeListView } from "react-native-swipe-list-view";

import { COLORS, FONTS, SIZES, dummyData, icons } from "../../constants";

const MyCart = ({ navigation }) => {
  const [myCartList, setMyCartList] = useState(dummyData.myCart);
  const [subTotalSum, setTotalCartSum] = useState(0);
  const [shippingFee, setShippingFee] = useState(2.45);

  const dataSend = {
    subtotal: subTotalSum,
    shippingFee: shippingFee,
    total: subTotalSum + shippingFee,
  };

  useEffect(() => {
    // this will update the total values on first run , need to run only once

    const myCartTotalArray = myCartList.map((item) => item.price * item.qty);

    let sum = 0;
    for (let i = 0; i < myCartTotalArray.length; i++) {
      console.log(myCartTotalArray[i]);
      sum = sum + myCartTotalArray[i];
    }
    setTotalCartSum(sum);
  }, []);

  let totalArray = [];

  // Handler
  function updateQuantityHandler(newQty, id) {
    const newMyCartList = myCartList.map((item) =>
      item.id === id ? { ...item, qty: newQty } : item
    );

    // Each time the quantity is updated this will run

    const myCartTotalArray = newMyCartList.map((item) => item.price * item.qty);
    let sum = 0;
    for (let i = 0; i < myCartTotalArray.length; i++) {
      console.log(myCartTotalArray[i]);
      sum = sum + myCartTotalArray[i];
    }

    setTotalCartSum(sum);

    // let total = myCartTotalArray.reduce((a, b) => a + b, 0);
    // setTotalCartSum(total);
    // console.log("totalCartSum", totalCartSum);

    setMyCartList(newMyCartList);
  }

  function removeMyCartHandler(id) {
    let newMyCartList = [...myCartList];

    const index = newMyCartList.findIndex((cart) => cart.id === id);

    newMyCartList.splice(index, 1);

    setMyCartList(newMyCartList);
  }

  // Render
  function renderHeader() {
    return (
      <Header
        title="MY CART"
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
        rightComponent={<CartQuantityButton quantity={3} />}
      />
    );
  }

  function renderCartList() {
    return (
      <SwipeListView
        data={myCartList}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
        }}
        disableRightSwipe={true}
        rightOpenValue={-75} //amount of pixels to swipe from right
        renderItem={(data, rowMap) => {
          return (
            <View
              style={{
                height: 100,
                backgroundColor: COLORS.lightGray2,
                ...styles.cartItemContainer,
              }}
            >
              {/* Food image */}
              <View
                style={{
                  width: 90,
                  height: 100,
                  marginLeft: -10,
                }}
              >
                <Image
                  source={data.item.image}
                  resizeMode="contain"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 10,
                  }}
                />
              </View>

              {/* Food Info */}
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text style={{ ...FONTS.body3 }}>{data.item.name}</Text>
                <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>
                  $ {data.item.price * data.item.qty}
                </Text>
              </View>

              {/* Quantity */}
              <StepperInput
                containerStyle={{
                  height: 50,
                  width: 125,
                  backgroundColor: COLORS.white,
                }}
                value={data.item.qty}
                onAdd={() => {
                  updateQuantityHandler(data.item.qty + 1, data.item.id);
                }}
                onMinus={() => {
                  if (data.item.qty > 1) {
                    updateQuantityHandler(data.item.qty - 1, data.item.id);
                  }
                }}
              />
            </View>
          );
        }}
        renderHiddenItem={(data, rowMap) => (
          <IconButton
            containerStyle={{
              flex: 1,
              justifyContent: "flex-end",
              backgroundColor: COLORS.primary,
              ...styles.cartItemContainer,
            }}
            icon={icons.delete_icon}
            iconStyle={{
              marginLeft: 10,
            }}
            onPress={() => removeMyCartHandler(data.item.id)}
          />
        )}
      />
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

      {/* Cart List */}
      {renderCartList()}

      {/* Footer */}
      <FooterTotal
        subtotal={subTotalSum}
        shippingFee={shippingFee}
        total={subTotalSum + shippingFee}
        onPress={() => navigation.navigate("MyCard", { dataSend })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
});

export default MyCart;
