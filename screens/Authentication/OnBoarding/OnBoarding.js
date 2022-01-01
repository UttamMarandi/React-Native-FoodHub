import React, { useRef, useState } from "react";
import { View, Text, Image, ImageBackground, Animated } from "react-native";
import { TextButton } from "../../../components";
import { constants, images, FONTS, SIZES, COLORS } from "../../../constants";

const OnBoarding = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();

  //   for changing layout of last onboarding screen
  const [currentIndex, setCurrentIndex] = useState(0);
  const onViewChangeRef = useRef(({ viewableItems, changed }) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {constants.onboarding_screens.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              COLORS.lightOrange,
              COLORS.primary,
              COLORS.lightOrange,
            ],
            extrapolate: "clamp",
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 30, 10],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`Dots-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: dotWidth,
                height: 10,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };
  function renderHeaderLogo() {
    return (
      <View
        style={{
          position: "absolute",
          top: SIZES.height > 800 ? 50 : 25,
          left: 0,
          right: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={images.logo_02}
          resizeMode="contain"
          style={{ width: SIZES.width * 0.5, height: 90 }}
        />
      </View>
    );
  }

  function renderFooter() {
    return (
      <View style={{}}>
        {/* Pagination */}
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Dots />
        </View>

        {/* Buttons */}
        {currentIndex < constants.onboarding_screens.length - 1 && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}
          >
            <TextButton
              label="Skip"
              buttonContainerStyle={{
                paddingHorizontal: 20,
                paddingVertical: 12,
                backgroundColor: "transparent",
              }}
              labelStyle={{
                color: COLORS.primary,
              }}
              onPress={() => navigation.replace("SignIn")}
            />
            <TextButton
              label="Next"
              buttonContainerStyle={{
                paddingHorizontal: 40,
                paddingVertical: 12,
                borderRadius: SIZES.radius,
              }}
              onPress={() => {
                let index = Math.ceil(Number(scrollX._value / SIZES.width));
                // scrollX value is the width of each screen

                // if (index < constants.onboarding_screens.length - 1) {
                // scroll to the next item

                flatListRef?.current?.scrollToIndex({
                  // index: index + 1,
                  index: currentIndex + 1,
                  animated: true,
                });
                // } else {
                //   navigation.replace("SignIn");
                // }
              }}
            />
          </View>
        )}
        {currentIndex == constants.onboarding_screens.length - 1 && (
          <View
            style={{
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}
          >
            <TextButton
              label="Let's Get Started"
              buttonContainerStyle={{
                paddingVertical: 12,
                borderRadius: SIZES.radius,
              }}
              onPress={() => navigation.replace("Home")}
            />
          </View>
        )}
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {renderHeaderLogo()}

      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        // getting the value of x and assigning to scrollx

        onViewableItemsChanged={onViewChangeRef.current}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <View style={{ width: SIZES.width }}>
              {/* Header */}
              <View style={{ flex: 3 }}>
                <ImageBackground
                  source={item.backgroundImage}
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    height: index == 1 ? "86%" : "100%",
                    width: "100%",
                  }}
                >
                  <Image
                    source={item.bannerImage}
                    resizeMode="contain"
                    style={{
                      width: SIZES.width * 0.8,
                      height: SIZES.width * 0.8,
                      marginBottom: -SIZES.padding,
                    }}
                  />
                </ImageBackground>

                {/* Detail */}
                <View
                  style={{
                    flex: 1,
                    marginTop: -90,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingHorizontal: SIZES.radius,
                  }}
                >
                  <Text style={{ ...FONTS.h1, fontSize: 25 }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      marginTop: SIZES.radius,
                      textAlign: "center",
                      color: COLORS.darkGray,
                      paddingHorizontal: SIZES.padding,
                      ...FONTS.body3,
                      //   marginBottom: 220,
                    }}
                  >
                    {item.description}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
      {renderFooter()}
    </View>
  );
};

export default OnBoarding;
