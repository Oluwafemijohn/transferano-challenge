import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import { User } from "../store/Types";


function UserCard({ item }: { item: User }) {
  return (
    // <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.listContainer}>
        <Image
          source={{ uri: item.avatar }}
          style={styles.image}
        />
        <Text style={styles.title}>{item.first_name + " " + item.last_name }</Text>
      </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderRadius: WP(4),
    marginBottom: WP(4),
    marginRight: WP(4),
    backgroundColor: "white",
    overflow: "hidden",
    // flex: 1,
    // flexDirection: 'row',
    // margin: 10,
    // padding: 10,
    // borderRadius: 10,
    // backgroundColor: '#fff',
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 1,
    width: WP(44),
  },
  image: {
    // width: 100,
    // height: 150,
    // borderRadius: 10,
    width: "100%",
    height: WP(50),
  },
  title: {
    // flex: 1,
    // flexDirection: 'column',
    // marginLeft: 10,
    // marginTop: 10,
    padding: WP(4),
    fontSize: WP(3),
    fontWeight: "bold",
  },
});

export default UserCard;
