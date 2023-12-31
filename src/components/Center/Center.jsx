import { StyleSheet, View } from "react-native";


const Center = ({children}) => {
  return (
    <View style={styles.center}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Center;