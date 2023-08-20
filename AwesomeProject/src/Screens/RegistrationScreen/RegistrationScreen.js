import {
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export const RegistrationScreen = () => {
  return (
    <ImageBackground
      source={require("../../images/bg-photo.png")}
      style={styles.imageBackground}
      imageStyle={{
        minHeight: 812,
      }}
    >
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.avatar}>
          <Image
            source={require("../../images/avatar.jpg")}
            style={styles.avatarImage}
          />
          <TouchableOpacity></TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    position: "relative",
  },
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    minHeight: 549,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: {
    position: "relative",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    marginBottom: 32,
    width: 120,
    aspectRatio: 1,
    marginTop: -60,
    marginLeft: "auto",
    marginRight: "auto",
  },
  avatarImage: {
    borderRadius: 16,
    width: 120,
    height: 120,
  },
});
