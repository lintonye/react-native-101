import React from "react";
import { Image, View, Text, FlatList, ScrollView } from "react-native";

import { manyHats } from "./Data";

function renderItem(itemInfo) {
  return <Image source={itemInfo.item.image} key={itemInfo.item.key} />;
}

const Separator = () => (
  <View style={{ width: "100%", height: 1, backgroundColor: "#eee" }} />
);

const Header = () => (
  <View style={{ height: 150, backgroundColor: "orange" }}>
    <Text
      style={{
        fontSize: 40,
        textAlign: "center",
        color: "white",
        marginTop: 60
      }}
    >
      Domo's Hats
    </Text>
  </View>
);

const List = () => (
  <FlatList
    data={manyHats}
    renderItem={renderItem}
    ItemSeparatorComponent={Separator}
    ListHeaderComponent={Header}
  />
);

const SV = () => (
  <ScrollView>
    <Header />
    {manyHats.map(h => renderItem({ item: h }))}
  </ScrollView>
);

// export default SV;
export default List;
