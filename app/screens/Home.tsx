import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import UserCard from "../components/UserCard";
import colors from "../constants/colors";
import { User } from "../store/Types";
import { Feather } from "@expo/vector-icons";

function Home(props: any) {
  const token = props.route.params;
  const [data, setData] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [columnNum, setColumnNum] = useState(2);

  axios.defaults.headers.common = { Authorization: `bearer ${token}` };
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((response) => {
        setData(response.data.data);
        setTotalPages(response.data.total_pages);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <View style={styles.container}>
      {columnNum === 1 ? (
          <TouchableWithoutFeedback onPress={() => setColumnNum(1)}>
              <Feather name="toggle-left" size={24} color="black" />
          </TouchableWithoutFeedback>
      ) : (
        // <Feather name="toggle-right" size={24} color="black" />
        <TouchableWithoutFeedback onPress={() => setColumnNum(2)}>
              <Feather name="toggle-right" size={24} color="black" />
          </TouchableWithoutFeedback>
      )}
      <FlatList
        data={data}
        renderItem={({ item }) => <UserCard item={item} />}
        numColumns={columnNum}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (page < totalPages) {
            setPage(page + 1);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.medium,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingLeft: 15,
  },
  item: {
    backgroundColor: colors.light,

    margin: 1,
    height: 150,
    borderRadius: 5,
  },
});

export default Home;
