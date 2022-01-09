import React, { useState } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { FilterModal } from "..";
import {
  CartQuantityButton,
  Header,
  HorizontalFoodCard,
  IconButton,
  TextButton,
  TwoPointSlider,
} from "../../components";
import { COLORS, FONTS, icons, SIZES, dummyData } from "../../constants";

// const Section = ({ containerStyle, title, children }) => {
//   return (
//     <View style={{ marginTop: SIZES.padding, ...containerStyle }}>
//       <Text style={{ ...FONTS.h3 }}>{title}</Text>
//       {children}
//     </View>
//   );
// };

const Filter = ({ navigation }) => {
  // states
  const [showFilterModal, setShowFilterModal] = useState(false);
  let allMenuItems = dummyData.menu.find((item) => item.name == "All");

  const { list } = allMenuItems;

  console.log("list", list);
  const [menuList, setMenuList] = useState(list);

  // render
  function renderHeader() {
    return (
      <Header
        title="YOUR FILTER RESULTS"
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

  function renderFooter() {
    return (
      <View
        style={{
          paddingTop: SIZES.radius,
          paddingBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <TextButton
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          onPress={() => setShowFilterModal(true)}
          label="Apply Filters"
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

      {/* Filter modal */}
      {showFilterModal && (
        <FilterModal
          isVisible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
          navigation={navigation}
        />
      )}

      {/* Your filters */}

      <FlatList
        data={menuList}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 130,
                alignItems: "center",
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
              imageStyle={{
                marginTop: 20,
                height: 110,
                width: 110,
              }}
              item={item}
              onPress={() => navigation.navigate("FoodDetail", { item })}
            />
          );
        }}
        // ListFooterComponent={() => <View style={{ height: 100 }} />}
      />

      {/* render footer */}
      {renderFooter()}
    </View>
  );
};

export default Filter;
