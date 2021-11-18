import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import * as Yup from "yup";
import axios from "axios";
import { BASE_URL } from "../constants/Constants";
import SafeAreaScreen from "../components/SafeAreaScreen";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {

    axios
      .post(`https://reqres.in/api/login`, {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data.token);
        props.navigation.navigate("Home", response.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
        />
        {/* eve.holt@reqres.in */}
        <View style={styles.button}>
          <Button
            title="Login"
            onPress={() => {
              handleSubmit();
            }}
          />
        </View>
      </View>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginVertical: 10,
    width: "80%",
    alignSelf: "center",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,

  },
  button: {
    marginTop: 20,
    width: "80%",
  },
});

export default LoginScreen;
