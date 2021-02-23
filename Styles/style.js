import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  top_header_contianer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position:"relative",
    marginLeft:20,
    marginRight:15

  },
  text1: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "left",
    color: "gray",
    opacity: 0.6,
  },
  text2: {
    fontFamily: "Roboto",
    fontSize: 27,
    fontWeight: "600",
    fontStyle: "normal",
    textAlign: "left",
    color: "#070f2d",
  },

  text3: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "normal",
    textAlign: "left",
    color: "#070f2d",
  },

  scrollViewContainer: {
    marginTop: 18,
    position: "relative",
  },

  imageBackground: {
    width: 345,
    height: 221.7,
    marginRight: 10,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#c4c4c4",
  },

  user: {
    width: 45,
    height: 45,
    borderRadius: 15,
    overflow: "hidden",
  },

  locationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },

  hotelname: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.67,
    color: "#ffffff",
  },

  location: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.67,
    color: "#ffffff",
  },

  rating: {
    fontFamily: "Roboto",
    fontSize: 17,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.67,
    textAlign: "center",
    color: "#ffffff",
  },

  bottomContainer: {
    width: 251,
    height: 117.6,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#ffffff",
    position: "relative",
    marginHorizontal: 45,
    marginTop: -75,
    elevation: 2,
    zIndex: 100,
    textAlign: "center",
    marginBottom: 10,
    shadowColor: "red",
    shadowOffset: {
      width: 10,
      height: 5,
    },
  },

  bt1: {
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0.67,
    textAlign: "center",
    color: "#121111",
  },

  bt2: {
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "center",
    color: "#c4c4c4",
  },

  recommended: {
    fontFamily: "Roboto",
    fontSize: 17,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.67,
    textAlign: "center",
    color: "#070f2d",
    textTransform: "uppercase",
  },
  more: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0.67,
    textAlign: "center",
    color: "grey",
  },

  hotellistContainer: {
    marginTop: 19,
    width: 144,
    height: 205,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#ffffff",
    marginBottom: 20,
    marginRight:8,
    elevation:5,
   
  },
  topHotel: {
    width: 144,
    height: 121,
    backgroundColor: "#c4c4c4",
  },
  detaiContainer: {
    padding: 10,
  },
  h1: {
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#413d3d",
  },
  h2: {
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#969393",
  },
});
