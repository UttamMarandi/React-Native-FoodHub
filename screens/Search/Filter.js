import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import {
  CartQuantityButton,
  Header,
  HorizontalFoodCard,
  IconButton,
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

  //   function renderFilters() {
  //     return (
  //       <Section title="Distance">
  //         <View style={{ alignItems: "center" }}>
  //           <TwoPointSlider
  //             values={[3, 10]}
  //             min={1}
  //             max={20}
  //             postfix="km"
  //             onValuesChange={(values) => console.log(values)}
  //           />
  //         </View>
  //       </Section>
  //     );
  //   }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}

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
        ListFooterComponent={() => <View style={{ height: 100 }} />}
      />
    </View>
  );
};

export default Filter;
