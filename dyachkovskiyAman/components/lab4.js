import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/reducer";

const FourthScreen = () => {
  const dispatch = useDispatch();
  const counter = useSelector((counter) => counter.counter.counter);
  const [fontLoaded] = useFonts({
    Monts: require("../assets/fonts/Montserrat-Medium.ttf"),
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);
  if (!fontLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <View style={styles.main}>
      <Text style={styles.number}>{counter}</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => dispatch(increment())}
        >
          <Text style={styles.commonText}>+10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => dispatch(decrement())}
        >
          <Text style={styles.commonText}>-10</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: "#606C38",
    alignItems: "center",
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 18,
  },
  number: {
    fontFamily: "Monts",
    marginTop: 111,
    fontSize: 50,
    fontweight: 500,
    fontsize: 45,
    lineHeight: 53,
    color: "#FEFAE0",
  },
  commonButton: {
    marginTop: 97,
    justifyContent: "center",
    borderRadius: 4,
    width: 80,
    height: 43,
    backgroundColor: "#283618",
  },
  commonText: {
    fontFamily: "Monts",
    fontStyle: "normal",
    fontweight: 500,
    fontSize: 14,
    lineheight: 16,
    textAlign: "center",
    color: "#FEFAE0",
  },
});

export default FourthScreen;
