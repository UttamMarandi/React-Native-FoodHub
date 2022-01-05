import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Header, IconButton, TextButton } from "../../components";
import { FONTS, SIZES, COLORS, icons, images } from "../../constants";
import utils from "../../utils/Utils";

const AddCard = ({ navigation, route }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    let { selectedCard } = route.params;

    selectedCard(selectedCard);
  }, []);

  function renderCard() {
    return (
      <ImageBackground
        style={{
          height: 200,
          width: "100%",
          marginTop: SIZES.radius,
          borderRadius: SIZES.radius,
          overflow: "hidden",
        }}
      ></ImageBackground>
    );
  }
  function renderHeader() {
    return (
      <Header
        title="ADD NEW CARD"
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
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Card */}
        {renderCard()}

        {/* FOrms */}
      </KeyboardAwareScrollView>

      {/* Footer */}
    </View>
  );
};

export default AddCard;
