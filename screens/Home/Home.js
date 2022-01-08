import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextComponent,
  FlatList,
  TextInput,
} from "react-native";
import { FONTS, SIZES, COLORS, icons, dummyData } from "../../constants";

import { HorizontalFoodCard } from "../../components";
import { VerticalFoodCard } from "../../components";
import FilterModal from "../Home/FilterModal";

const Section = ({ title, onPress, children }) => {
  return (
    <View>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <Text style={{ flex: 1, ...FONTS.h3 }}>{title}</Text>

        <TouchableOpacity onPress={onPress}>
          <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
            Show all
          </Text>
        </TouchableOpacity>
      </View>

      {/* COntent */}
      {children}
    </View>
  );
};

const Home = ({ navigation }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [recommends, setRecommends] = useState([]);
  const [popular, setPopular] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  // Handler

  function handleChangeCategory(categoryId, menuTypeId) {
    // Retrieve the popular menu
    let selectedPopular = dummyData.menu.find((a) => a.name == "Popular");

    //Retrieve the recommended menu
    let selectedRecommend = dummyData.menu.find((a) => a.name == "Recommended");

    //Find the menu based on menu type id
    let selectedMenu = dummyData.menu.find((a) => a.id == menuTypeId);

    //set the popular menu based on category id
    setPopular(
      selectedPopular?.list.filter((a) => a.categories.includes(categoryId))
    );

    //Set the recommended menu based on the categoryid
    setRecommends(
      selectedRecommend?.list.filter((a) => a.categories.includes(categoryId))
    );

    //Set the menu based on category id
    setMenuList(
      selectedMenu?.list.filter((a) => a.categories.includes(categoryId))
    );
  }

  function renderSearch() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 40,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        {/* Icon */}
        <Image
          source={icons.search}
          style={{ height: 20, width: 20, tintColor: COLORS.black }}
        />
        {/* Text Input */}
        <TextInput
          style={{
            flex: 1,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
          placeholder="search food ..."
        />

        {/* Filter button */}

        <TouchableOpacity onPress={() => setShowFilterModal(true)}>
          <Image
            source={icons.filter}
            style={{ height: 20, width: 20, tintColor: COLORS.black }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderMenuTypes() {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 20,
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              marginLeft: SIZES.padding,
              marginRight:
                index == dummyData.menu.length - 1 ? SIZES.padding : 0,
            }}
            onPress={() => {
              setSelectedMenuType(item.id);
              handleChangeCategory(selectedCategoryId, item.id);
            }}
          >
            <Text
              style={{
                color:
                  selectedMenuType == item.id ? COLORS.primary : COLORS.black,
                ...FONTS.h3,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }

  function renderRecommendedSection() {
    return (
      <Section
        title="Recommended"
        onPress={() => console.log("Show all recommended")}
      >
        <FlatList
          data={recommends}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <HorizontalFoodCard
              containerStyle={{
                height: 180,
                width: SIZES.width * 0.85,
                marginLeft: index == 0 ? SIZES.padding : 18, //index ==0 means it is the first element of flallist
                marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                // index == recommends.length - 1 means it is the last element of flatlist
                paddingRight: SIZES.radius,
                alignItems: "center",
              }}
              imageStyle={{
                marginTop: 35,
                height: 150,
                width: 150,
              }}
              item={item}
              onPress={() => navigation.navigate("FoodDetail", { item })}
            />
          )}
        />
      </Section>
    );
  }

  function renderPopularSection() {
    return (
      <Section
        title="Popular Near You"
        onPress={() => console.log("show all popular items")}
      >
        <FlatList
          data={popular}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <VerticalFoodCard
              containerStyle={{
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index.length - 1 ? SIZES.padding : 0,
              }}
              item={item}
              onPress={() => navigation.navigate("FoodDetail", { item })}
            />
          )}
        />
      </Section>
    );
  }

  function renderFoodCategories() {
    return (
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              height: 55,

              marginTop: SIZES.padding,
              marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
              marginRight:
                index == dummyData.categories.length - 1 ? SIZES.padding : 0,
              paddingHorizontal: 8,
              borderRadius: SIZES.radius,
              backgroundColor:
                selectedCategoryId == item.id
                  ? COLORS.primary
                  : COLORS.lightGray2,
            }}
            onPress={() => {
              setSelectedCategoryId(item.id);
              handleChangeCategory(item.id, selectedMenuType);
            }}
          >
            <Image
              source={item.icon}
              style={{ marginTop: 5, height: 50, width: 50 }}
            />
            <Text
              style={{
                alignSelf: "center",
                marginRight: SIZES.base,
                color:
                  selectedCategoryId == item.id
                    ? COLORS.white
                    : COLORS.darkGray,
                ...FONTS.h3,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }

  function renderDeliveryTo() {
    return (
      <View
        style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}
      >
        <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
          DELIVERY TO
        </Text>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: SIZES.base,
            alignItems: "center",
          }}
        >
          <Text style={{ ...FONTS.h3 }}>{dummyData?.myProfile?.address}</Text>
          <Image
            source={icons.down_arrow}
            style={{ marginLeft: SIZES.base, height: 20, width: 20 }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {/* Search */}
      {renderSearch()}

      {/* Filter modal */}
      {showFilterModal && (
        <FilterModal
          isVisible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
        />
      )}

      {/* List */}

      <FlatList
        data={menuList}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Delivery to */}
            {renderDeliveryTo()}

            {/* Food Categories  */}
            {renderFoodCategories()}
            {/* Popular */}
            {renderPopularSection()}

            {/* Recommended */}

            {renderRecommendedSection()}

            {/* Menu Type */}
            {renderMenuTypes()}
          </View>
        }
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
        ListFooterComponent={() => <View style={{ height: 200 }} />}
      />
    </View>
  );
};

export default Home;

// bug Fix : Inputtext alignment, Input text was top aligned

// Solution :
// set paddingTop and paddingBottom to 0

//bug fix : The bottom portion of flatlist is covered by tab navigator
// Solution
//add a view in ListFooterComponent props of Flatlist and give the View relevant height

// Bug fix: Filter modal not closing

//Solution : typo issue
//it shoould be ```showFilterModal && <FilterModal/> ``` instead of ```setShowFilterModal && <FilterModal/>```

// java file is busted
